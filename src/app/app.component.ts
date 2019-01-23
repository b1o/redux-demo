import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { State, createLocalAction } from './reducers';
import { Store } from '@ngrx/store';
import { UserSetId } from './users/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-demo';

  constructor(private socket: Socket, private store: Store<State>) {
    this.socket.on('connect', (data) => this.store.dispatch(createLocalAction(new UserSetId(this.socket.ioSocket.id))));

    this.socket.on('action', data => {
      this.store.dispatch(data);
      console.log('got action', data);
    });

    this.socket.on('state', data => {
      for (const action of data) {
        this.store.dispatch(action);
      }
    });
  }
}
