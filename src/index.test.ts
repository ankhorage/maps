import { describe, expect, test } from 'bun:test';

import { defineMapsAdapter, type MapsAdapter, type MapViewProps } from './index.js';

describe('defineMapsAdapter', () => {
  test('preserves a platform implementation while enforcing the shared contract', () => {
    const MapView = (_props: MapViewProps): string => 'map';
    const adapter: MapsAdapter<string> = {
      platform: 'web',
      MapView,
    };

    expect(defineMapsAdapter(adapter)).toBe(adapter);
    expect(defineMapsAdapter(adapter).MapView({})).toBe('map');
  });
});
