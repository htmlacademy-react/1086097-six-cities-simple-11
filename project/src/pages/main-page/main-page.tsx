import СitiesList from '../../components/cities-list/cities-list';
import Logo from '../../components/logo/logo';
import {Link} from 'react-router-dom';
import {TOfferCard} from '../../types';
import {Helmet} from 'react-helmet-async';
import Map from '../../components/map/map';
import {city} from '../../mocks/city';
import {useState} from 'react';

type MainPageProps = {
  amountCards: number;
  cards:TOfferCard[];
}

export default function MainPage({amountCards, cards}: MainPageProps): JSX.Element {

  const [selectedCard, setSelectedCard] = useState<TOfferCard | undefined>();

  const onListCardHover = (cardId:number | undefined) => {
    const currentCard = cards.find((card) => card.id === cardId);
    setSelectedCard(currentCard);
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Main Page</title>
      </Helmet>
      <header className="header" id="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="/">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="/">
                  <span>Paris</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="/">
                  <span>Cologne</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="/">
                  <span>Brussels</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item tabs__item--active" to="/">
                  <span>Amsterdam</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="/">
                  <span>Hamburg</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to="/">
                  <span>Dusseldorf</span>
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{amountCards} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={1}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={2}>Popular</li>
                  <li className="places__option" tabIndex={3}>Price: low to high</li>
                  <li className="places__option" tabIndex={4}>Price: high to low</li>
                  <li className="places__option" tabIndex={5}>Top rated first</li>
                </ul>
              </form>
              <СitiesList cards={cards} onListCardHover={onListCardHover} />
            </section>
            <div className="cities__right-section">
              <Map city={city} cards={cards} selectedPoint={selectedCard} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
