import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers/todo.reducer';
import { Observable, combineLatest } from 'rxjs';
import { Todo } from '../../models';
import { getAllTodos, getTodoFilter } from '../../reducers';
import { EditTodo, RemoveTodo } from '../../actions';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todos$: Observable<Todo[]>;
  public filter$: Observable<any>;

  public filteredTodos$: Observable<Todo[]>;

  constructor(private store: Store<State>) {
    this.todos$ = this.store.select(getAllTodos);
    this.filter$ = this.store.select(getTodoFilter);

    this.filteredTodos$ = combineLatest(this.todos$, this.filter$).pipe(
      map(([items, f]) => {
        if (f) {
          return items.filter(i =>
            Object.keys(f)
              .map(key => i[key] === f[key])
              .some(r => r)
          );
        }
        return items;
      })
    );
  }

  onComplete(todo) {
    this.store.dispatch(new EditTodo(todo));
  }

  onItemRemoved(id) {
    this.store.dispatch(new RemoveTodo(id));
  }

  ngOnInit() {}
}
