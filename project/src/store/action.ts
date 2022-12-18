import {createAction} from '@reduxjs/toolkit';
// import { TOfferCard, UserData, TComment} from '../types';
import {AppRoute} from '../const';

// export const settingLoadingStatus = createAction<boolean>('offers/settingLoadingStatus');
// export const gettingOffers = createAction('offers/gettingOffers', (value:TOfferCard[]) => ({payload: value}));
// export const gettingOffersNearPlaces = createAction('offers/gettingOffersNearPlaces', (value:TOfferCard[]) => ({payload: value}));
// export const changeCity = createAction('offers/changeCity', (value: string) => ({payload: value}));
// export const changeSortType = createAction('offers/changeSortType', (value:string) => ({payload: value}));
// export const gettingComments = createAction('offers/gettingComments', (value:TComment[]) => ({payload: value}));

// export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
// export const settingUser = createAction<UserData | null>('user/settingUser');
// export const userLogout = createAction<UserData | null>('user/userLogout');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
// export const setError = createAction<string | null>('app/setError');
