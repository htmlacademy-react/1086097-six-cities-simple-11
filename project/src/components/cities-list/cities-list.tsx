import List from '../../components/list/list';
import { TOfferCard } from '../../types';
import { ClassForCardAndList } from '../../const';

type CitiesListProps = {
  cards:TOfferCard[];
  onListCardHover: (id:number | undefined) => void;
}

export default function CitiesList({cards, onListCardHover}:CitiesListProps): JSX.Element {
  return (<List classOfList={ClassForCardAndList.CitiesList} classOfCard={ClassForCardAndList.Cities} cards={cards} onListCardHover={onListCardHover} />);
}
