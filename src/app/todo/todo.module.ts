import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as fromTodos from './reducers/todo.reducer';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoDialogComponent } from './components/add-todo-dialog/add-todo-dialog.component';

import { HttpClientModule } from '@angular/common/http';

import { TodoPageComponent } from './components/todo-page/todo-page.component';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './effects/todo.effects';
import { SharedModule } from '../shared/shared.module';
import { TodoFilterComponent } from './components/todo-filter/todo-filter.component';

@NgModule({
  declarations: [
    TodoItemComponent,
    TodoListComponent,
    AddTodoDialogComponent,
    TodoPageComponent,
    TodoFilterComponent
  ],
  exports: [TodoPageComponent],
  imports: [
    SharedModule,
    HttpClientModule,
    StoreModule.forFeature('todos', fromTodos.reducer),
    EffectsModule.forFeature([TodoEffects])
  ]
})
export class TodoModule {}
