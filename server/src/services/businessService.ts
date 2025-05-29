import axios from 'axios';

import { YELP_BASE_URL } from '../constants/common';
import { PAGINATION } from '../constants/defaults';
import { YelpSortBy } from '../types/yelp';

interface FetchBusinessListParams {
  limit: number;
  offset: number;
  location?: string;
  term?: string;
  radius?: number;
  sortBy?: YelpSortBy;
}

export const fetchBusinessList = async ({
  limit = PAGINATION.DEFAULT_LIMIT,
  offset = PAGINATION.DEFAULT_OFFSET,
  location,
  term,
  radius,
  sortBy,
}: FetchBusinessListParams) => {
  const url = `${YELP_BASE_URL}/businesses/search`;
  const apiKey = process.env.YELP_API_KEY;

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    params: {
      term,
      location,
      radius,
      sort_by: sortBy,
      limit,
      offset,
    },
  });

  return response.data;
};
