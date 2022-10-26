import Logo from '../../components/logo/logo';
import { Link } from 'react-router-dom';

export default function NoPages(): JSX.Element {
  return (
    <div className="page page--gray page--main">

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
        <div className="container" style={{}}>
          <h1 className="" style={{textAlign: 'center'}}><span style={{fontSize: '150px', color: '#4481c3',}}>404</span><br />Not Found</h1>
          <Link className="header__logo-link" to="/"
            style={{textAlign: 'center',
              display: 'block',
              width: 'fit-content',
              margin: 'auto',
              padding: '14px 50px 12px',
              background: '#4481c3',
              color: '#ffffff',
              marginTop: '10%',
              textTransform: 'uppercase'}}
          >To Main Page
          </Link>
        </div>
      </main>
    </div>
  );
}
