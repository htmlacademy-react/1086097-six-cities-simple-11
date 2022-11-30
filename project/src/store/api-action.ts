// import {createAction} from '@reduxjs/toolkit';
import {TOfferCard, UserData, AuthData} from '../types';
import {APIRoute, AuthorizationStatus, AppRoute} from '../const';
import {saveToken, dropToken} from '../services/token';

import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
// import {store} from './';

import {gettingOffers, changeCity, settingLoadingStatus, requireAuthorization, settingUser, redirectToRoute} from './action';


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
      const {data: user} = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(settingUser(user));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {dispatch: AppDispatch; state: State; extra: AxiosInstance}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: user} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(user.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(settingUser(user));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);


export const logoutAction = createAsyncThunk<void, undefined, {dispatch: AppDispatch; state: State; extra: AxiosInstance}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(settingUser(null));
  },
);

// export const clearErrorAction = createAsyncThunk(
//   'page/clearError',
//   () => {
//     setTimeout(
//       () => store.dispatch(setError(null)),
//       TIMEOUT_SHOW_ERROR,
//     );
//   },
// );
