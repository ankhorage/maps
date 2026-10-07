import type { MapMarker } from '../../../types/maps.js';

/*** Resolve a portable marker by provider-emitted identifier. */
export function findMapMarker(
  markers: readonly MapMarker[] | undefined,
  markerId: string | undefined,
): MapMarker | undefined {
  if (markerId === undefined) return undefined;
  return markers?.find(({ id }) => id === markerId);
}
