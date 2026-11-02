import test from 'node:test';
import assert from 'node:assert/strict';

import { slugify } from '../src/slug.js';

test('slugifies simple text', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('trims and collapses whitespace', () => {
  assert.equal(slugify('  A  B  '), 'a-b');
});

test('strips diacritics', () => {
  assert.equal(slugify('Café déjà vu!'), 'cafe-deja-vu');
});

test('returns an empty string for symbol-only input', () => {
  assert.equal(slugify('---'), '');
});

test('returns an empty string for empty input', () => {
  assert.equal(slugify(''), '');
});

test('collapses punctuation runs into single separators', () => {
  assert.equal(slugify('Node.js 22 -- ESM!'), 'node-js-22-esm');
});

test('lowercases uppercase input', () => {
  assert.equal(slugify('HELLO'), 'hello');
});
