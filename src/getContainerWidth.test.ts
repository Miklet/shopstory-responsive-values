import { getContainerWidth } from './getContainerWidth';
import type { ResponsiveValue, TestCase } from './types';

test.each`
  input                               | output
  ${[100, [null, true, null, false]]} | ${[null, '100%', 'calc(100% - 50px)']}
  ${[
  [null, 10, null, 20],
  [true, null, false],
]} | ${['100%', 'calc(100% - 5px)', 'calc(100% - 10px)']}
`(
  'getContainerWidth',
  ({
    input,
    output,
  }: TestCase<
    [ResponsiveValue<any | null>, ResponsiveValue<any | null>],
    ResponsiveValue<unknown>
  >) => {
    expect(getContainerWidth(...input)).toEqual(output);
  }
);
