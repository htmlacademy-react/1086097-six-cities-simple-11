import {AuthorizationStatus, NameSpace} from '../../const';
import {State} from '../../types/state';
import {UserData} from '../../types';

const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
const getUser = (state: State): UserData | null => state[NameSpace.User].user;

export {
  getAuthorizationStatus,
  getUser
};
