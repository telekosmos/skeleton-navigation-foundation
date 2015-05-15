import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Flickr{
  heading = 'Flickr';
  images = [];
  url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=mountain&tagmode=any&format=json';

  constructor(http){
    this.http = http;
  }

  activate(){
    return this.http.jsonp(this.url).then(response => {
      this.images = response.content.items;
      let regexp = /\/(\d+)\/$/;
      this.images = this.images.map(function(img, index) {
        let res = regexp.exec(img.link);
        img.imgId = `img${res[1]}`;

        return img;
      })
    });
  }

  canDeactivate(){
    return confirm('Are you sure you want to leave?');
  }
}
