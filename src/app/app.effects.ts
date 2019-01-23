import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Socket } from 'ngx-socket-io';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private socket: Socket) {}

  @Effect({ dispatch: false }) global$: Observable<Action> = this.actions$.pipe(
    filter((action: any) => !action.fromServer && !action.type.includes('@ngrx') && !action.local),
    map(action => this.socket.emit('action', action))
  );
}
