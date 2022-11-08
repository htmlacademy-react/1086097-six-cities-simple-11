import { TOfferCard } from '../../types';
import PlaceCard from '../../components/place-card/place-card';
import React, { useState } from 'react';
// import {arrayOfCards} from '../../mocks/offers';

type PlaceListProps = {
  cards:TOfferCard[];
  onListCardHover: (id:number | undefined) => void;
}

export default function PlaceList({cards, onListCardHover}:PlaceListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<number | undefined>(0);

  const onCardHover = (idCard:number) => {
    setActiveCardId(idCard);
    onListCardHover(activeCardId);
  };

  // /* eslint-disable */ console.log(activeCardId);

  return (
    <div className="cities__places-list places__list tabs__content">
      {/* {cards.map((card) => <PlaceCard {...card} key={card.id} onCardHover={onCardHover} />)} */}
      {cards.map((card) => <PlaceCard card={card} key={card.id} onCardHover={onCardHover} />)}
    </div>
  );
}
