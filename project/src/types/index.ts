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

export type TPoints = TPoint[];
