import {inject, bindable, customElement} from 'aurelia-framework';
// import $ from 'jquery';

@customElement('modal-pic')
@inject(Element)
export class ModalPic {
  @bindable source;

  constructor(element) {
    this.element = element;
  }
  
  attached() {
    // var _this = this;
    let self = this;
    this._aElem = this.element.getElementsByTagName('a')[0];
    this._aElem.addEventListener('click', (ev) => {
      // Chrome debugger fails to show the actual value of this when using =>

      // this = this._aElem in here!!!
      // let modalId = this.getAttribute('data-reveal-id'); // ev.target.getAttribute('data-reveal-id');
      let one = this; // this here is compiled to _this
      let _aElem = this._aElem; // self._aElem;

      let modalId = _aElem.attributes['data-reveal-id']; // this.attributes['data-reveal-id'].value;
      console.log(`modalId is ${modalId.value}`);
      $(`#${modalId.value}`).foundation('reveal', 'open');
    });
  }
  
  activate() {
    console.log(`ModalPic activate!!!`);
  }

  deactivate() {
    console.log('ModalPic deactivate');
  }
}