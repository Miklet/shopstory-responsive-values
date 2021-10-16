import { getResponsiveValueLength } from '.';
import { resolveResponsiveValue } from './resolveResponsiveValue';
import { ResponsiveValue } from '../types';

type UnwrapValue<
  T extends ResponsiveValue<unknown>
> = T extends ResponsiveValue<infer U> ? U : T;

function mapResponsiveValues<
  ResponsiveValues extends
    | readonly ResponsiveValue<unknown>[]
    | readonly [ResponsiveValue<unknown>],
  MapFn extends (
    ...values: {
      [Index in keyof ResponsiveValues]: UnwrapValue<ResponsiveValues[Index]>;
    }
  ) => any
>(
  mapperFn: MapFn,
  ...responsiveValues: ResponsiveValues
): Array<ReturnType<MapFn>> {
  const maxResponsiveValueLength = Math.max(
    ...responsiveValues.map(responsiveValue =>
      getResponsiveValueLength(responsiveValue)
    )
  );
  const resolvedResponsiveValues = responsiveValues.map(responsiveValue =>
    resolveResponsiveValue(responsiveValue, maxResponsiveValueLength)
  );

  const mappedResponsiveValues = Array.from(
    { length: maxResponsiveValueLength },
    (_, index) => {
      const responsiveValuesPair = (resolvedResponsiveValues.map(
        responsiveValue => responsiveValue[index]
      ) as unknown) as {
        [Index in keyof ResponsiveValues]: UnwrapValue<ResponsiveValues[Index]>;
      };

      return mapperFn(...responsiveValuesPair);
    }
  );

  return mappedResponsiveValues;
}

export { mapResponsiveValues };
