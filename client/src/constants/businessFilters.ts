import { type YelpSortBy } from '../types/yelp';

export const NETFLIX_OFFICE_LOCATIONS: string[] = [
  'Los Gatos, CA',
  'New York, NY',
  'Los Angeles, CA',
];

export const SORT_OPTIONS: { label: string; value: YelpSortBy }[] = [
  { label: 'Rating (Highest)', value: 'rating' },
  { label: 'Distance (Closest)', value: 'distance' },
];
