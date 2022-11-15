import MainPage from '../../pages/main-page/main-page';
import NotFound from '../../pages/not-found/not-found';
import LoginPage from '../../pages/login-page/login-page';
import RoomPage from '../../pages/room-page/room-page';
// import PrivateRoute from '../private-route/private-route';
// import {AppRoute, AuthorizationStatus} from '../../const';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import {TOfferCard, TCitys} from '../../types';
import {HelmetProvider} from 'react-helmet-async';

type AppProps = {
  amountCards: number;
  cards:TOfferCard[];
  citys: TCitys;
}

function App({amountCards, cards, citys}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage amountCards={amountCards} cards={cards} citys={citys}/>} />
          {/* <Route path={AppRoute.Root} element={<MainPage amountCards={amountCards} cards={cards}/>} /> */}
          {/* <Route path={AppRoute.Room} element={<RoomPage cards={cards}/>} /> */}
          <Route path={`${AppRoute.Room}/:id`} element={<RoomPage cards={cards} />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route
            path={AppRoute.Room}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <RoomPage />
              </PrivateRoute>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
