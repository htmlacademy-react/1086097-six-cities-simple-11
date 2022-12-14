import {store} from '../store';
import {setError, clearErrorAction} from '../store/app-process/app-process';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  setTimeout(() => {
    store.dispatch(clearErrorAction());
  }, 3000);
};
