import { TOfferCard } from '../../types';
import PlaceCard from '../../components/place-card/place-card';

type PlaceListProps = {
  cards:TOfferCard[];
}

export default function PlaceList({cards}:PlaceListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((card) => <PlaceCard {...card} key={card.id} />)}
    </div>
  );
}
