
import {TOfferCard} from '../../types';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';
import {useAppSelector} from '../../hooks/useAppSelector';
import {mapIconUrl} from '../../const';
import leaflet, { LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {getCitys, getCurrentNameOfCity} from '../../store/offers-process/selectors';
// type MapProps = {card:TOfferCard} & {onCardHover: (id:number) => void}
// type PlaceCardProps = TOfferCard & {onCardHover: (id:number) => void}
// export default function PlaceCard({isPremium, img, price, rating, title, type, id, onCardHover}:PlaceCardProps): JSX.Element {

type MapProps = {
  cards: TOfferCard[] | undefined;
  selectedCard: TOfferCard | undefined;
  classMapContainer: string;
}

export default function Map({cards, selectedCard, classMapContainer}: MapProps): JSX.Element {
  const citys = useAppSelector(getCitys);
  const currentNameOfCity = useAppSelector(getCurrentNameOfCity);
  const currentCity = citys.find((city) => city.name === currentNameOfCity);

  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: mapIconUrl.url,
    iconSize: [27, 39],
    iconAnchor: [27, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: mapIconUrl.urlActive,
    iconSize: [27, 39],
    iconAnchor: [27, 40],
  });

  useEffect(() => {
    const newLayer: LayerGroup = new LayerGroup();

    if (map && cards) {
      cards.forEach((card:TOfferCard) => {
        leaflet
          .marker({
            lat: Number(card.location.latitude),
            lng: Number(card.location.longitude),
          }, {
            icon: selectedCard && card.id === selectedCard.id ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(newLayer);

        map.flyTo({lat: card.city.location.latitude, lng: card.city.location.longitude});
      });
      newLayer.addTo(map);
    }

    return () => {
      map?.removeLayer(newLayer);
    };

  }, [map, cards, selectedCard, currentCity, defaultCustomIcon, currentCustomIcon]);

  return <section className={`${classMapContainer}`} ref={mapRef}></section>;
}
