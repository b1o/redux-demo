import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers/todo.reducer';
import { Observable } from 'rxjs';
import {
  getCompletedTodosCount,
  getUncompletedTodosCount,
  getTodoFilter
} from '../../reducers';
import { UpdateFilter } from '../../actions';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.scss']
})
export class TodoFilterComponent implements OnInit {
  completedCount$: Observable<number>;
  uncompletedCount$: Observable<number>;

  currentFilter;

  constructor(private store: Store<State>) {
    this.completedCount$ = this.store.select(getCompletedTodosCount);
    this.uncompletedCount$ = this.store.select(getUncompletedTodosCount);

    this.store.select(getTodoFilter).subscribe(data => {
      if (data) {
        if (data.completed) {
          this.currentFilter = 'done';
        } else {
          this.currentFilter = 'pending';
        }
      } else {
        this.currentFilter = 'all';
      }
    });
  }

  ngOnInit() {}

  showAll() {
    this.store.dispatch(new UpdateFilter(null));
  }

  showCompletedOnly() {
    this.store.dispatch(new UpdateFilter({ completed: true }));
  }

  showUncompletedOnly() {
    this.store.dispatch(new UpdateFilter({ completed: false }));
  }
}
