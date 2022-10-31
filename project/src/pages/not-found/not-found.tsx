import Logo from '../../components/logo/logo';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// import './not-found.css';

export default function NotFound(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>404</title>
      </Helmet>
      <header className="header" id="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main">
        <div className="container not-found" style={{}}>
          <h1 className="not-found__title"><span>404</span><br />Not Found</h1>
          <Link className="header__logo-link not-found__link" to="/">To Main Page</Link>
        </div>
      </main>
    </div>
  );
}
