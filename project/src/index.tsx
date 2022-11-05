import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {arrayOfCards} from './mocks/offers';

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
