import {createReducer} from '@reduxjs/toolkit';
import {gettingOffers, сityСhange} from './action';
import {arrayOfCards} from '../mocks/offers';

const initialState = {
  currentCity: 'Amsterdam',
  offers: arrayOfCards,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(gettingOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(сityСhange, (state, action) => {
      state.currentCity = String(action.payload);
      state.offers = state.offers.filter((card) => card.city.name === state.currentCity);
    });
});

export {reducer};
