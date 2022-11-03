import { TOfferCard } from '../../types';
import PlaceCard from '../../components/place-card/place-card';
import React, { useState } from 'react';
import {arrayOfCards} from '../../mocks/offers';

type PlaceListProps = {
  cards:TOfferCard[];
}

export default function PlaceList({cards}:PlaceListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<TOfferCard>();

  const onCardHover = (idCard:number) => {
    setActiveCard(arrayOfCards[idCard]);
    /* eslint-disable */ console.log(activeCard);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {/* {cards.map((card) => <PlaceCard {...card} key={card.id} onCardHover={onCardHover} />)} */}
      {cards.map((card) => <PlaceCard card={card} key={card.id} onCardHover={onCardHover} />)}
    </div>
  );
}
