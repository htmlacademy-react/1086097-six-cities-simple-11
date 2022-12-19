import Logo from '../../components/logo/logo';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useRef, FormEvent} from 'react';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {loginAction} from '../../store/api-action';
import {AuthData} from '../../types/';
import {getRandomCity} from '../../utils';
import {AppRoute, PASSWORD_WARN, PASSWORD_MATCH} from '../../const';
import {changeCity} from '../../store/offers-process/offers-process';

export default function LoginPage(): JSX.Element {

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      if (!passwordRef.current.value.match(PASSWORD_MATCH)) {
        toast.warn(PASSWORD_WARN);
        return;
      }

      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  const randomNameOfCity = getRandomCity();

  const handleLinkClick = () => {
    dispatch(changeCity(randomNameOfCity));
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit={handleSubmit} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={`${AppRoute.Root}`} onClick={handleLinkClick}>
                <span>{randomNameOfCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
