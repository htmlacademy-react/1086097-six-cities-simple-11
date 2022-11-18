import PlaceList from '../../components/place-list/place-list';
import CitysList from '../../components/citys-list/citys-list';
import Logo from '../../components/logo/logo';
import {Link} from 'react-router-dom';
import {TOfferCard} from '../../types';
import {Helmet} from 'react-helmet-async';
import Map from '../../components/map/map';
import {useState, useRef} from 'react';

type MainPageProps = {
  cards: TOfferCard[];
}

export default function MainPage({cards}: MainPageProps): JSX.Element {

  const sortFormRef = useRef<HTMLFormElement>(null);
  const sortButtonRef = useRef<HTMLSpanElement>(null);
  const sortListRef = useRef<HTMLUListElement>(null);

  const [selectedCard, setSelectedCard] = useState<TOfferCard | undefined>();
  const [outCard, setOutCard] = useState<TOfferCard | undefined>();

  const amountOfCards = cards.length ?? '';

  const onListCardHover = (cardId:number | undefined) => {
    const currentCard = cards.find((card) => card.id === cardId);
    setSelectedCard(currentCard);
  };

  const onListCardOut = (cardId:number | undefined) => {
    const currentCard = cards.find((card) => card.id === cardId);
    setOutCard(currentCard);
  };

  const handleSortButtonClick = () => {
    sortListRef.current?.classList.toggle('places__options--opened');
  };


  const sortByPopular = (offers: TOfferCard) => Number(offers);
  const sortLowToHigh = (offerA:TOfferCard, offerB:TOfferCard) => offerA.price - offerB.price;
  const sortHighToLow = (offerA:TOfferCard, offerB:TOfferCard) => offerA.price - offerB.price;
  const sortTopRatedFirst = (offerA:TOfferCard, offerB:TOfferCard) => Number(offerB.rating) - Number(offerA.rating);

  const sortOffersByType = (sortType: string, offers: TOfferCard[]) => {
    switch(sortType) {
      case 'popular':
        return cards.sort(sortByPopular);
      case 'lowToHigh':
        return cards.sort(sortLowToHigh);
      case 'highToLow':
        return cards.sort(sortHighToLow);
      case 'topRatedFirst':
        return cards.sort(sortTopRatedFirst);
    }
  };

  const handleFormChange = (evt:React.MouseEvent<HTMLFormElement | string | null>) => {
    const target = evt.target as HTMLElement;

    if (sortButtonRef.current) {
      if (target.tagName !== 'LI') {return;}

      sortListRef.current?.classList.toggle('places__options--opened');
      sortButtonRef.current.textContent = String(target.textContent);

      if (target.dataset.sort) {
        /* eslint-disable */console.log(sortOffersByType(target.dataset.sort, cards));
        /* eslint-disable */console.log(typeof target.dataset.sort);
      }
    }
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
            <CitysList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{amountOfCards} {amountOfCards > 1 ? 'places' : 'place'} to stay in Amsterdam</b>


              <form className="places__sorting" action="#" method="get" onClick={handleFormChange} ref={sortFormRef}>
                <span className="places__sorting-caption">Sort by </span>
                <span className="places__sorting-type" tabIndex={1} ref={sortButtonRef} onClick={handleSortButtonClick}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>


                <ul className="places__options places__options--custom" ref={sortListRef}>
                  <li className="places__option" data-sort="popular" tabIndex={2}>Popular</li>
                  <li className="places__option" data-sort="lowToHigh" tabIndex={3}>Price: low to high</li>
                  <li className="places__option" data-sort="highToLow" tabIndex={4}>Price: high to low</li>
                  <li className="places__option" data-sort="topRatedFirst" tabIndex={5}>Top rated first</li>
                </ul>
              </form>
              <PlaceList cards={cards} onListCardHover={onListCardHover} onListCardOut={onListCardOut}/>
            </section>
            <div className="cities__right-section">
              <Map selectedCard={selectedCard} outCard={outCard}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
