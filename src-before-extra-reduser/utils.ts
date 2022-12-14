import {TOfferCard} from './types';

export const sortByPopular = (offers:TOfferCard) => Number(offers);
export const sortFromLowToHigh = (offerA:TOfferCard, offerB:TOfferCard) => offerA.price - offerB.price;
export const sortFromHighToLow = (offerA:TOfferCard, offerB:TOfferCard) => offerB.price - offerA.price;
export const sortTopRatedFirst = (offerA:TOfferCard, offerB:TOfferCard) => Number(offerB.rating) - Number(offerA.rating);
