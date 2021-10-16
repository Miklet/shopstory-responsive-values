import { ResponsiveValue } from './types';
import { mapResponsiveValues } from './utils';

function addResponsiveValues(
  ...responsiveValues: [ResponsiveValue<number>, ResponsiveValue<number>]
): Array<number> {
  const result = mapResponsiveValues((v1, v2) => v1 + v2, ...responsiveValues);
  return result;
}

export { addResponsiveValues };
