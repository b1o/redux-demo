import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers/todo.reducer';
import { AddTodo } from '../../actions';
import { Todo } from '../../models';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {
  messages = [
    {
      from: 'asd',
      text: 'asdadsad'
    },
    {
      from: 'me',
      text: 'asdadsad'
    },
    {
      from: 'asd',
      text: 'asdadsad'
    },
    {
      from: 'me',
      text: 'asdadsad'
    }
  ];

  constructor(private store: Store<State>, private todoService: TodoService) {}

  ngOnInit() {}

  onTodo(todo) {
    this.store.dispatch(
      new AddTodo({
        id: new Date().getTime(),
        description: todo,
        completed: false,
        createdOn: new Date()
      })
    );
  }
}
