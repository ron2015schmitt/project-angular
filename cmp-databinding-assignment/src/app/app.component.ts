import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onClockTick(data: {count: number}) {
    if (data.count % 2 === 0) {
      this.evenNumbers.push(data.count);
    } else {
      this.oddNumbers.push(data.count);
    }
  }
}
