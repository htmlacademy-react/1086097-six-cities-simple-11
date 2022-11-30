import {createAction} from '@reduxjs/toolkit';
import { TOfferCard } from '../types';
import {AuthorizationStatus} from '../const';

export const settingLoadingStatus = createAction<boolean>('offers/settingLoadingStatus');
export const gettingOffers = createAction('offers/gettingOffers', (value:TOfferCard[]) => ({payload: value}));
export const changeCity = createAction('offers/changeCity', (value: string) => ({payload: value}));
export const changeSortType = createAction('offers/changeSortType', (value:string) => ({payload: value}));
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
