import { ResponsiveValue } from './types';
import { mapResponsiveValues, normalizeResponsiveValue } from './utils';

function getContainerWidth(
  containerMargin: ResponsiveValue<number>,
  isSnappedToEdge: ResponsiveValue<boolean>
): ResponsiveValue<string> {
  const result = mapResponsiveValues(
    containerMargin,
    isSnappedToEdge
  )((containerMargin, isSnappedToEdge) => {
    if (isSnappedToEdge) {
      return '100%';
    }

    return `calc(100% - ${containerMargin / 2}px)`;
  }) as Array<string>;

  return normalizeResponsiveValue(result);
}

export { getContainerWidth };
