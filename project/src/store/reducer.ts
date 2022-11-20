import {createReducer} from '@reduxjs/toolkit';
import {gettingOffers, changeCity, changeSortType} from './action';
import {arrayOfCards} from '../mocks/offers';
import {citys} from '../mocks/citys';
import {defaultCity, SortTypes} from '../const';
import {sortByPopular, sortFromLowToHigh, sortFromHighToLow, sortTopRatedFirst} from '../utils';

const initialState = {
  citys: citys,
  currentNameOfCity: defaultCity,
  offers: arrayOfCards,
  offersByName: arrayOfCards.filter((card) => card.city.name === defaultCity),
  sortType: 'Popular',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(gettingOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.currentNameOfCity = String(action.payload);
      state.offersByName = state.offers.filter((card) => card.city.name === state.currentNameOfCity);
      state.sortType = SortTypes.Popular;
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
