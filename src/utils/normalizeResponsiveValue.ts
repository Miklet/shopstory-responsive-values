import { ResponsiveValue, ResponsiveValueArray } from '../types';

function normalizeResponsiveValue<T>(
  responsiveValue: ReadonlyArray<T>
): ResponsiveValue<T> {
  const normalizedResult: ResponsiveValueArray<T | null> = [responsiveValue[0]];

  for (let index = 1; index < responsiveValue.length; index++) {
    const currentValue = responsiveValue[index];
    const previousValue = responsiveValue[index - 1];

    if (currentValue === previousValue) {
      const nextDefinedValue = findNextDefined(
        responsiveValue.slice(index),
        currentValue
      );

      if (currentValue === nextDefinedValue) {
        continue;
      }

      normalizedResult.push(currentValue);
      normalizedResult[index - 1] = null;
    } else {
      normalizedResult.push(currentValue);
    }
  }

  if (normalizedResult.length === 1 && normalizedResult[0] !== null) {
    return normalizedResult[0];
  }

  return normalizedResult;
}

function findNextDefined<T>(array: Array<T>, lastDefined: T): T {
  for (const value of array) {
    if (value !== lastDefined) {
      return value as T;
    }
  }

  return lastDefined;
}

export { normalizeResponsiveValue };
