import dayjs from 'dayjs';
import {TOfferCard, TComment} from './types';

export const sortByPopular = (offers:TOfferCard) => Number(offers);
export const sortFromLowToHigh = (offerA:TOfferCard, offerB:TOfferCard) => offerA.price - offerB.price;
export const sortFromHighToLow = (offerA:TOfferCard, offerB:TOfferCard) => offerB.price - offerA.price;
export const sortTopRatedFirst = (offerA:TOfferCard, offerB:TOfferCard) => Number(offerB.rating) - Number(offerA.rating);
export const sortByDate = (commentA:TComment, commentB:TComment) => dayjs(commentA.date).valueOf() - dayjs(commentB.date).valueOf();

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomCity = () => {
  const CITIES_NAMES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
  const randomIndex = getRandomInteger(0, CITIES_NAMES.length - 1);
  return CITIES_NAMES[randomIndex];
};
