// These types are created from the Yelp Business Search Public API
// Please see following Docs: https://docs.developer.yelp.com/reference/v3_business_search
// Note this is duplicate from UI (would want in shared library/client that both repos would leverage)
export interface YelpBusiness {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  price: string;
  distance: number;
  imageUrl: string;
}

export interface YelpSearchResponse {
  businesses: YelpBusiness[];
  total: number;
}
