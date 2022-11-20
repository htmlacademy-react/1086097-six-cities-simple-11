import { TOfferCard } from '../../types';
import PlaceCard from '../place-card/place-card';
import React, { useState } from 'react';

type ListProps = {
  classOfList: string;
  classOfCard: string;
  cards:TOfferCard[];
  onListCardHover: (id:number | undefined) => void;
  onListCardOut: (id:number | undefined) => void;
}

export default function List({classOfList, classOfCard, cards, onListCardHover, onListCardOut}:ListProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<number | undefined>(0);
  const [outCardId, setOutCardId] = useState<number | undefined>(0);

  const onCardHover = (idCard:number) => {
    setActiveCardId(idCard);
    onListCardHover(activeCardId);

  };

  const onCardOut = (idCard:number) => {
    setOutCardId(idCard);
    onListCardOut(outCardId);

  };

  // /* eslint-disable */ console.log(activeCardId);

  return (
    <div className={`${classOfList} places__list`}>
      {/* {cards.map((card) => <PlaceCard {...card} key={card.id} onCardHover={onCardHover} />)} */}
      {cards.map((card) => <PlaceCard card={card} classCard={classOfCard} onCardHover={onCardHover} onCardOut={onCardOut} key={card.id}/>)}
    </div>
  );
}
