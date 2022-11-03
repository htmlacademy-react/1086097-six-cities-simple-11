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

export const ratingLevels:string[] = ['perfect', 'good', 'not bad', 'badly', 'terribly'];
