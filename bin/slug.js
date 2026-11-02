#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { slugify } from '../src/slug.js';

const args = process.argv.slice(2);

if (args[0] === '--version') {
  const { version } = JSON.parse(
    readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
  );
  console.log(version);
} else if (args.length === 0) {
  process.stderr.write('Usage: slug <text...>\n');
  process.exitCode = 1;
} else {
  console.log(slugify(args.join(' ')));
}
