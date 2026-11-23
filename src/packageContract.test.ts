import { describe, expect, test } from 'bun:test';

interface PackageManifest {
  peerDependencies: Record<string, string>;
  peerDependenciesMeta?: Record<string, { optional?: boolean }>;
}

const packageManifest = (await Bun.file(
  new URL('../package.json', import.meta.url),
).json()) as PackageManifest;

describe('package contract', () => {
  test('requires expo-maps for the native entrypoint', () => {
    expect(packageManifest.peerDependencies['expo-maps']).toBeDefined();
    expect(packageManifest.peerDependenciesMeta?.['expo-maps']?.optional).toBeUndefined();
  });
});
