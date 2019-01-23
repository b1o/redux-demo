import { Todo } from '../models/todo.model';
import { TodoActions, TodoActionTypes } from '../actions/todo.actions';

export interface State {
  ids: number[];
  entities: { [key: string]: Todo };
  filter: any;
}

export const initialState: State = {
  ids: [],
  entities: {},
  filter: null
};

export function reducer(
  state: State = initialState,
  action: TodoActions
): State {
  switch (action.type) {
    case TodoActionTypes.AddTodoSuccess: {
      const newTodo = action.payload;

      const newIds = [...state.ids, newTodo.id];

      const newEntities = { ...state.entities, [newTodo.id]: newTodo };

      return { ...state, ids: newIds, entities: newEntities };
    }

    case TodoActionTypes.RemoveTodo: {
      const todoId = action.payload;
      const newIds = state.ids.filter(id => id !== todoId);
      const newEntities = { ...state.entities };
      delete newEntities[todoId];

      return { ...state, ids: newIds, entities: newEntities };
    }

    case TodoActionTypes.UpdateFilter: {
      const filter = action.payload;

      return { ...state, filter };
    }

    case TodoActionTypes.EditTodo: {
      const todoId = action.payload.id;
      const changes = action.payload.changes;

      const newEntities = { ...state.entities };
      newEntities[todoId] = { ...newEntities[todoId], ...changes };

      return { ...state, entities: newEntities };
    }

    default: {
      return state;
    }
  }
}

export const getIds = (state: State) => state.ids;
export const getEntities = (state: State) => state.entities;
export const getFilter = (state: State) => state.filter;
