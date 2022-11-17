
import {TOfferCard} from '../../types';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';
// import { useState } from 'react';
import {useAppSelector} from '../../hooks/useAppSelector';
import {mapIconUrl} from '../../const';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

// type MapProps = {card:TOfferCard} & {onCardHover: (id:number) => void}
// type PlaceCardProps = TOfferCard & {onCardHover: (id:number) => void}
// export default function PlaceCard({isPremium, img, price, rating, title, type, id, onCardHover}:PlaceCardProps): JSX.Element {

type MapProps = {
  selectedCard: TOfferCard | undefined;
  outCard: TOfferCard | undefined;
}

export default function Map({selectedCard, outCard}: MapProps): JSX.Element {
  const currentNameOfCity = useAppSelector((state) => state.currentNameOfCity);
  const citys = useAppSelector((state) => state.citys);
  const currentCity = citys.find((city) => city.name === currentNameOfCity);
  const cards = useAppSelector((state) => state.offersByName);

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
    if (map) {
      cards.forEach((card) => {
        leaflet
          .marker({
            lat: card.point.latitude,
            lng: card.point.longitude,
          }, {
            icon: selectedCard && card.id === selectedCard.id ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(map);
        map.flyTo({lat: card.city.location.latitude, lng: card.city.location.longitude});
      });
    }
  }, [map, cards, selectedCard, currentCity, defaultCustomIcon, currentCustomIcon]);

  return <section className="cities__map map" ref={mapRef}></section>;
}
