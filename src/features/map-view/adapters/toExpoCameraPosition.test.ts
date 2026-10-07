import { describe, expect, test } from 'bun:test';

import { toExpoCameraPosition } from './toExpoCameraPosition.js';

describe('toExpoCameraPosition', () => {
  test('maps the portable center and zoom without leaking unsupported camera fields', () => {
    expect(
      toExpoCameraPosition({
        center: { latitude: 47.3769, longitude: 8.5417 },
        zoom: 14,
        bearing: 25,
        pitch: 30,
      }),
    ).toEqual({
      coordinates: { latitude: 47.3769, longitude: 8.5417 },
      zoom: 14,
    });
  });
});
