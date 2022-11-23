import PlaceList from '../../components/place-list/place-list';
import CitysList from '../../components/citys-list/citys-list';
import Loading from '../../components/loading/loading';
import Logo from '../../components/logo/logo';
import {Link} from 'react-router-dom';
import {TOfferCard} from '../../types';
import {Helmet} from 'react-helmet-async';
import Map from '../../components/map/map';
import {useState, useRef} from 'react';
import {changeSortType} from '../../store/action';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {SortTypes, SortTitle} from '../../const';
import {useAppSelector} from '../../hooks/useAppSelector';

type MainPageProps = {
  cards: TOfferCard[];
}

export default function MainPage({cards}: MainPageProps): JSX.Element {
  const isLoadind = useAppSelector((state) => state.isLoadingOffers);
  const typeOfSort = useAppSelector((state) => state.sortType);
  const currentCity = useAppSelector((state) => state.currentNameOfCity);
  const dispatch = useAppDispatch();

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

  // const target = evt.target as HTMLElement;

  const handleSortPopularItemClick = () => {
    dispatch(changeSortType(SortTypes.Popular));
    sortListRef.current?.classList.toggle('places__options--opened');
  };

  const handleSortLowToHighItemClick = () => {
    dispatch(changeSortType(SortTypes.LowToHigh));
    sortListRef.current?.classList.toggle('places__options--opened');
  };

  const handleSortHighToLowItemClick = () => {
    dispatch(changeSortType(SortTypes.HighToLow));
    sortListRef.current?.classList.toggle('places__options--opened');
  };

  const handleSortTopRatedFirstItemClick = () => {
    dispatch(changeSortType(SortTypes.TopRatedFirst));
    sortListRef.current?.classList.toggle('places__options--opened');
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

      { isLoadind ?
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
                <b className="places__found">{amountOfCards} {amountOfCards > 1 ? 'places' : 'place'} to stay in {currentCity}</b>


                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by </span>
                  <span className="places__sorting-type" tabIndex={1} onClick={handleSortButtonClick}>
                    {SortTitle[typeOfSort as keyof typeof SortTitle]}
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom" ref={sortListRef}>
                    <li className={`places__option ${typeOfSort === SortTypes.Popular ? 'places__option--active' : ''}`} tabIndex={2} onClick={handleSortPopularItemClick}>Popular</li>
                    <li className={`places__option ${typeOfSort === SortTypes.LowToHigh ? 'places__option--active' : ''}`} tabIndex={3} onClick={handleSortLowToHighItemClick}>Price: low to high</li>
                    <li className={`places__option ${typeOfSort === SortTypes.HighToLow ? 'places__option--active' : ''}`} tabIndex={4} onClick={handleSortHighToLowItemClick}>Price: high to low</li>
                    <li className={`places__option ${typeOfSort === SortTypes.TopRatedFirst ? 'places__option--active' : ''}`} tabIndex={5} onClick={handleSortTopRatedFirstItemClick}>Top rated first</li>
                  </ul>
                </form>
                <PlaceList cards={cards} onListCardHover={onListCardHover} onListCardOut={onListCardOut}/>
              </section>
              <div className="cities__right-section">
                <Map selectedCard={selectedCard} outCard={outCard}/>
              </div>
            </div>
          </div>
        </main> : <Loading /> }
    </div>
  );
}
