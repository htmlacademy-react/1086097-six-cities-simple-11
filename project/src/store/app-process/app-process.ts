import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import { TAppProcess } from '../../types/state';

const initialState: TAppProcess = {
  error: null,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearErrorAction: (state) => {state.error = null;}
  },
});

export const {setError, clearErrorAction} = appProcess.actions;
