import { AppleMaps, GoogleMaps } from 'expo-maps';
import type { ReactElement } from 'react';
import { Platform } from 'react-native';

import type { MapCamera, MapViewProps } from '../../../types/maps.js';
import { findMapMarker } from './findMapMarker.js';
import { toExpoCameraPosition } from './toExpoCameraPosition.js';

/*** Render the portable map contract through Expo Maps on iOS and Android. */
export function MapView(props: MapViewProps): ReactElement {
  const cameraPosition = toExpoCameraPosition(props.initialCamera);
  const shared: NativeMapRenderProps = {
    props,
    cameraProps: cameraPosition === undefined ? {} : { cameraPosition },
  };

  if (Platform.OS === 'ios') return renderAppleMap(shared);
  if (Platform.OS === 'android') return renderGoogleMap(shared);

  throw new Error('@ankhorage/maps native MapView supports only iOS and Android.');
}

/*** Render the Apple Maps implementation from portable map props. */
function renderAppleMap({ props, cameraProps }: NativeMapRenderProps): ReactElement {
  const { markers = [], style, onCameraChange, onMarkerPress } = props;
  return (
    <AppleMaps.View
      {...cameraProps}
      style={style ?? { flex: 1 }}
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

/*** Render the Google Maps implementation from portable map props. */
function renderGoogleMap({ props, cameraProps }: NativeMapRenderProps): ReactElement {
  const { markers = [], style, onCameraChange, onMarkerPress } = props;
  return (
    <GoogleMaps.View
      {...cameraProps}
      style={style ?? { flex: 1 }}
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

interface NativeMapRenderProps {
  readonly props: MapViewProps;
  readonly cameraProps:
    | Record<string, never>
    | {
        readonly cameraPosition: NonNullable<ReturnType<typeof toExpoCameraPosition>>;
      };
}
