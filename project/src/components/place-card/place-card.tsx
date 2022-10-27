
import { CardProps } from '../../types/types';
import Premium from '../premium/premium';

export default function PlaceCard({premium, img, price, rating, title, type, id}:CardProps): JSX.Element {
  return (
    <article key={id} className="cities__card place-card">
      {premium ? <Premium /> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#header">
          <img className="place-card__image" src={`img/${img}.jpg`} width="260" height="200" alt="Place" />
        </a>
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
          <a href="#header">Beautiful &amp; {title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
