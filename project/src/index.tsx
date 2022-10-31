import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { TOfferCard } from './types';

const arrayOfCards:TOfferCard[] = [
  {
    isPremium: true,
    img: 'apartment-01',
    price: '120',
    rating: '80%',
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    id: 1,
  },
  {
    isPremium: false,
    img: 'room',
    price: '80',
    rating: '80%',
    title: 'Wood and stone place',
    type: 'Private room',
    id: 2,
  },
  {
    isPremium: false,
    img: 'apartment-02',
    price: '132',
    rating: '80%',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    id: 3,
  },
  {
    isPremium: true,
    img: 'apartment-03',
    price: '180',
    rating: '100%',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    id: 4,
  },
  {
    isPremium: false,
    img: 'room',
    price: '80',
    rating: '80%',
    title: 'Wood and stone place',
    type: 'Private room',
    id: 5,
  },
];

const Setting = {
  amountCards: 312,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      amountCards={Setting.amountCards} cards={arrayOfCards}
    />
  </React.StrictMode>,
);
