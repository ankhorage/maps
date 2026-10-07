export interface MapCoordinate {
  readonly latitude: number;
  readonly longitude: number;
}

export interface MapCamera {
  readonly center: MapCoordinate;
  readonly zoom?: number;
  readonly bearing?: number;
  readonly pitch?: number;
}

export interface MapMarker {
  readonly id: string;
  readonly coordinate: MapCoordinate;
  readonly title?: string;
  readonly description?: string;
}

export interface MapCameraChangeEvent {
  readonly camera: MapCamera;
}

export interface MapMarkerPressEvent {
  readonly marker: MapMarker;
}

export type MapDimension = number | `${number}%`;

export interface MapViewStyle {
  readonly width?: MapDimension;
  readonly height?: MapDimension;
  readonly flex?: number;
}

export interface MapWebConfiguration {
  readonly styleUrl: string;
  readonly workerUrl: string;
}

export interface MapViewProps {
  readonly initialCamera?: MapCamera;
  readonly markers?: readonly MapMarker[];
  readonly style?: MapViewStyle;
  readonly web?: MapWebConfiguration;
  readonly onCameraChange?: (event: MapCameraChangeEvent) => void;
  readonly onMarkerPress?: (event: MapMarkerPressEvent) => void;
}

export type MapsPlatform = 'native' | 'web';

export type MapViewComponent<TElement> = (props: MapViewProps) => TElement;

export interface MapsAdapter<TElement> {
  readonly platform: MapsPlatform;
  readonly MapView: MapViewComponent<TElement>;
}
