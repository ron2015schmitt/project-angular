import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent  {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // { static: true } needed so that it can be accessed inside ngOnInit
  @ViewChild('serverContentInput', { static: true } ) serverContentInput: ElementRef;
  // newServerName: string = 'MyName';
  // newServerContent: string = 'MyContent';


  onAddServer(nameInput: HTMLInputElement) {
    // console.log(`onAddServer; nameInput=${nameInput.value} newServerName=${this.newServerName} newServerContent=${this.newServerContent} `);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
