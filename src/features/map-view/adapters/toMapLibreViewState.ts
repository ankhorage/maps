import type { MapCamera } from '../../../types/maps.js';

/*** Map the portable camera into MapLibre's initial view-state shape. */
export function toMapLibreViewState(camera: MapCamera | undefined):
  | {
      readonly longitude: number;
      readonly latitude: number;
      readonly zoom: number;
      readonly bearing: number;
      readonly pitch: number;
    }
  | undefined {
  if (camera === undefined) return undefined;

  return {
    longitude: camera.center.longitude,
    latitude: camera.center.latitude,
    zoom: camera.zoom ?? 0,
    bearing: camera.bearing ?? 0,
    pitch: camera.pitch ?? 0,
  };
}
