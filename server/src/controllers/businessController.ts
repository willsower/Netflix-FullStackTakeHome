import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';

import {
  ERROR_FAILED_FETCH_FOR_LIST_BUSINESSES,
  ERROR_PAGINATION_PARAMETERS,
} from '../constants/errorMessages';
import { fetchBusinessList } from '../services/businessService';
import { PAGINATION } from '../constants/defaults';
import { transformListBusinessesResponse } from '../transformers/businessTransformer';
import { YelpSortBy } from '../types/yelp';

export const listBusinesses = async (req: Request, res: Response) => {
  try {
    const {
      location,
      term,
      radius,
      sortBy,
      limit = PAGINATION.DEFAULT_LIMIT,
      offset = PAGINATION.DEFAULT_OFFSET,
    } = req.query;
    const parsedLimit = Number(limit);
    const parsedOffset = Number(offset);

    if (isNaN(parsedLimit) || isNaN(parsedOffset)) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: ERROR_PAGINATION_PARAMETERS });
    }

    const data = await fetchBusinessList({
      limit: parsedLimit,
      offset: parsedOffset,
      location: location as string,
      term: term as string,
      radius: radius ? Number(radius) : undefined,
      sortBy: sortBy as YelpSortBy,
    });

    const transformedData = transformListBusinessesResponse(data);
    res.status(StatusCodes.OK).json(transformedData);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: ERROR_FAILED_FETCH_FOR_LIST_BUSINESSES });
  }
};
