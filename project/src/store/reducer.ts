import {createReducer} from '@reduxjs/toolkit';
import {gettingOffers, changeCity, changeSortType} from './action';
import {arrayOfCards} from '../mocks/offers';
import {citys} from '../mocks/citys';
import {defaultCity} from '../const';
// import {TOfferCard} from '../types';

// const typeOfSortOffers = {
//   popular: (offers: TOfferCard) => offers,
//   lowToHigh: (offers: TOfferCard) => (offerA:TOfferCard, offerB:TOfferCard) => offerA.price - offerB.price,
//   highToLow: (offers: TOfferCard) => (offerA:TOfferCard, offerB:TOfferCard) => offerB.price - offerA.price,
//   // topRatedFirst: (offerA:TOfferCard, offerB:TOfferCard) => offerB.rating - offerA.rating,
// };

const initialState = {
  citys: citys,
  currentNameOfCity: defaultCity,
  offers: arrayOfCards,
  offersByName: arrayOfCards.filter((card) => card.city.name === defaultCity),
  sortType: 'highToLow',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(gettingOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.currentNameOfCity = String(action.payload);
      state.offersByName = state.offers.filter((card) => card.city.name === state.currentNameOfCity);
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = String(action.payload);
    });
});

export {reducer};
