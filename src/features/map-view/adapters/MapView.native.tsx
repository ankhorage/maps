import { AppleMaps, GoogleMaps } from 'expo-maps';
import type { ReactElement } from 'react';
import { Platform } from 'react-native';

import type { MapCamera, MapViewProps } from '../../../types/maps.js';
import { findMapMarker } from './findMapMarker.js';
import { toExpoCameraPosition } from './toExpoCameraPosition.js';

/*** Render the portable map contract through Expo Maps on iOS and Android. */
export function MapView({
  initialCamera,
  markers = [],
  style,
  onCameraChange,
  onMarkerPress,
}: MapViewProps): ReactElement {
  const cameraPosition = toExpoCameraPosition(initialCamera);
  const nativeStyle = style ?? { flex: 1 };

  if (Platform.OS === 'ios') {
    return (
      <AppleMaps.View
        style={nativeStyle}
        cameraPosition={cameraPosition}
        markers={markers.map(({ id, coordinate, title }) => ({
          id,
          coordinates: coordinate,
          ...(title === undefined ? {} : { title }),
        }))}
        onCameraMove={(event) => {
          onCameraChange?.({ camera: fromExpoCamera(event) });
        }}
        onMarkerClick={(event) => {
          const marker = findMapMarker(markers, event.id);
          if (marker !== undefined) onMarkerPress?.({ marker });
        }}
      />
    );
  }

  if (Platform.OS === 'android') {
    return (
      <GoogleMaps.View
        style={nativeStyle}
        cameraPosition={cameraPosition}
        markers={markers.map(({ id, coordinate, title, description }) => ({
          id,
          coordinates: coordinate,
          ...(title === undefined ? {} : { title }),
          ...(description === undefined ? {} : { snippet: description }),
        }))}
        onCameraMove={(event) => {
          onCameraChange?.({ camera: fromExpoCamera(event) });
        }}
        onMarkerClick={(event) => {
          const marker = findMapMarker(markers, event.id);
          if (marker !== undefined) onMarkerPress?.({ marker });
        }}
      />
    );
  }

  throw new Error('@ankhorage/maps native MapView supports only iOS and Android.');
}

/*** Normalize an Expo Maps camera event into the portable map camera contract. */
function fromExpoCamera(event: {
  readonly coordinates: {
    readonly latitude?: number;
    readonly longitude?: number;
  };
  readonly zoom: number;
  readonly bearing: number;
  readonly tilt: number;
}): MapCamera {
  return {
    center: {
      latitude: event.coordinates.latitude ?? 0,
      longitude: event.coordinates.longitude ?? 0,
    },
    zoom: event.zoom,
    bearing: event.bearing,
    pitch: event.tilt,
  };
}
