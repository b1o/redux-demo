import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Socket } from 'ngx-socket-io';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { TodoActionTypes, AddTodo, AddTodoSuccess, AddTodoFail } from '../actions';
import { map, switchMap, catchError, share } from 'rxjs/operators';
import { TodoService } from '../services/todo.service';
import { createLocalAction } from '../../reducers';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private socket: Socket, private todoService: TodoService) {}

  @Effect()
  addTodo$: Observable<Action> = this.actions$.pipe(
    ofType(TodoActionTypes.AddTodo),
    map((action: AddTodo) => action.payload),
    switchMap(payload => this.todoService.addTodo(payload)
      .pipe(
        map(response => createLocalAction(new AddTodoSuccess(response))),
        catchError(err => of(new AddTodoFail(err)))
      )),
      share()
  );
}
