import 'maplibre-gl/dist/maplibre-gl.css';

import type { ReactElement } from 'react';
import Map, { Marker } from 'react-map-gl/maplibre';

import type { MapCamera, MapViewProps } from '../../../types/maps.js';
import { toMapLibreViewState } from './toMapLibreViewState.js';

/*** Render the portable map contract through MapLibre on the web. */
export function MapView({
  initialCamera,
  markers = [],
  style,
  web,
  onCameraChange,
  onMarkerPress,
}: MapViewProps): ReactElement {
  if (web === undefined) {
    throw new Error('@ankhorage/maps web MapView requires web.styleUrl and web.workerUrl.');
  }

  return (
    <Map
      initialViewState={toMapLibreViewState(initialCamera)}
      mapStyle={web.styleUrl}
      workerUrl={web.workerUrl}
      style={style ?? { width: '100%', height: '100%' }}
      onMove={(event) => {
        onCameraChange?.({ camera: fromMapLibreCamera(event.viewState) });
      }}
    >
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          longitude={marker.coordinate.longitude}
          latitude={marker.coordinate.latitude}
          anchor="bottom"
          onClick={(event) => {
            event.originalEvent.stopPropagation();
            onMarkerPress?.({ marker });
          }}
        />
      ))}
    </Map>
  );
}

/*** Normalize a MapLibre view state into the portable map camera contract. */
function fromMapLibreCamera(viewState: {
  readonly longitude: number;
  readonly latitude: number;
  readonly zoom: number;
  readonly bearing: number;
  readonly pitch: number;
}): MapCamera {
  return {
    center: {
      latitude: viewState.latitude,
      longitude: viewState.longitude,
    },
    zoom: viewState.zoom,
    bearing: viewState.bearing,
    pitch: viewState.pitch,
  };
}
