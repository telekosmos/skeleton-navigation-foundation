import {inject, bindable, customElement} from 'aurelia-framework';
// import $ from 'jquery';
import {HttpClient} from 'aurelia-http-client';
import _ from 'lodash';

@customElement('modal-pic')
@inject(Element, HttpClient)
export class ModalPic {
  @bindable source;

  _apiGetSizes = 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=1181f9b401dc890d90276ec6cf880ed7&photo_id=####&format=json'
  constructor(element, http) {
    this.element = element;
    this.http = http;
  }
  
  attached() {
    let self = this;
    this._aElem = this.element.getElementsByTagName('a')[0];
    this._aElem.addEventListener('click', (ev) => {
      
      let modalId = this._aElem.attributes['data-reveal-id']; // this.attributes['data-reveal-id'].value;
      let picId = modalId.value.substring(3);
      let url = this._apiGetSizes.replace('####', picId);
      this.http.jsonp(url).then(response => {
        let picObj = _.filter(response.content.sizes.size, item => {
          return item.label == "Large";
        });
        self.pic = picObj[0].source;
        $(`#${modalId.value}`).foundation('reveal', 'open');
      });
      // $(`#${modalId.value}`).foundation('reveal', 'open');
    });
  }
  
  activate() {
    console.log('ModalPic activate!!!');
  }

  deactivate() {
    console.log('ModalPic deactivate');
  }
}