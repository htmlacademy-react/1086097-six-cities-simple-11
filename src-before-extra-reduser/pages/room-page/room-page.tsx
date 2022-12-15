import Logo from '../../components/logo/logo';
import NearPlacesList from '../../components/near-places-list/near-places-list';
import HeaderNavList from '../../components/header-nav-list/header-nav-list';
import Map from '../../components/map/map';
import {Helmet} from 'react-helmet-async';
import CommentForm from '../../components/comment-form/comment-form';
import CommentList from '../../components/comment-list/comment-list';
import {TOfferCard} from '../../types';
import {AuthorizationStatus} from '../../const';

import NotFound from '../../pages/not-found/not-found';
import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/useAppSelector';
import {useEffect, useState} from 'react';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {fetchCommentsAction, fetchOffersNearPlacesAction} from '../../store/api-action';

export default function RoomPage(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (params.id) {
      dispatch(fetchCommentsAction(params.id));
      dispatch(fetchOffersNearPlacesAction(params.id));
    }
  },[dispatch, params]);

  const {comments, offersNearPlaces, authorizationStatus, offers} = useAppSelector((state) => state);
  const commentsAmount = comments.length;

  const [selectedCardNearPlaces, setSelectedCardNearPlaces] = useState<TOfferCard | undefined>();

  const onListCardHover = (cardId:number | undefined) => {
    const currentCardNearPlaces = offersNearPlaces.find((item) => item.id === cardId);
    setSelectedCardNearPlaces(currentCardNearPlaces);
  };

  const currentCard: TOfferCard | undefined = offers.find((card) => card.id === Number(params.id));

  const getStars = (offer: TOfferCard) => Math.round(offer.rating * 20);

  return currentCard ? (
    <div className="page">
      <Helmet>
        <title>room</title>
      </Helmet>
      <header className="header" id="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <HeaderNavList />
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property" data-id={currentCard.id}>
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {currentCard.images && currentCard.images.slice(0, 6).map((img) => (
                <div className="property__image-wrapper" key={img}>
                  <img className="property__image" src={img} alt={currentCard.type}/>
                </div>))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {currentCard.isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : null}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentCard.title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getStars(currentCard)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{currentCard.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {currentCard.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {Number(`${currentCard.bedrooms}`) > 1 ? `${currentCard.bedrooms} Bedrooms` : `${currentCard.bedrooms} Bedroom`}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {currentCard.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{currentCard.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {currentCard ? currentCard.goods.map((good) =>
                    <li key={good} className="property__inside-item">{good}</li>
                  ) : null}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={currentCard.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {currentCard.host.name}
                  </span>
                  { currentCard.host.isPro ? <span className="property__user-status"> Pro </span> : null}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentsAmount}</span></h2>
                {<CommentList allComments={comments} />}
                {params.id && authorizationStatus === AuthorizationStatus.Auth ? <CommentForm hotelId={currentCard.id}/> : null}
              </section>
            </div>
          </div>
          {offersNearPlaces ? <Map cards={offersNearPlaces} selectedCard={selectedCardNearPlaces} classMapContainer={'property__map map'} /> : null}
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <NearPlacesList cards={offersNearPlaces} onListCardHover={onListCardHover} />
            </div>
          </section>
        </div>
      </main>
    </div>
  ) : (<NotFound />);
}
