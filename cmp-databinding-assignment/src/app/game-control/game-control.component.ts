import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  counter: number = 0;
  running = false;
  @Output() clockTick = new EventEmitter<{ count: number }>();
  timer: any;

  constructor() {

  }

  ngOnInit(): void {
  }

  stopGame() {
    console.log('STOP')
    this.running = false;
    clearInterval(this.timer);
  }

  startGame() {
    console.log('START')
    this.running = true;
    this.counter = 0;
    this.setTimer();
  }

  setTimer() {
    this.timer = setInterval(() => {
      if (this.running) {
        this.counter++;
        let text = this.counter % 2 ? 'ODD' : 'EVEN';
        console.log(`${this.counter} ${text}`)
        this.clockTick.emit({ count: this.counter });
      }
    },
      1000);
  }

}
