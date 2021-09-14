import { Component } from '@angular/core';

interface Log  {
  id: number;
  text: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDisplayed: boolean = false;
  logs: Log [] = [];

  constructor() {
  }

  toggleDisplay() {
    this.isDisplayed = !this.isDisplayed;
    let log : Log = {
      id: this.logs.length + 1,
      text: (new Date()).toLocaleTimeString()+' clicked',
    }
    this.logs.push( log );
  }


}
