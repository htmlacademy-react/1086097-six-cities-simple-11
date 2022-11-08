
import { TOfferCard } from '../../types';
import Premium from '../premium/premium';
// import { useState } from 'react';
import { AppRoute } from '../../const';
import {Link} from 'react-router-dom';

type PlaceCardProps = {card:TOfferCard} & {onCardHover: (id:number) => void}
// type PlaceCardProps = TOfferCard & {onCardHover: (id:number) => void}

// export default function PlaceCard({isPremium, img, price, rating, title, type, id, onCardHover}:PlaceCardProps): JSX.Element {
export default function PlaceCard({card, onCardHover}:PlaceCardProps): JSX.Element {
  const {isPremium, img, price, rating, title, type, id} = card;

  const handleCardMouseOver = () => {
    onCardHover(id);
  };

  return (
    <article className="cities__card place-card" onMouseMove={handleCardMouseOver}>
      {isPremium ? <Premium /> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="#header">
          <img className="place-card__image" src={`img/${img}.jpg`} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating}`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
