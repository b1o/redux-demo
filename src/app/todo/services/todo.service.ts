import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private http: HttpClient) {

  }

  addTodo(todo: Todo) {
    return this.http.post('http://localhost:3000/addTodo', todo);
  }
}
