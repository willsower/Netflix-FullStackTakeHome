import { type YelpBusiness } from '../src/interfaces/yelp';

export const MOCK_BOBA_SHOPS: YelpBusiness[] = [
  {
    id: '1',
    name: 'Seattle Best Tea',
    rating: 4.5,
    reviewCount: 662,
    price: '$',
    distance: 1000,
    imageUrl:
      'https://s3-media0.fl.yelpcdn.com/bphoto/Gq21goDeugDl0YLNwGtM6Q/348s.jpg',
    websiteUrl:
      'https://www.yelp.com/biz/puffin-donuts-los-gatos?adjust_creative=HWa3w7HMIPdhcRTKRSex-w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=HWa3w7HMIPdhcRTKRSex-w',
    categories: [
      { alias: 'bubbletea', title: 'Bubble Tea' },
      { alias: 'icecream', title: 'Ice Cream & Frozen Yogurt' },
      { alias: 'coffee', title: 'Coffee & Tea' },
    ],
  },
  {
    id: '2',
    name: 'Xing Fu Tang',
    rating: 4.0,
    reviewCount: 244,
    price: '$$',
    distance: 1500,
    imageUrl:
      'https://s3-media0.fl.yelpcdn.com/bphoto/IBsikEb3jsjfFgHEG3aJgw/348s.jpg',
    websiteUrl: '',
    categories: [
      { alias: 'bubbletea', title: 'Bubble Tea' },
      { alias: 'icecream', title: 'Ice Cream & Frozen Yogurt' },
      { alias: 'coffee', title: 'Coffee & Tea' },
    ],
  },
  {
    id: '3',
    name: 'ComeBuy Tea',
    rating: 4.3,
    reviewCount: 177,
    price: '$$',
    distance: 100,
    imageUrl:
      'https://s3-media0.fl.yelpcdn.com/bphoto/hwROmKiVou3Z9r804o2bZQ/l.jpg',
    websiteUrl: '',
    categories: [
      { alias: 'bubbletea', title: 'Bubble Tea' },
      { alias: 'icecream', title: 'Ice Cream & Frozen Yogurt' },
      { alias: 'coffee', title: 'Coffee & Tea' },
    ],
  },
  {
    id: '4',
    name: 'Gaga Tea',
    rating: 4.6,
    reviewCount: 99,
    price: '$$',
    distance: 500,
    imageUrl:
      'https://s3-media0.fl.yelpcdn.com/bphoto/iVg-FKI73FA6XNxZCdsRcw/348s.jpg',
    websiteUrl: '',
    categories: [
      { alias: 'bubbletea', title: 'Bubble Tea' },
      { alias: 'icecream', title: 'Ice Cream & Frozen Yogurt' },
      { alias: 'coffee', title: 'Coffee & Tea' },
    ],
  },
  {
    id: '5',
    name: 'Atulea',
    rating: 4.3,
    reviewCount: 352,
    price: '$$',
    distance: 1000,
    imageUrl:
      'https://s3-media0.fl.yelpcdn.com/bphoto/7BRgtG8X6xOssC9-4RafqA/348s.jpg',
    websiteUrl: '',
    categories: [
      { alias: 'bubbletea', title: 'Bubble Tea' },
      { alias: 'icecream', title: 'Ice Cream & Frozen Yogurt' },
      { alias: 'coffee', title: 'Coffee & Tea' },
    ],
  },
];
