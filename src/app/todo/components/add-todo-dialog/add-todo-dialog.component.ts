import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models';
import { Store } from '@ngrx/store';
import { Socket } from 'ngx-socket-io';
import { AddTodo } from '../../actions';

@Component({
  selector: 'app-add-todo-dialog',
  templateUrl: './add-todo-dialog.component.html',
  styleUrls: ['./add-todo-dialog.component.scss']
})
export class AddTodoDialogComponent implements OnInit {
  @Output() addTodo = new EventEmitter();

  public description = '';
  constructor(private socket: Socket) {}

  ngOnInit() {}

  onAdd() {

    this.addTodo.emit(this.description);
    this.description = '';
  }

}
