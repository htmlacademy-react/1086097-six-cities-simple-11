import { TOfferCard } from '../../types';
import PlaceCard from '../place-card/place-card';
import React, { useState } from 'react';

type ListProps = {
  classOfList: string;
  classOfCard: string;
  cards:TOfferCard[];
  onListCardHover?: (id:number | undefined) => void;
}

export default function List({classOfList, classOfCard, cards, onListCardHover}:ListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<number | undefined>(0);

  const onCardHover = (idCard:number) => {
    setActiveCardId(idCard);
    if (onListCardHover) {
      onListCardHover(activeCardId);
    }
  };

  return (
    <div className={`${classOfList} places__list`}>
      {/* {cards.map((card) => <PlaceCard {...card} key={card.id} onCardHover={onCardHover} />)} */}
      {cards.slice(0, 6).map((card) => <PlaceCard card={card} classCard={classOfCard} onCardHover={onCardHover} key={card.id}/>)}
    </div>
  );
}
