import { addResponsiveValues } from './addResponsiveValues';
import type { ResponsiveValue, TestCase } from './types';

test.each`
  input | output
  ${[[10, null, 20], [null, 30, 40]]} | ${[
    40,
    50,
    60,
  ]}
  ${[[null, 20], [null, 30]]} | ${[50, 50]}
`('adds $input', ({ input, output }: TestCase<[ResponsiveValue<any | null>, ResponsiveValue<any | null>], ResponsiveValue<unknown>>) => {
  expect(addResponsiveValues(...input)).toEqual(output);
});
