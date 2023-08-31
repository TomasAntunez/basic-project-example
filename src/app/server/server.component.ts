import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  readonly serverId: number = 10;
  private readonly serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
