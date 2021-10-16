import { getResponsiveValueLength } from '.';
import { resolveResponsiveValue } from '../resolveResponsiveValue';
import { ResponsiveValue } from '../types';

type UnwrapValue<
  T extends ResponsiveValue<unknown>
> = T extends ResponsiveValue<infer U> ? U : never;

function mapResponsiveValues<
  RV1 extends ResponsiveValue<any>,
  RV2 extends ResponsiveValue<any>,
  TMapped extends unknown
>(
  ...responsiveValues: [RV1, RV2]
): (
  mapperFn: (...values: [UnwrapValue<RV1>, UnwrapValue<RV2>]) => TMapped
) => ResponsiveValue<TMapped> {
  return mapperFn => {
    const maxResponsiveValueLength = Math.max(
      ...responsiveValues.map(responsiveValue =>
        getResponsiveValueLength(responsiveValue)
      )
    );
    const resolvedResponsiveValues = responsiveValues.map(responsiveValue =>
      resolveResponsiveValue(responsiveValue, maxResponsiveValueLength)
    );

    const combinedResponsiveValues = Array.from(
      { length: maxResponsiveValueLength },
      (_, index) => {
        const responsiveValuesPair = resolvedResponsiveValues.map(
          responsiveValue => responsiveValue[index]
        ) as [UnwrapValue<RV1>, UnwrapValue<RV2>];
        return mapperFn(...responsiveValuesPair);
      }
    );

    return combinedResponsiveValues;
  };
}

export { mapResponsiveValues };
