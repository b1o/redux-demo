import { User } from '../models/user.model';
import { UserActions, UserActionTypes } from '../actions/user.actions';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export interface State extends EntityState<User> {
  currentUser: User;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState({
  currentUser: {
    id: null,
    name: null
  }
});

export function reducer(
  state: State = initialState,
  action: UserActions
): State {
  switch (action.type) {
    case UserActionTypes.UserRegister: {
      return {
        ...state,
        currentUser: { ...state.currentUser, name: action.payload.name }
      };
    }

    case UserActionTypes.UserSetId: {
      return {
        ...state,
        currentUser: { ...state.currentUser, id: action.payload }
      };
    }

    case UserActionTypes.UserConnect: {
      return adapter.addOne(action.payload, state);
    }

    case UserActionTypes.UserDisconnect: {
      return adapter.removeOne(action.payload, state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();
