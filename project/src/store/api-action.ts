// import {createAction} from '@reduxjs/toolkit';
import {TOfferCard} from '../types';
import {APIRoute, AuthorizationStatus} from '../const';

import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';

import {gettingOffers, changeCity, settingLoadingStatus, requireAuthorization} from './action';


export const fetchOffersAction = createAsyncThunk<void, undefined, {dispatch: AppDispatch; state: State; extra: AxiosInstance}>(
  'offers/gettingOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<TOfferCard[]>(APIRoute.Offers);
    dispatch(gettingOffers(data));
    dispatch(changeCity);
    dispatch(settingLoadingStatus(true));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {dispatch: AppDispatch; state: State; extra: AxiosInstance}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);
