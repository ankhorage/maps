# Public API

## defineMapsAdapter

Kind: `function`
Module: `src/features/map-view/defineMapsAdapter.ts`
Source: `src/features/map-view/defineMapsAdapter.ts:4:1`

Define one platform implementation against the canonical Maps adapter contract.

### Signatures

- `(adapter: MapsAdapter<TElement>) => MapsAdapter<TElement>`
  - adapter: `MapsAdapter<TElement>`
  - returns: `MapsAdapter<TElement>`

## MapCamera

Kind: `type`
Module: `src/types/maps.ts`
Source: `src/types/maps.ts:6:1`

### Members

| Name | Kind | Type | Required | Description |
| --- | --- | --- | --- | --- |
| bearing | property | `number` | no |  |
| center | property | `MapCoordinate` | yes |  |
| pitch | property | `number` | no |  |
| zoom | property | `number` | no |  |

## MapCameraChangeEvent

Kind: `type`
Module: `src/types/maps.ts`
Source: `src/types/maps.ts:20:1`

### Members

| Name | Kind | Type | Required | Description |
| --- | --- | --- | --- | --- |
| camera | property | `MapCamera` | yes |  |

## MapCoordinate

Kind: `type`
Module: `src/types/maps.ts`
Source: `src/types/maps.ts:1:1`

### Members

| Name | Kind | Type | Required | Description |
| --- | --- | --- | --- | --- |
| latitude | property | `number` | yes |  |
| longitude | property | `number` | yes |  |

## MapDimension

Kind: `unknown`
Module: `src/types/maps.ts`
Source: `src/types/maps.ts:28:1`

## MapMarker

Kind: `type`
Module: `src/types/maps.ts`
Source: `src/types/maps.ts:13:1`

### Members

| Name | Kind | Type | Required | Description |
| --- | --- | --- | --- | --- |
| coordinate | property | `MapCoordinate` | yes |  |
| description | property | `string` | no |  |
| id | property | `string` | yes |  |
| title | property | `string` | no |  |

## MapMarkerPressEvent

Kind: `type`
Module: `src/types/maps.ts`
Source: `src/types/maps.ts:24:1`

### Members

| Name | Kind | Type | Required | Description |
| --- | --- | --- | --- | --- |
| marker | property | `MapMarker` | yes |  |

## MapsAdapter

Kind: `type`
Module: `src/types/maps.ts`
Source: `src/types/maps.ts:54:1`

### Members

| Name | Kind | Type | Required | Description |
| --- | --- | --- | --- | --- |
| MapView | property | `MapViewComponent<TElement>` | yes |  |
| platform | property | `MapsPlatform` | yes |  |

## MapsPlatform

Kind: `unknown`
Module: `src/types/maps.ts`
Source: `src/types/maps.ts:50:1`

## MapView

Kind: `function`
Module: `src/features/map-view/MapView.ts`
Source: `src/features/map-view/MapView.ts:4:1`

Reject rendering when the host did not select a browser or React Native package condition.

### Signatures

- `(_props: MapViewProps) => never`
  - _props: `MapViewProps`
  - returns: `never`

## MapViewComponent

Kind: `unknown`
Module: `src/types/maps.ts`
Source: `src/types/maps.ts:52:1`

## MapViewProps

Kind: `type`
Module: `src/types/maps.ts`
Source: `src/types/maps.ts:41:1`

### Members

| Name | Kind | Type | Required | Description |
| --- | --- | --- | --- | --- |
| initialCamera | property | `MapCamera` | no |  |
| markers | property | `readonly MapMarker[]` | no |  |
| onCameraChange | property | `(event: MapCameraChangeEvent) => void` | no |  |
| onMarkerPress | property | `(event: MapMarkerPressEvent) => void` | no |  |
| style | property | `MapViewStyle` | no |  |
| web | property | `MapWebConfiguration` | no |  |

## MapViewStyle

Kind: `type`
Module: `src/types/maps.ts`
Source: `src/types/maps.ts:30:1`

### Members

| Name | Kind | Type | Required | Description |
| --- | --- | --- | --- | --- |
| flex | property | `number` | no |  |
| height | property | `MapDimension` | no |  |
| width | property | `MapDimension` | no |  |

## MapWebConfiguration

Kind: `type`
Module: `src/types/maps.ts`
Source: `src/types/maps.ts:36:1`

### Members

| Name | Kind | Type | Required | Description |
| --- | --- | --- | --- | --- |
| styleUrl | property | `string` | yes |  |
| workerUrl | property | `string` | yes |  |
