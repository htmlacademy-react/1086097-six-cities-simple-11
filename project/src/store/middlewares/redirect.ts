import {PayloadAction} from '@reduxjs/toolkit';
import browserHistory from '../../browser-history';
import {Middleware} from 'redux';
// import {reducer} from '../reducer';

// type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware =
  (_store) =>
    (nextDispatch) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'app/redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return nextDispatch(action);
      };

// import { Middleware, PayloadAction } from '@reduxjs/toolkit';
// import { REDIRECT_ACTION_TYPE } from '../../consts/consts';
// import browserHistory from '../../services/browser-history';

// const redirect: Middleware = (store)=>(nextDispatch)=>(action: PayloadAction<string>)=>{
//   if(action.type === REDIRECT_ACTION_TYPE){
//     browserHistory.push(action.payload);
//   }
//   nextDispatch(action);
// };

// export default redirect;
