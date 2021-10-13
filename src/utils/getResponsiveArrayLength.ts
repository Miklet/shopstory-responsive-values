import { ResponsiveValue } from '../types';

function getResponsiveValueLength(
  responsiveValue: ResponsiveValue<unknown>
): number {
  if (Array.isArray(responsiveValue)) {
    return responsiveValue.length;
  }

  return -1;
}

export { getResponsiveValueLength };
