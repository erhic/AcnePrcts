import { Component } from "@angular/core";

@Component({
   selector: 'pm-root',
   template: `<div><h1>{{pageTitle}}</h1>
   my first componnet</div>`
})

export class AppComponent{
  pageTitle : string = 'Acne Products'
}