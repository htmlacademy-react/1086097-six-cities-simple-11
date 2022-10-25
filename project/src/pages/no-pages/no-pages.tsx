export default function NoPages(): JSX.Element {
  return (
    <div className="page page--gray page--main">

      <header className="header" id="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active" href="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main">
        <div className="container" style={{}}>
          <h1 className="" style={{textAlign: 'center'}}><span style={{fontSize: '150px', color: '#4481c3',}}>404</span><br />Not Found</h1>
          <a className="header__logo-link" href="/"
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
          </a>
        </div>
      </main>
    </div>
  );
}
