#!/usr/bin/env node
import { slugify } from '../src/slug.js';

const args = process.argv.slice(2);

if (args.length === 0) {
  process.stderr.write('Usage: slug <text...>\n');
  process.exitCode = 1;
} else {
  console.log(slugify(args.join(' ')));
}
