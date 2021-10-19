import { ResponsiveValue } from './types';
import { mapResponsiveValues } from './utils';

function addResponsiveValues(
  ...responsiveValues: Array<ResponsiveValue<number>>
): Array<number> {
  const result = mapResponsiveValues(responsiveValues, (...values) =>
    values.reduce((sum, value) => sum + value)
  );
  return result;
}

export { addResponsiveValues };
