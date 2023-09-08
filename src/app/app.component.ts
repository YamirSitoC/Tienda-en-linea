import { Component } from '@angular/core';


declare var  $:any;
declare function initianPageTiendaOnline([]):any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tiendaOnline';

  constructor(){
    setTimeout(() => {
      initianPageTiendaOnline($);
    }, 50);
  }
}
