import List from '../../components/list/list';
import { TOfferCard } from '../../types';
import { ClassForCardAndList } from '../../const';

type NearPlacesListProps = {
  cards:TOfferCard[];
  onListCardHover: (id:number | undefined) => void;
}

export default function NearPlacesList({cards, onListCardHover}:NearPlacesListProps): JSX.Element {
  const getThreeCardsOfArray = (offers: TOfferCard[]) => offers.slice(0, 3);
  return (<List classOfList={ClassForCardAndList.NearPlacesList} classOfCard={ClassForCardAndList.NearPlaces} cards={getThreeCardsOfArray(cards)} onListCardHover={onListCardHover} />);
}
