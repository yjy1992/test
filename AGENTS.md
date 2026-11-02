# AGENTS.md

## Project
`slug-cli` — a tiny Node.js 22 command-line tool that turns text into URL slugs.

## Commands
- Install: none. The project has no dependencies; do not add any without a ticket.
- Test: `npm test` (built-in `node:test`).
- Run: `node bin/slug.js "Hello World"`.

## Conventions
- ESM only (`"type": "module"`), Node.js 22 or later.
- Every behavior change needs a test under `test/`.
- Keep a change inside the module the ticket names. Do not refactor unrelated files.
- Do not edit `.github/` unless the ticket says so.
- Commit as `yjy1992-agent`, never as the operator.

## Definition of done
- `npm test` passes.
- The PR description says what changed and how it was verified.
