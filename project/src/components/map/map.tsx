
import { TOfferCard, TCity, TPoint} from '../../types';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';
// import { useState } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

// type MapProps = {card:TOfferCard} & {onCardHover: (id:number) => void}
// type PlaceCardProps = TOfferCard & {onCardHover: (id:number) => void}
// export default function PlaceCard({isPremium, img, price, rating, title, type, id, onCardHover}:PlaceCardProps): JSX.Element {

type MapProps = {
  city: TCity;
  offers: TOfferCard[];
  selectedPoint: TPoint | undefined;
}

export default function Map({city, offers, selectedPoint}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const defaultCustomIcon = leaflet.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [27, 39],
      iconAnchor: [27, 40],
    });

    const currentCustomIcon = leaflet.icon({
      iconUrl: 'img/pin-active.svg',
      iconSize: [27, 39],
      iconAnchor: [27, 40],
    });

    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.point.latitude,
            lng: offer.point.longitude,
          }, {
            icon: (selectedPoint && offer.title === selectedPoint.title)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, selectedPoint]);

  return <section className="cities__map map" ref={mapRef}></section>;
}
