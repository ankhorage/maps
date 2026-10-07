import type { MapViewProps } from '../../types/maps.js';

/*** Reject rendering when the host did not select a browser or React Native package condition. */
export function MapView(_props: MapViewProps): never {
  throw new Error(
    '@ankhorage/maps MapView requires a browser or react-native package export condition.',
  );
}
