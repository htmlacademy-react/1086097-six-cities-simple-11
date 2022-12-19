import {AuthorizationStatus, AppRoute} from '../../const';
import {useAppSelector} from '../../hooks/useAppSelector';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {logoutAction} from '../../store/api-action';
import {Link} from 'react-router-dom';
import {getAuthorizationStatus, getUser} from '../../store/user-process/selectors';
import {checkAuthAction} from '../../store/api-action';
import {useEffect} from 'react';

export default function HeaderNavList(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
  },[dispatch]);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);

  const handleOutAuthorizationStatusClick = () => {
    dispatch(logoutAction());
  };

  return (
    <ul className="header__nav-list">
      { authorizationStatus === AuthorizationStatus.NoAuth ?
        <li className="header__nav-item user">
          <div className="header__nav-profile">
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <Link className="header__nav-link" to={`${AppRoute.Login}`}>Зарегистрироваться</Link>
          </div>
        </li> :
        <li className="header__nav-item">
          <Link onClick={handleOutAuthorizationStatusClick} className="header__nav-link" to={`${AppRoute.Root}`}>
            <span className="header__user-name user__name">{user?.email}</span>
            <span className="header__signout">&nbsp; Sign out</span>
          </Link>
        </li>}
    </ul>
  );
}
