import {test, expect } from 'vitest';
import { buildFancyPath } from './buildFancyPath';

test('should return a fancy path', () => {
    expect(buildFancyPath('/foo/bar')).toBe('/home/rafael/foo/bar.sh');
});

test('should return a fancy path when given the root url', () => {
    expect(buildFancyPath('/')).toBe('/home/rafael/hello_world.sh');
});

test('should return a fancy path with a custom root', () => {
    expect(buildFancyPath('/', '/usr/local')).toBe('/usr/local/hello_world.sh');
});
