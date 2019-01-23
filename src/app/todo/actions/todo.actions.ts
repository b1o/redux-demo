import { Action } from '@ngrx/store';
import { Todo } from '../models';

export enum TodoActionTypes {
  AddTodo = '[Todo] AddTodo',
  AddTodoSuccess = '[Todo] AddTodoSuccess',
  AddTodoFail = '[Todo] AddTodoFail',
  RemoveTodo = '[Todo] RemoveTodo',
  EditTodo = '[Todo] EditTodo',
  UpdateFilter = '[Todo] UpdateFilter'
}

export class UpdateFilter implements Action {
  readonly type = TodoActionTypes.UpdateFilter;

  constructor(public payload: any) {}
}

export class AddTodo implements Action {
  readonly type = TodoActionTypes.AddTodo;

  constructor(public payload: any) {}
}

export class AddTodoSuccess implements Action {
  readonly type = TodoActionTypes.AddTodoSuccess;

  constructor(public payload: any) {}
}

export class AddTodoFail implements Action {
  readonly type = TodoActionTypes.AddTodoFail;

  constructor(public payload: any) {}
}

export class RemoveTodo implements Action {
  readonly type = TodoActionTypes.RemoveTodo;

  constructor(public payload: number) {}
}

export class EditTodo implements Action {
  readonly type = TodoActionTypes.EditTodo;

  constructor(public payload: { id: number; changes: any }) {}
}

export type TodoActions =
  | RemoveTodo
  | EditTodo
  | UpdateFilter
  | AddTodo
  | AddTodoSuccess
  | AddTodoFail;
