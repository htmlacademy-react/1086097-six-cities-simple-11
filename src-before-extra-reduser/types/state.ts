import {store} from '../store/index.js';
import {AuthorizationStatus} from '../const';
import {UserData} from '../types';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
