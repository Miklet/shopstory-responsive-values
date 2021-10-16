import { ResponsiveValue } from './types';
import { mapResponsiveValues } from './utils';

function addResponsiveValues(
  ...responsiveValues: [ResponsiveValue<number>, ResponsiveValue<number>]
): Array<number> {
  const result = mapResponsiveValues(...responsiveValues)((v1, v2) => v1 + v2);
  // @ts-ignore
  return result;
}

export { addResponsiveValues };
