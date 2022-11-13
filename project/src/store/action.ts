import {createAction} from '@reduxjs/toolkit';

export const gettingOffers = createAction('offers/gettingOffers');
export const сityСhange = createAction('offers/сityСhange', (value) => ({payload: value}));
