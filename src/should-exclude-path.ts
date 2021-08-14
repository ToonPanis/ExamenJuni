import { isMatch } from 'micromatch';

/**
 * True if path is excluded by either the path or glob criteria.
 * path may be to a directory or individual file.
 */
export const shouldExcludePath = (path: string, pathsToIgnore: Set<string>, globsToIgnore: string[]): boolean => {

  return pathsToIgnore.has(path) || globsToIgnore.some(glob => isMatch(path, glob));
}