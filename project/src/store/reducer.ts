import {createReducer} from '@reduxjs/toolkit';
import {gettingOffers, changeCity} from './action';
import {arrayOfCards} from '../mocks/offers';
import {citys} from '../mocks/citys';
import {defaultCity} from '../const';

const initialState = {
  citys: citys,
  currentNameOfCity: defaultCity,
  offers: arrayOfCards,
  offersByName: arrayOfCards.filter((card) => card.city.name === defaultCity),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(gettingOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.currentNameOfCity = String(action.payload);
      state.offersByName = state.offers.filter((card) => card.city.name === state.currentNameOfCity);
    });
});

export {reducer};
