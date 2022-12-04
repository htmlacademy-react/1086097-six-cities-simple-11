import MainPage from '../../pages/main-page/main-page';
import NotFound from '../../pages/not-found/not-found';
import LoginPage from '../../pages/login-page/login-page';
import RoomPage from '../../pages/room-page/room-page';
// import PrivateRoute from '../private-route/private-route';
// import {AppRoute, AuthorizationStatus} from '../../const';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import {HelmetProvider} from 'react-helmet-async';
import {useAppSelector} from '../../hooks/useAppSelector';

import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

function App(): JSX.Element {

  const cards = useAppSelector((state) => state.offersByName);

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route index element={<MainPage cards={cards} />} />
          {/* <Route path={AppRoute.Root} element={<MainPage amountCards={amountCards} cards={cards}/>} /> */}

          <Route path={`${AppRoute.Room}/:id`} element={<RoomPage cards={cards} />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path={AppRoute.Room} element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><RoomPage /></PrivateRoute>} /> */}
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
