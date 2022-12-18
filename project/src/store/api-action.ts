import {TOfferCard, UserData, AuthData, TComment, THotelId, TSubmitComment} from '../types';
import {APIRoute, AppRoute} from '../const';
import {saveToken, dropToken} from '../services/token';

import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';

import {redirectToRoute} from './action';

type ThunkApiConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

export const fetchOffersAction = createAsyncThunk<TOfferCard[], undefined, ThunkApiConfig>('offers/gettingOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TOfferCard[]>(APIRoute.Offers);
    return data;
  },
);

export const fetchCurrentOfferAction = createAsyncThunk<TOfferCard, string, ThunkApiConfig>(
  'offers/gettingCurrentOffer',
  async (id, {extra: api}) => {
    const {data} = await api.get<TOfferCard>(`${APIRoute.Offers}/${id}`);
    return data;
  },
);

export const fetchOffersNearPlacesAction = createAsyncThunk<TOfferCard[], string, ThunkApiConfig>(
  'offers/gettingOffersNearPlaces',
  async (hotelId, {extra: api}) => {
    const {data} = await api.get<TOfferCard[]>(`${APIRoute.Offers}/${hotelId}/nearby`);
    return data;
  },
);

export const fetchCommentsAction = createAsyncThunk<TComment[], THotelId, ThunkApiConfig>(
  'offers/gettingComments',
  async (hotelId, {extra: api}) => {
    const {data} = await api.get<TComment[]>(`${APIRoute.Comments}/${hotelId}`);
    return data;
  },
);

export const submitCommentAction = createAsyncThunk<TComment[], TSubmitComment, ThunkApiConfig>(
  'offers/submitComments',
  async ({hotelId, comment, rating}, {extra: api}) => {
    const {data} = await api.post<TComment[]>(`${APIRoute.Comments}/${hotelId}`, {comment, rating});
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, ThunkApiConfig>('user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, ThunkApiConfig>(
  'user/settingUser',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: user} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(user.token);
    dispatch(redirectToRoute(AppRoute.Root));
    return user;
  },
);

export const logoutAction = createAsyncThunk<void, undefined,ThunkApiConfig>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
