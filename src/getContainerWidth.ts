import { getMaxArrayLength } from "./utils/getMaxArrayLength";
import { normalizeResponsiveValue } from "./normalizeResponsiveValue";
import { resolveResponsiveValue } from "./resolveResponsiveValue";
import type { ResponsiveValue } from "./types";

function getContainerWidth(containerMargin: ResponsiveValue<number>, isSnappedToEdge: ResponsiveValue<boolean>): ResponsiveValue<string> {
  const maxContainerMarginSize = getMaxArrayLength(containerMargin);
  const maxIsSnappedToEdgeSize = getMaxArrayLength(isSnappedToEdge);
  const maxArraySize = Math.max(maxContainerMarginSize, maxIsSnappedToEdgeSize);
  const resolvedContainerMargin = resolveResponsiveValue(containerMargin, maxArraySize);
  const resolvedIsSnappedToEdge = resolveResponsiveValue(isSnappedToEdge, maxArraySize);

  const result: Array<string> = Array.from({ length: maxArraySize }, (_, index) => {
    const currentContainerMargin = resolvedContainerMargin[index];
    const currentIsSnappedToEdge = resolvedIsSnappedToEdge[index];
    
    if (currentIsSnappedToEdge) {
      return '100%';
    }
  
    return `calc(100% - ${currentContainerMargin / 2}px)`;
  });

	return normalizeResponsiveValue(result);
}

export {
  getContainerWidth
}