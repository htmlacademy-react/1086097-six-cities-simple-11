import {createAction} from '@reduxjs/toolkit';
import { TOfferCard } from '../types';

export const gettingOffers = createAction('offers/gettingOffers', (value:TOfferCard[]) => ({payload: value}));
export const сityСhange = createAction('offers/сityСhange', (value) => ({payload: String(value)}));
