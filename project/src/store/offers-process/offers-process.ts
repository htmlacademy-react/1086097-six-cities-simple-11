import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {fetchOffersAction, fetchOffersNearPlacesAction, fetchCommentsAction, submitCommentAction} from '../api-action';
import {sortByPopular, sortFromLowToHigh, sortFromHighToLow, sortTopRatedFirst} from '../../utils';

import { TOfferProcess } from '../../types/state';
import {DEFAULT_CITY, SortTypes} from '../../const';
import {citys} from '../../mocks/citys';

const initialState: TOfferProcess = {
  citys: citys,
  currentNameOfCity: DEFAULT_CITY,
  offers: [],
  offersNearPlaces: [],
  offersByName: [],
  sortType: 'Popular',
  isLoadingOffers: true,
  comments: [],
  isSendingComment: false,
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.currentNameOfCity = action.payload;
      state.offersByName = state.offers.filter((offer) => offer.city.name === state.currentNameOfCity);
    },
    changeSortType: (state, action: PayloadAction<string>) => {
      const sortByType = {
        [SortTypes.Popular]: sortByPopular,
        [SortTypes.LowToHigh]: sortFromLowToHigh,
        [SortTypes.HighToLow]: sortFromHighToLow,
        [SortTypes.TopRatedFirst]: sortTopRatedFirst,
      };
      state.sortType = String(action.payload);
      state.offersByName = state.offersByName.sort(sortByType[state.sortType as keyof typeof sortByType]);
    },
  },
  extraReducers(builder){
    builder
      .addCase(fetchOffersAction.pending, (state)=>{
        state.isLoadingOffers = true;
      })
      .addCase(fetchOffersAction.rejected, (state)=>{
        state.isLoadingOffers = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action)=>{
        state.offers = action.payload;
        state.offersByName = state.offers.filter((offer) => offer.city.name === state.currentNameOfCity);
        state.isLoadingOffers = true;
      })

      .addCase(fetchOffersNearPlacesAction.pending, (state)=>{
        state.isLoadingOffers = true;
      })
      .addCase(fetchOffersNearPlacesAction.rejected, (state)=>{
        state.isLoadingOffers = true;
      })
      .addCase(fetchOffersNearPlacesAction.fulfilled, (state, action)=>{
        state.offersNearPlaces = action.payload;
        state.isLoadingOffers = false;
      })

      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })

      .addCase(submitCommentAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isSendingComment = false;
      })
      .addCase(submitCommentAction.pending, (state, action) => {
        state.isSendingComment = true;
      });
  }
});

export const {changeCity, changeSortType} = offersProcess.actions;
