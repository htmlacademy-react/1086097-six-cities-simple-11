import { TOfferCard } from '.././types';

const arrayOfCards:TOfferCard[] = [
  {
    isPremium: true,
    img: 'apartment-01',
    price: '120',
    rating: '80%',
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    id: 1,
    point:{
      title: 'Beautiful &amp; luxurious apartment at great location',
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
    }
  },
  {
    isPremium: false,
    img: 'room',
    price: '80',
    rating: '80%',
    title: 'Wood and stone place',
    type: 'Private room',
    id: 2,
    point:{
      title: 'Wood and stone place',
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
    }
  },
  {
    isPremium: false,
    img: 'apartment-02',
    price: '132',
    rating: '80%',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    id: 3,
    point:{
      title: 'Canal View Prinsengracht',
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
    }
  },
  {
    isPremium: true,
    img: 'apartment-03',
    price: '180',
    rating: '100%',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    id: 4,
    point:{
      title: 'Nice, cozy, warm big bed apartment',
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
    }
  },
  {
    isPremium: false,
    img: 'room',
    price: '80',
    rating: '80%',
    title: 'Wood and stone',
    type: 'Private room',
    id: 5,
    point:{
      title: 'Wood and stone',
      latitude: 52.3209553943508,
      longitude: 4.939309666406198,
    }
  },
];

export {arrayOfCards};
