import type { MapCamera } from '../../../types/maps.js';

/*** Map the portable camera into the subset supported by Expo Maps initial camera positioning. */
export function toExpoCameraPosition(camera: MapCamera | undefined):
  | {
      readonly coordinates: {
        readonly latitude: number;
        readonly longitude: number;
      };
      readonly zoom?: number;
    }
  | undefined {
  if (camera === undefined) return undefined;

  return {
    coordinates: camera.center,
    ...(camera.zoom === undefined ? {} : { zoom: camera.zoom }),
  };
}
