import type { MapsAdapter } from './types/maps.js';

/*** Define one platform implementation against the canonical Maps adapter contract. */
export function defineMapsAdapter<TElement>(adapter: MapsAdapter<TElement>): MapsAdapter<TElement> {
  return adapter;
}
