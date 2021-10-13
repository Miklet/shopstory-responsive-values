import { getMaxArrayLength } from './utils/getMaxArrayLength';
import { resolveResponsiveValue } from './resolveResponsiveValue';
import type {
  ResponsiveValueArray,
} from './types';

function addResponsiveValues(...responsiveValues: Array<ResponsiveValueArray<number>>): Array<number> {
  const maxResponsiveValueSize = getMaxArrayLength(responsiveValues);
  const resolvedResponsiveValues = responsiveValues.map(responsiveValue => resolveResponsiveValue(responsiveValue, maxResponsiveValueSize));
  const sum: Array<number> = Array.from({ length: maxResponsiveValueSize });

  resolvedResponsiveValues.forEach((responsiveValue) => {
    responsiveValue.forEach((value, index) => {
      if (sum[index] === undefined) {
        sum[index] = value;    
      } else {
        sum[index] += value;
      }
    })
  });

  return sum;
}

export { addResponsiveValues };
