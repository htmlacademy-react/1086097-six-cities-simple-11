import MainPage from '../../pages/main-page/main-page';
import NotFound from '../../pages/not-found/not-found';
import LoginPage from '../../pages/login-page/login-page';
import RoomPage from '../../pages/room-page/room-page';
// import PrivateRoute from '../private-route/private-route';
// import {AppRoute, AuthorizationStatus} from '../../const';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import {HelmetProvider} from 'react-helmet-async';

import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path={`${AppRoute.Room}/:id`} element={<RoomPage />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path={AppRoute.Room} element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><RoomPage /></PrivateRoute>} /> */}
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
