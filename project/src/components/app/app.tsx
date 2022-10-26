import MainPage from '../../pages/main-page/main-page';
import NoPages from '../../pages/no-pages/no-pages';
import LoginPage from '../../pages/login-page/login-page';
import RoomPage from '../../pages/room-page/room-page';
import PrivateRoute from '../private-route/private-route';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type AppScreenProps = {
  amountCards: number;
}

function App({amountCards}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage amountCards={amountCards}/>} />
        {/* <Route path={AppRoute.Root} element={<MainPage amountCards={amountCards}/>} /> */}
        {/* <Route path={AppRoute.Room} element={<RoomPage />} /> */}
        <Route path={`${AppRoute.Room}/:id`} element={<RoomPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path="*" element={<NoPages />} />
        <Route
          path={AppRoute.Room}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <RoomPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
