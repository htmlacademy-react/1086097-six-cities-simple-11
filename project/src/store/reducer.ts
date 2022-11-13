import {createReducer} from '@reduxjs/toolkit';
import {gettingOffers, сityСhange} from './action';
import {arrayOfCards} from '../mocks/offers';

const initialState = {
  city: 'Amsterdam',
  cards: arrayOfCards,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(gettingOffers, (state) => {
      state.cards = arrayOfCards.filter((card) => card.city.name === state.city);
    })
    .addCase(сityСhange, (state, action) => {
      state.city = action.payload;
    });
});

export {reducer};
