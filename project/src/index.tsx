import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';


const Setting = {
  amountCards: 5,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      amountCards = {Setting.amountCards}
    />
  </React.StrictMode>,
);
