import {Link} from 'react-router-dom';
import {TCity} from '../../types';

type CityProps = { city: TCity} & {onLinkClick: (id: string) => void}

export default function City({city, onLinkClick}:CityProps): JSX.Element {
  const {name} = city;

  const handleLinkClick = () => {
    onLinkClick(name);
  };

  return (
    <li className="locations__item">
      <Link className="locations__item-link tabs__item" data-city={name} to="/" onMouseMove={handleLinkClick}>
        <span>{name}</span>
      </Link>
    </li>
  );
}
