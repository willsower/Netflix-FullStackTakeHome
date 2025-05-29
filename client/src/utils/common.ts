import { METERS_PER_MILE } from "../constants/common";

export function metersToMiles(meters: number, decimals = 2): string {
  return (meters / METERS_PER_MILE).toFixed(decimals);
}