import {store} from '../store/index.js';
import {AuthorizationStatus} from '../const';
import {UserData} from '../types';
import {TCity, TOfferCard, TComment} from './index';

export type TUserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
};

export type TAppProcess = {
  error: string | null;
};

export type TOfferProcess = {
  citys: TCity[];
  currentNameOfCity: string;
  offers: TOfferCard[];
  offersNearPlaces: TOfferCard[];
  offersByName: TOfferCard[];
  sortType: string;
  isLoadingOffers: boolean;
  comments: TComment[];
  isSendingComment: boolean;
  currentOffer: TOfferCard | undefined;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
