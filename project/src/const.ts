export enum AppRoute {
  Main = '/main',
  Login = '/login',
  Room = '/room',
  Root = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
}

export enum ClassForCardAndList {
  Cities = 'cities',
  NearPlaces = 'near-places',
  CitiesList = 'cities__places-list tabs__content',
  NearPlacesList = 'near-places__list',
}

export enum SortTypes {
  Popular = 'Popular',
  LowToHigh = 'LowToHigh',
  HighToLow = 'HighToLow',
  TopRatedFirst = 'TopRatedFirst',
}

export const SortTitle = {
  'Popular': 'Popular',
  'LowToHigh': 'Price: low to high',
  'HighToLow': 'Price: high to low',
  'TopRatedFirst': 'Top rated first'
};

export const ratingLevels:string[] = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

export const PASSWORD_WARN = 'Password must contain at least one number and letter';
export const PASSWORD_MATCH = /\d+[a-zA-Z]+|[a-zA-Z]+\d+/;

export const DEFAULT_RATING = 0;
export const MIN_LENGTH_COMMENT = 50;
export const MAX_LENGTH_COMMENT = 300;

export const DEFAULT_CITY = 'Paris';

export const mapIconUrl = {
  url: 'img/pin.svg',
  urlActive: 'img/pin-active.svg',
};

export const TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const TILE_LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export enum APIRoute {
  Offers = '/hotels',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export const BACKEND_URL = 'https://11.react.pages.academy/six-cities-simple';
export const REQUEST_TIMEOUT = 5000;
export const TIMEOUT_SHOW_ERROR = 2000;

export enum NameSpace {
  Offers = 'OFFERS',
  User = 'USER',
  App = 'APP',
}
