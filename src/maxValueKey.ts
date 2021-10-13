import { normalizeResponsiveValue } from "./normalizeResponsiveValue";
import { resolveResponsiveValue } from "./resolveResponsiveValue";
import type { ResponsiveValue } from "./types";
import { getResponsiveValueLength } from "./utils";

type InputObject = {
	[key: string] : number
}

function maxValueKey(responsiveValue: ResponsiveValue<InputObject>) : ResponsiveValue<string>  {
  const responsiveValueLength = getResponsiveValueLength(responsiveValue)
  const resolvedResponsiveValue = resolveResponsiveValue(responsiveValue, responsiveValueLength);
  const keysOfMaxValues = resolvedResponsiveValue.map(value => {
    return getMaxKeyFromObject(value)
  })

  return normalizeResponsiveValue(keysOfMaxValues);
}

function getMaxKeyFromObject(obj: InputObject): string {
  return Object.entries(obj).reduce((acc, current) => {
		return current[1] > acc[1] ? current : acc;
	}, ['', Number.MIN_VALUE])[0];
}

export {
  maxValueKey
}