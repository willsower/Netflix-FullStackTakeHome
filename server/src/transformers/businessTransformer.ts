import { YelpBusiness, YelpSearchResponse } from '../interfaces/yelp';

export const transformListBusinessesResponse = (
  apiResponse: any
): YelpSearchResponse => {
  const businesses: YelpBusiness[] = apiResponse.businesses.map(
    (business: any) => ({
      id: business.id,
      name: business.name,
      rating: business.rating,
      reviewCount: business.review_count,
      price: business.price || '',
      distance: business.distance,
      imageUrl: business.image_url,
      websiteUrl: business.url,
      categories: business.categories,
    })
  );

  return {
    businesses,
    total: apiResponse.total,
  };
};
