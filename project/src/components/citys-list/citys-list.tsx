import City from '../city/city';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {changeCity} from '../../store/action';

export default function CitysList(): JSX.Element {
  const dispatch = useAppDispatch();
  const citys = useAppSelector((state) => state.citys);

  const handleLinkClick = (name: string) => {
    dispatch(changeCity(name));
  };

  return (
    <ul className="locations__list tabs__list">
      {citys.map((city) => <City city={city} onLinkClick={handleLinkClick} key={city.name}/>)}
    </ul>
  );
}

