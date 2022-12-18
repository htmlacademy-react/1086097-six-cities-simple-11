import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {TOfferCard, TComment, TCity} from '../../types';

const getCitys = (state: State): TCity[] => state[NameSpace.Offers].citys;
const getCurrentNameOfCity = (state: State): string => state[NameSpace.Offers].currentNameOfCity;
const getSortType = (state: State): string => state[NameSpace.Offers].sortType;
const getOffers = (state: State): TOfferCard[] => state[NameSpace.Offers].offers;
const getCurrentOffer = (state: State): TOfferCard | undefined => state[NameSpace.Offers].currentOffer;
const getOffersNearPlaces = (state: State): TOfferCard[] => state[NameSpace.Offers].offersNearPlaces;
const getOffersByName = (state: State): TOfferCard[] => state[NameSpace.Offers].offersByName;
const getIsLoadingOffers = (state: State): boolean => state[NameSpace.Offers].isLoadingOffers;
const getComments = (state: State): TComment[] => state[NameSpace.Offers].comments;
const getIsSendingComment = (state: State): boolean => state[NameSpace.Offers].isSendingComment;

export {
  getCitys,
  getCurrentNameOfCity,
  getSortType,
  getOffers,
  getCurrentOffer,
  getOffersNearPlaces,
  getOffersByName,
  getIsLoadingOffers,
  getComments,
  getIsSendingComment,
};
