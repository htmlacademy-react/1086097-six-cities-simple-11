import {createReducer} from '@reduxjs/toolkit';
import {gettingOffers, changeCity, changeSortType, settingLoadingStatus, requireAuthorization, setError, settingUser} from './action';
import {AuthorizationStatus} from '../const';

// import {arrayOfCards} from '../mocks/offers';

import {InitalState} from '../types';
import {citys} from '../mocks/citys';
import {DEFAULT_CITY, SortTypes} from '../const';
import {sortByPopular, sortFromLowToHigh, sortFromHighToLow, sortTopRatedFirst} from '../utils';

const initialState: InitalState = {
  citys: citys,
  currentNameOfCity: DEFAULT_CITY,
  offers: [],
  offersByName: [],
  sortType: 'Popular',
  isLoadingOffers: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  user: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(gettingOffers, (state, action) => {
      state.offers = action.payload;
      state.offersByName = state.offers.filter((offer) => offer.city.name === state.currentNameOfCity);
    })
    .addCase(settingLoadingStatus, (state, action) => {
      state.isLoadingOffers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.currentNameOfCity = action.payload;
      state.offersByName = state.offers.filter((offer) => offer.city.name === state.currentNameOfCity);
      state.sortType = SortTypes.Popular;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(settingUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(changeSortType, (state, action) => {

      const sortByType = {
        [SortTypes.Popular]: sortByPopular,
        [SortTypes.LowToHigh]: sortFromLowToHigh,
        [SortTypes.HighToLow]: sortFromHighToLow,
        [SortTypes.TopRatedFirst]: sortTopRatedFirst,
      };

      state.sortType = String(action.payload);
      state.offersByName = state.offersByName.sort(sortByType[state.sortType as keyof typeof sortByType]);

      // switch(state.sortType) {
      //   case SortTypes.Popular:
      //     state.offersByName.sort(sortByPopular);
      //     break;
      //   case SortTypes.LowToHigh:
      //     state.offersByName.sort(sortFromLowToHigh);
      //     break;
      //   case SortTypes.HighToLow:
      //     state.offersByName.sort(sortFromHighToLow);
      //     break;
      //   case SortTypes.TopRatedFirst:
      //     state.offersByName.sort(sortTopRatedFirst);
      //     break;
      // }
    });
});

export {reducer};
