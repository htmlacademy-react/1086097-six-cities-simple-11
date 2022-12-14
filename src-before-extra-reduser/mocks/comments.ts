import { TComment } from '.././types';

const arrayOfComments:TComment[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: 'April 2019',
    id: 1,
    rating: 80,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: true,
      name: 'Max',
    }
  },
  {
    comment: 'River by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: 'May 2020',
    id: 2,
    rating: 60,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 2,
      isPro: true,
      name: 'Ivan',
    }
  },
];

export {arrayOfComments};
