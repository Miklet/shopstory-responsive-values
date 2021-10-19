import { ResponsiveValue } from './types';
import { mapResponsiveValues } from './utils';

function addResponsiveValues(
  ...responsiveValues: Array<ResponsiveValue<number>>
): Array<number> {
  const result = mapResponsiveValues(
    (...values) => values.reduce((sum, value) => sum + value),
    ...responsiveValues
  );
  return result;
}

export { addResponsiveValues };
