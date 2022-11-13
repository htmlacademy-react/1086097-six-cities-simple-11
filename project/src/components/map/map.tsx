
import { TOfferCard, TCity} from '../../types';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';
// import { useState } from 'react';
import {mapIconUrl} from '../../const';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

// type MapProps = {card:TOfferCard} & {onCardHover: (id:number) => void}
// type PlaceCardProps = TOfferCard & {onCardHover: (id:number) => void}
// export default function PlaceCard({isPremium, img, price, rating, title, type, id, onCardHover}:PlaceCardProps): JSX.Element {

type MapProps = {
  city: TCity;
  cards: TOfferCard[];
  selectedPoint: TOfferCard | undefined;
}

export default function Map({city, cards, selectedPoint}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
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

    if (map) {
      cards.forEach((card) => {
        leaflet
          .marker({
            lat: card.point.latitude,
            lng: card.point.longitude,
          }, {
            icon: (selectedPoint && card.id === selectedPoint.id)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, cards, selectedPoint]);

  return <section className="cities__map map" ref={mapRef}></section>;
}
