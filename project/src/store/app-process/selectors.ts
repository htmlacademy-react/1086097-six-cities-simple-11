import {NameSpace} from '../../const';
import {State} from '../../types/state';

const getError = (state: State): string | null => state[NameSpace.App].error;

export {
  getError,
};
