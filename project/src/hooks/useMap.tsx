import {Map} from 'leaflet';
import {TCity} from '../types';
import leaflet from 'leaflet';
import { useEffect, useState, MutableRefObject, useRef } from 'react';
import {TILE_LAYER, TILE_LAYER_ATTRIBUTION} from '../const';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: TCity): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: Number(city.location.latitude),
          lng: Number(city.location.longitude),
        },
        zoom: Number(city.location.zoom)
      });

      leaflet.tileLayer(TILE_LAYER, {
        attribution: TILE_LAYER_ATTRIBUTION,
      }).addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
