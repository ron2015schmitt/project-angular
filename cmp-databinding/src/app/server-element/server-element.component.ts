import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

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
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log(`ServerElementComponent: constructor called`);
  }

  ngOnInit(): void {
    console.log(`ServerElementComponent: ngOnInit called
    content=${this.header.nativeElement.textContent}
    paragraph=${this.paragraph.nativeElement.textContent}`);
  }

  ngDoCheck(): void {
    console.log(`ServerElementComponent: ngDoCheck called`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ServerElementComponent: ngOnChanges called`, changes);
  }

  ngAfterContentInit(): void {
    console.log(`ServerElementComponent: ngAfterContentInit called
    paragraph=${this.paragraph.nativeElement.textContent}`);

  }

  ngAfterViewInit(): void {
    console.log(`ServerElementComponent: ngAfterViewInit called   content=${this.header.nativeElement.textContent}`);
  }

  ngAfterContentChecked(): void {
    console.log(`ServerElementComponent: ngAfterContentChecked called`);
  }

  ngOnDestroy(): void {
    console.log(`ServerElementComponent: ngOnDestroy called`);
  }

}
