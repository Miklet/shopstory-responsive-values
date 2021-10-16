import type { ResponsiveValue } from "./types";
import { mapResponsiveValues, normalizeResponsiveValue } from "./utils";

type InputObject = {
	[key: string] : number
}


function maxValueKey(responsiveValue: ResponsiveValue<InputObject>) : ResponsiveValue<string>  {
  const result = mapResponsiveValues(getMaxKeyFromObject, responsiveValue);
  return normalizeResponsiveValue(result);
}

function getMaxKeyFromObject(obj: InputObject): string {
  return Object.entries(obj).reduce((acc, current) => {
    return current[1] > acc[1] ? current : acc;
	}, ['', Number.MIN_VALUE])[0];
}

export {
  maxValueKey
};
