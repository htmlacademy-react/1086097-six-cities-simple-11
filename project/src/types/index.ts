export type TOfferCard = {
  bedrooms: number;
  goods: string[];
  description: string;
  isPremium: boolean;
  images: string[];
  mainImage: string;
  previewImage: string;
  maxAdults: number;
  price: number;
  rating: number;
  title: string;
  type: string;
  id: number;
  location:{
    zomm: number;
    latitude: number;
    longitude: number;
  };
  city: TCity;
  host: THost;
};

export type THost = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type TComment = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
};

export type TCity = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: string;
};

export type TPoint = {
  title: string;
  latitude: number;
  longitude: number;
};

export type TSort = string;
export type THotelId = string;

export type InitalState = {
  citys: TCity[];
  currentNameOfCity: string;
  offers: TOfferCard[];
  offersNearPlaces: TOfferCard[];
  offersByName: TOfferCard[];
  sortType: string;
  isLoadingOffers: boolean;
  authorizationStatus: string;
  error: string | null;
  user: UserData | null;
  comments: TComment[];
}

export type AuthData = {
  login: string;
  password: string;
};

export type UserData = {
  id: number;
  email: string;
  token: string;
};
