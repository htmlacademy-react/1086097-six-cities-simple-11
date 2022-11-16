import {createReducer} from '@reduxjs/toolkit';
import {gettingOffers, сityСhange} from './action';
import {arrayOfCards} from '../mocks/offers';
import {citys} from '../mocks/citys';
// import {TOfferCard} from '../types/';

const initialState = {
  citys: citys,
  currentNameOfCity: 'Paris',
  offers: arrayOfCards,
  offersByName: arrayOfCards.filter((card) => card.city.name === 'Paris'),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(gettingOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(сityСhange, (state, action) => {
      state.currentNameOfCity = String(action.payload);
      state.offersByName = state.offers.filter((card) => card.city.name === state.currentNameOfCity);
    });
});

export {reducer};
