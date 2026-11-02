# slug-cli

Turn text into URL slugs.

## Usage

`slug-cli` is a Node.js 22 command-line tool with no dependencies and no install
step. Run it from the repository root:

```sh
node bin/slug.js "Hello World"
```

Output:

```text
hello-world
```

Pass the text as one or more arguments; they are joined with spaces. The result
contains only lowercase letters, digits and single hyphens:

```sh
node bin/slug.js "Café déjà vu!"        # cafe-deja-vu
node bin/slug.js "Node.js 22 -- ESM"    # node-js-22-esm
node bin/slug.js "---"                  # (empty slug)
```

Without arguments, the CLI prints `Usage: slug <text...>` to stderr and exits
with status 1.

## Tests

Run the test suite with Node.js 22 or later:

```sh
npm test
```
