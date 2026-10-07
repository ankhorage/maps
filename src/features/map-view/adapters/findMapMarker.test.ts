import { describe, expect, test } from 'bun:test';

import { findMapMarker } from './findMapMarker.js';

describe('findMapMarker', () => {
  test('resolves the portable marker represented by a provider event id', () => {
    const marker = {
      id: 'wetzikon',
      coordinate: { latitude: 47.326, longitude: 8.798 },
      title: 'Wetzikon',
    };

    expect(findMapMarker([marker], 'wetzikon')).toEqual(marker);
    expect(findMapMarker([marker], 'missing')).toBeUndefined();
  });
});
