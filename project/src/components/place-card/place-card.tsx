
import { TOfferCard } from '../../types';
import Premium from '../premium/premium';
// import { useState } from 'react';
import {useEffect} from 'react';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {fetchCommentsAction} from '../../store/api-action';
import { AppRoute } from '../../const';
import {Link} from 'react-router-dom';

type PlaceCardProps = {card:TOfferCard} & {classCard:string} & {onCardHover: (id:number) => void} & {onCardOut: (id:number) => void}
// type PlaceCardProps = TOfferCard & {onCardHover: (id:number) => void}

// export default function PlaceCard({isPremium, img, price, rating, title, type, id, onCardHover}:PlaceCardProps): JSX.Element {
export default function PlaceCard({card, classCard, onCardHover, onCardOut}:PlaceCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {isPremium, price, rating, title, type, id, previewImage} = card;

  useEffect(() => {
    dispatch(fetchCommentsAction(id));
  },[dispatch, id]);

  const handleCardMouseMove = () => {
    onCardHover(id);
  };

  const handleCardMouseOut = () => {
    onCardOut(id);
  };


  const selectedClassCard = classCard;
  const getStars = (ratingCard: number) => Math.round(ratingCard * 20);
  return (
    <article className={`${selectedClassCard}__card place-card`} onMouseMove={handleCardMouseMove} onMouseOut={handleCardMouseOut}>
      {isPremium ? <Premium /> : null}
      <div className={`${selectedClassCard}__image-wrapper place-card__image-wrapper`}>
        <Link to="#header">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
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
            <span style={{width: `${getStars(rating)}%`}}></span>
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
