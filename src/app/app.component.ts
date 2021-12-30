import { Component } from "@angular/core";

@Component({
  selector: 'app-root', //valid CSS selector value with name convention: aaa-bbb-ccc
  //template: `<p>Hello World!</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //styles: ['']
})
export class AppComponent {
  name = 'Bruno'
  imgURL = 'https://picsum.photos/id/237/500/500'

  getName() {
    return this.name
  }

  // no need to import KeyboardEvent, angular knows by default
  // EventTarget interface does not contain a 'value' property,
  // so we have to use 'Type Assertion'
  // (e.target as HTMLInputElement)
  //
  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value
  }

  logImg(event: string) {
    console.log(event)
  }
}

/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics';
}
*/
