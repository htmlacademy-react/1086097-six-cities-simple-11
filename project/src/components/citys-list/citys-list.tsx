import City from '../city/city';
import {TCitys} from '../../types';

type CitysListProps = {
  citys: TCitys;
  onLinkClick: (id: string) => void;
}


export default function CitysList({citys, onLinkClick}:CitysListProps): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {citys.map((city) => <City city={city} onLinkClick={onLinkClick} key={city.name}/>)}
    </ul>
  );
}

