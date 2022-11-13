import Logo from '../../components/logo/logo';
import NearPlacesList from '../../components/near-places-list/near-places-list';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import CommentForm from '../../components/comment-form/comment-form';
import CommentList from '../../components/comment-list/comment-list';
import { TOfferCard} from '../../types';
import NotFound from '../../pages/not-found/not-found';
import { useParams } from 'react-router-dom';
import {arrayOfComments} from '../../mocks/comments';

type RoomPageProps = {
  cards: TOfferCard[];
}

export default function RoomPage({cards}:RoomPageProps): JSX.Element {
  const params = useParams();
  const commentsAmount = arrayOfComments.length;

  const onListCardHover = (cardId:number | undefined) => {
    const currentCard = cards.find((card) => card.id === 2);
    /* eslint-disable */ console.log(currentCard);
  };

  const currentCard: TOfferCard | undefined = cards.find((card) => card.id === Number(params.id));

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
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="#header">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property" data-id={currentCard.id}>
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <div className="property__image-wrapper">
                <img className="property__image" src={`img/${currentCard.img}.jpg`} alt="studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-02.jpg" alt="studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-03.jpg" alt="studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/studio-01.jpg" alt="studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="studio" />
              </div>
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
                  {/* Beautiful &amp; luxurious studio at great location */}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: currentCard.rating}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {currentCard.type}
                  {/* Apartment */}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{currentCard.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  <li className="property__inside-item">
                    Wi-Fi
                  </li>
                  <li className="property__inside-item">
                    Washing machine
                  </li>
                  <li className="property__inside-item">
                    Towels
                  </li>
                  <li className="property__inside-item">
                    Heating
                  </li>
                  <li className="property__inside-item">
                    Coffee machine
                  </li>
                  <li className="property__inside-item">
                    Baby seat
                  </li>
                  <li className="property__inside-item">
                    Kitchen
                  </li>
                  <li className="property__inside-item">
                    Dishwasher
                  </li>
                  <li className="property__inside-item">
                    Cabel TV
                  </li>
                  <li className="property__inside-item">
                    Fridge
                  </li>
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    Angelina
                  </span>
                  <span className="property__user-status">
                    Pro
                  </span>
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
                {<CommentList allComments={arrayOfComments} />}
                {<CommentForm />}
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <NearPlacesList cards={cards} onListCardHover={onListCardHover} />
            </div>
          </section>
        </div>
      </main>
    </div>
  ) : (<NotFound />);
}
