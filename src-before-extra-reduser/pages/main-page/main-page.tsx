import PlaceList from '../../components/place-list/place-list';
import CitysList from '../../components/citys-list/citys-list';
import Loading from '../../components/loading/loading';
import Logo from '../../components/logo/logo';
import HeaderNavList from '../../components/header-nav-list/header-nav-list';
import {TOfferCard} from '../../types';
import {Helmet} from 'react-helmet-async';
import Map from '../../components/map/map';
import {useState, useRef, useEffect} from 'react';
import {changeSortType} from '../../store/action';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {SortTypes, SortTitle} from '../../const';
import {useAppSelector} from '../../hooks/useAppSelector';
import {checkAuthAction, fetchOffersAction} from '../../store/api-action';

export default function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const {isLoadingOffers, sortType, currentNameOfCity, offersByName} = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(fetchOffersAction());
    dispatch(checkAuthAction());
  },[dispatch]);

  const sortListRef = useRef<HTMLUListElement>(null);

  const [selectedCard, setSelectedCard] = useState<TOfferCard | undefined>();
  const amountOfCards = offersByName.length ?? '';

  const onListCardHover = (cardId:number | undefined) => {
    const currentCard = offersByName.find((card) => card.id === cardId);
    setSelectedCard(currentCard);
  };

  const handleSortButtonClick = () => {
    sortListRef.current?.classList.toggle('places__options--opened');
  };

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

  const sortingFunctions = [
    handleSortPopularItemClick,
    handleSortLowToHighItemClick,
    handleSortHighToLowItemClick,
    handleSortTopRatedFirstItemClick,
  ];

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
              <HeaderNavList />
            </nav>
          </div>
        </div>
      </header>

      { isLoadingOffers ?
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
                <b className="places__found">{amountOfCards} {amountOfCards > 1 ? 'places' : 'place'} to stay in {currentNameOfCity}</b>


                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by </span>
                  <span className="places__sorting-type" tabIndex={1} onClick={handleSortButtonClick}>
                    {SortTitle[sortType as keyof typeof SortTitle]}
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom" ref={sortListRef}>
                    {Object.entries(SortTitle).map((title, index) => <li className={`places__option ${sortType === SortTypes[title[0] as keyof typeof SortTypes] ? 'places__option--active' : ''}`} tabIndex={index + 2} onClick={sortingFunctions[index]} key={title[0]}>{title[1]}</li>)}
                  </ul>
                </form>
                <PlaceList cards={offersByName} onListCardHover={onListCardHover} />
              </section>
              <div className="cities__right-section">
                <Map cards={offersByName} selectedCard={selectedCard} classMapContainer={'cities__map map'} />
              </div>
            </div>
          </div>
        </main> : <Loading /> }
    </div>
  );
}
