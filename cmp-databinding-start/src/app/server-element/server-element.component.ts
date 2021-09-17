import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterContentChecked, OnDestroy {

  @Input('srvElement') element: {
    name: string,
    type: string,
    content: string,
  };
  @Input() name: string;

  constructor() {
    console.log(`ServerElementComponent: constructor called`);
  }

  ngOnInit(): void {
    console.log(`ServerElementComponent: ngOnInit called`);
  }

  ngDoCheck(): void {
    console.log(`ServerElementComponent: ngDoCheck called`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ServerElementComponent: ngOnChanges called`, changes);
  }

  ngAfterContentInit(): void {
    console.log(`ServerElementComponent: ngAfterContentInit called`);
  }

  ngAfterViewInit(): void {
    console.log(`ServerElementComponent: ngAfterViewInit called`);
  }

  ngAfterContentChecked(): void {
    console.log(`ServerElementComponent: ngAfterContentChecked called`);
  }

  ngOnDestroy(): void {
    console.log(`ServerElementComponent: ngOnDestroy called`);
  }

}
