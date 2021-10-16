import { ResponsiveValue, ResponsiveValueArray } from '../types';

function resolveResponsiveValue<Values>(
  responsiveValue: ResponsiveValue<Values>,
  breakpointsCount: number
): Array<Values> {
  if (Array.isArray(responsiveValue)) {
    let resolvedResponsiveValues: Array<Values> = responsiveValue.map(
      (_, index) => {
        const currentValue = responsiveValue[index];

        if (!isDefined(currentValue)) {
          const resolvedValue = resolveEmptyValue(responsiveValue, index);
          return resolvedValue;
        }

        return currentValue;
      }
    );

    if (resolvedResponsiveValues.length < breakpointsCount) {
      return padRightArray(resolvedResponsiveValues, breakpointsCount);
    }

    return resolvedResponsiveValues;
  }

  return Array.from<{ length: number }, NonNullable<Values>>(
    { length: breakpointsCount },
    () => responsiveValue as NonNullable<Values>
  );
}

function resolveEmptyValue<Values>(
  responsiveValues: ResponsiveValueArray<Values>,
  index: number
): NonNullable<Values> {
  const nextHigherBreakpointValue = responsiveValues
    .slice(index + 1)
    .find(value => isDefined(value));

  if (isDefined(nextHigherBreakpointValue)) {
    return nextHigherBreakpointValue;
  }

  const previousLowerBreakpointValue = [...responsiveValues]
    .reverse()
    .slice(index + 1 - responsiveValues.length)
    .find(value => isDefined(value));

  if (isDefined(previousLowerBreakpointValue)) {
    return previousLowerBreakpointValue;
  }

  throw new Error('Cannot be :)');
}

function padRightArray<T>(array: Array<T>, size: number): Array<T> {
  const paddedArray = [...array];

  while (paddedArray.length < size) {
    paddedArray.push(resolveEmptyValue(array, paddedArray.length - 1));
  }

  return paddedArray;
}

function isDefined<T>(value: T | undefined): value is NonNullable<T> {
  return value !== null && value !== undefined;
}

export { resolveResponsiveValue };
