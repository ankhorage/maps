import { describe, expect, test } from 'bun:test';

import { toMapLibreViewState } from './toMapLibreViewState.js';

describe('toMapLibreViewState', () => {
  test('maps the complete portable camera into web view state', () => {
    expect(
      toMapLibreViewState({
        center: { latitude: 47.3769, longitude: 8.5417 },
        zoom: 14,
        bearing: 25,
        pitch: 30,
      }),
    ).toEqual({
      latitude: 47.3769,
      longitude: 8.5417,
      zoom: 14,
      bearing: 25,
      pitch: 30,
    });
  });
});
