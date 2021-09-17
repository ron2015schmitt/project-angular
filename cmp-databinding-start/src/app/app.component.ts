import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{
    name: 'Server B',
    type: 'blueprint',
    content: 'web app',
  }];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    },
    );
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    console.log(`onBlueprintAdded`)
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirstElement() {
    this.serverElements[0].name = 'Change';
  }

  onDestroyFirstElement() {
    this.serverElements.splice(0, 1);
  }


}
