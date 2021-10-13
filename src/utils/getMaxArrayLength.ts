import type { ResponsiveValue, ResponsiveValueArray } from "../types";

function getMaxArrayLength<T>(...arrays: Array<ResponsiveValue<T>>): number {
  const arraysOnly = arrays.filter<ResponsiveValueArray<T>>((array): array is ResponsiveValueArray<T> => Array.isArray(array));

  if (!arraysOnly.length) {
    return 0;
  }

  return Math.max(...arraysOnly.map(array => array.length));
}

export {
  getMaxArrayLength
}