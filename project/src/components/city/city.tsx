import {Link} from 'react-router-dom';
import {TCity} from '../../types';
import {useAppSelector} from '../../hooks/useAppSelector';

type CityProps = { city: TCity} & {onLinkClick: (id: string) => void}

export default function City({city, onLinkClick}:CityProps): JSX.Element {
  const {name} = city;
  const currentCity = useAppSelector((state) => state.currentNameOfCity);
  const isActiveLink = name === currentCity;

  const handleLinkClick = () => {
    onLinkClick(name);
  };

  return (
    <li className="locations__item">
      <Link className={`locations__item-link tabs__item ${isActiveLink ? 'tabs__item--active' : ''}`} data-city={name} to="/" onClick={handleLinkClick}>
        <span>{name}</span>
      </Link>
    </li>
  );
}
