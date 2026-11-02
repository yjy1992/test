/**
 * Turn arbitrary text into a URL slug.
 *
 * The result contains only lowercase `a-z`, `0-9` and single `-` separators.
 */
export function slugify(text) {
  return text
    .normalize('NFKD')
    .replace(/\p{M}+/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
