import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const cli = fileURLToPath(new URL('../bin/slug.js', import.meta.url));
const pkg = JSON.parse(
  readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
);

test('CLI prints the slug for the joined arguments', () => {
  const result = spawnSync(process.execPath, [cli, 'Hello', 'World'], {
    encoding: 'utf8',
  });

  assert.equal(result.status, 0);
  assert.equal(result.stdout, 'hello-world\n');
  assert.equal(result.stderr, '');
});

test('CLI prints the package version and exits 0 for --version', () => {
  const result = spawnSync(process.execPath, [cli, '--version'], {
    encoding: 'utf8',
  });

  assert.equal(result.status, 0);
  assert.equal(result.stdout, `${pkg.version}\n`);
  assert.equal(result.stderr, '');
});

test('CLI prints usage to stderr and exits 1 without arguments', () => {
  const result = spawnSync(process.execPath, [cli], { encoding: 'utf8' });

  assert.equal(result.status, 1);
  assert.equal(result.stdout, '');
  assert.match(result.stderr, /^Usage: slug <text\.\.\.>\n$/);
});
