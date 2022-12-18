import dayjs from 'dayjs';
import {TOfferCard, TComment} from './types';

export const sortByPopular = (offers:TOfferCard) => Number(offers);
export const sortFromLowToHigh = (offerA:TOfferCard, offerB:TOfferCard) => offerA.price - offerB.price;
export const sortFromHighToLow = (offerA:TOfferCard, offerB:TOfferCard) => offerB.price - offerA.price;
export const sortTopRatedFirst = (offerA:TOfferCard, offerB:TOfferCard) => Number(offerB.rating) - Number(offerA.rating);
export const sortByDate = (commentA:TComment, commentB:TComment) => dayjs(commentA.date).valueOf() - dayjs(commentB.date).valueOf();
