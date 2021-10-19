import { ResponsiveValue } from './types';
import { mapResponsiveValues, normalizeResponsiveValue } from './utils';

function getContainerWidth(
  containerMargin: ResponsiveValue<number>,
  isSnappedToEdge: ResponsiveValue<boolean>
): ResponsiveValue<string> {
  const result = mapResponsiveValues(
    [containerMargin, isSnappedToEdge],
    (containerMargin, isSnappedToEdge): string => {
      if (isSnappedToEdge) {
        return '100%';
      }

      return `calc(100% - ${containerMargin / 2}px)`;
    }
  );

  return normalizeResponsiveValue(result);
}

export { getContainerWidth };
