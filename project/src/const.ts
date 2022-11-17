export enum AppRoute {
  Main = '/main',
  Login = '/login',
  Room = '/room',
  Root = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum ClassForCardAndList {
  Cities = 'cities',
  NearPlaces = 'near-places',
  CitiesList = 'cities__places-list tabs__content',
  NearPlacesList = 'near-places__list'
}

export const ratingLevels:string[] = ['perfect', 'good', 'not bad', 'badly', 'terribly'];
export const defaultCity = 'Paris';

export const mapIconUrl = {
  url: 'img/pin.svg',
  urlActive: 'img/pin-active.svg',
};

export const TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const TILE_LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
