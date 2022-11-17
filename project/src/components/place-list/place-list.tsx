import List from '../list/list';
import { TOfferCard } from '../../types';
import { ClassForCardAndList } from '../../const';

type PlaceListProps = {
  cards:TOfferCard[];
  onListCardHover: (id:number | undefined) => void;
  onListCardOut: (id:number | undefined) => void;
}

export default function PlaceList({cards, onListCardHover, onListCardOut}:PlaceListProps): JSX.Element {
  return (<List classOfList={ClassForCardAndList.CitiesList} classOfCard={ClassForCardAndList.Cities} cards={cards} onListCardHover={onListCardHover} onListCardOut={onListCardOut} />);
}
