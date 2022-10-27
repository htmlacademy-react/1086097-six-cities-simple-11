import MainPage from '../../pages/main-page/main-page';
import NoPages from '../../pages/no-pages/no-pages';
import LoginPage from '../../pages/login-page/login-page';
import RoomPage from '../../pages/room-page/room-page';
// import PrivateRoute from '../private-route/private-route';
// import {AppRoute, AuthorizationStatus} from '../../const';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import {CardProps} from '../../types/types';
import {HelmetProvider} from 'react-helmet-async';

type MainProps = {
  amountCards: number;
  cards:CardProps[];
}

function App({amountCards, cards}: MainProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage amountCards={amountCards} cards={cards}/>} />
          {/* <Route path={AppRoute.Root} element={<MainPage amountCards={amountCards} cards={cards}/>} /> */}
          <Route path={AppRoute.Room} element={<RoomPage />} />
          <Route path={`${AppRoute.Room}/:id`} element={<RoomPage />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path="*" element={<NoPages />} />
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
