import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item: Todo;

  @Output() edit = new EventEmitter<Todo>();
  @Output() select = new EventEmitter();
  @Output() removed = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onEdit(changes) {
    this.edit.emit({ ...this.item, ...changes });
  }

  remove() {
    this.removed.emit(this.item.id);
  }

  onChange(event: MatCheckboxChange) {
    console.log(event);
    this.select.emit({
      id: this.item.id,
      changes: { completed: event.checked }
    });
  }
}
