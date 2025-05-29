import { type YelpSortBy } from '../types/yelp';

export const NETFLIX_OFFICE_LABEL = "Netflix Offices";

export const NETFLIX_OFFICE_LOCATIONS: string[] = [
  '121 Albright Wy, Los Gatos, CA 95032',
  '888 Broadway, New York, NY 10003',
  '5808 Sunset Blvd, Los Angeles, CA 90028',
];

export const SORT_OPTIONS: { label: string; value: YelpSortBy }[] = [
  { label: 'Rating (Highest)', value: 'rating' },
  { label: 'Distance (Closest)', value: 'distance' },
];

export const SORT_LABEL_BY_VALUE = Object.fromEntries(
  SORT_OPTIONS.map(({ value, label }) => [value, label])
) as Record<string, string>;
