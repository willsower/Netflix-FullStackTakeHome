import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import { API_BASE_URL } from '../constants/common';
import {
  DEFAULT_RADIUS,
  DEFAULT_SEARCH_KEY_BOBA,
  PAGINATION,
} from '../constants/defaults';
import type { YelpBusiness, YelpSearchResponse } from '../interfaces/yelp';
import { type YelpSortBy } from '../types/yelp';

interface UseBusinessesProps {
  location: string;
  sortBy?: YelpSortBy;
  term?: string;
  radius?: number;
  limit?: number;
}

export const useBusinesses = ({
  location,
  sortBy,
  term = DEFAULT_SEARCH_KEY_BOBA,
  radius = DEFAULT_RADIUS,
  limit = PAGINATION.DEFAULT_LIMIT,
}: UseBusinessesProps) => {
  const [data, setData] = useState<YelpBusiness[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchBusinesses = useCallback(
    async (newOffset = 0, append = false) => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get<YelpSearchResponse>(
          `${API_BASE_URL}/businesses`,
          {
            params: {
              location,
              sortBy,
              term,
              radius,
              limit,
              offset: newOffset,
            },
          }
        );

        if (append) {
          setData((prev) => [...prev, ...response.data.businesses]);
        } else {
          setData(response.data.businesses);
        }

        setTotal(response.data.total);
        setHasMore(response.data.businesses.length === limit);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    },
    [location, sortBy, term, radius, limit]
  );

  useEffect(() => {
    setOffset(0);
    fetchBusinesses(0, false);
  }, [fetchBusinesses]);

  const loadMore = () => {
    const newOffset = offset + limit;
    setOffset(newOffset);
    fetchBusinesses(newOffset, true);
  };

  return { data, loading, error, loadMore, hasMore, total };
};
