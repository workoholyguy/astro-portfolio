/**
 * Deterministic hash function for content selection
 * Creates a stable hash from a string that can be used to select content
 */

/**
 * Simple string hash function (djb2 algorithm)
 * Returns a positive integer hash for the given string
 */
export function hashString(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) ^ str.charCodeAt(i);
  }
  return Math.abs(hash);
}

/**
 * Creates a deterministic hash from city and service slugs
 * Used to select unique content combinations for location pages
 */
export function createLocationHash(citySlug: string, serviceSlug: string): number {
  return hashString(`${citySlug}-${serviceSlug}`);
}

/**
 * Selects an item from an array based on a hash value
 * The selection is deterministic - same hash always selects same item
 */
export function selectByHash<T>(items: T[], hash: number): T {
  const index = hash % items.length;
  return items[index];
}

/**
 * Selects multiple unique items from an array based on a hash value
 * Uses the hash as a seed to deterministically select N items
 */
export function selectMultipleByHash<T>(items: T[], hash: number, count: number): T[] {
  if (count >= items.length) {
    return [...items];
  }

  const selected: T[] = [];
  const usedIndices = new Set<number>();
  let currentHash = hash;

  while (selected.length < count) {
    const index = currentHash % items.length;
    if (!usedIndices.has(index)) {
      usedIndices.add(index);
      selected.push(items[index]);
    }
    // Generate next hash by combining with index
    currentHash = hashString(`${currentHash}-${index}`);
  }

  return selected;
}

/**
 * Shuffles an array deterministically based on a hash value
 * Same hash will always produce the same shuffle order
 */
export function shuffleByHash<T>(items: T[], hash: number): T[] {
  const result = [...items];
  let currentHash = hash;

  for (let i = result.length - 1; i > 0; i--) {
    const j = currentHash % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
    currentHash = hashString(`${currentHash}-${i}`);
  }

  return result;
}
