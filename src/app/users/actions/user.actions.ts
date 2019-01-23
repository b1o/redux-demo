import { Action } from '@ngrx/store';

export enum UserActionTypes {
  UserConnect = '[User] UserConnect',
  UserDisconnect = '[User] UserDisconnect',
  UserRegister = '[User] UserRegister',
  UserSetId = '[User] UserSetId'
}

export class UserConnect implements Action {
  readonly type = UserActionTypes.UserConnect;

  constructor(public payload: any) {}
}

export class UserRegister implements Action {
  readonly type = UserActionTypes.UserRegister;

  constructor(public payload: any) {}
}

export class UserDisconnect implements Action {
  readonly type = UserActionTypes.UserDisconnect;

  constructor(public payload: any) {}
}

export class UserSetId implements Action {
  readonly type = UserActionTypes.UserSetId;

  constructor(public payload: any) {}
}

export type UserActions = UserConnect | UserDisconnect | UserRegister | UserSetId;
