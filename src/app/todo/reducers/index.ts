import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import * as fromTodos from './todo.reducer';

export const getTodosState = createFeatureSelector('todos');

export const getTodosEntities = createSelector(
  getTodosState,
  fromTodos.getEntities
);
export const getTodosIds = createSelector(
  getTodosState,
  fromTodos.getIds
);
export const getAllTodos = createSelector(
  getTodosEntities,
  getTodosIds,
  (entites, ids) => {
    console.log('getAllTodos');
    return ids
      .map(id => entites[id])
      .sort(
        (a, b) =>
          new Date(b.createdOn).getTime() - new Date(a.createdOn).getTime());
  }
);

export const getTodoFilter = createSelector(
  getTodosState,
  fromTodos.getFilter
);

export const getCompletedTodosCount = createSelector(getAllTodos, (todos) => todos.filter(t => t.completed).length);
export const getUncompletedTodosCount = createSelector(getAllTodos, (todos) => todos.filter(t => !t.completed).length);
