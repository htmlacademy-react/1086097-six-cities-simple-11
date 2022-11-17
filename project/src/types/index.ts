export type TOfferCard = {
  isPremium: boolean;
  img: string;
  price: string;
  rating: string;
  title: string;
  type: string;
  id: number;
  point:{
    title: string;
    latitude: number;
    longitude: number;
  };
  city: TCity;
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
