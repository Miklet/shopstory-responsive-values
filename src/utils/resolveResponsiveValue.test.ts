import { resolveResponsiveValue } from './resolveResponsiveValue';
import { ResponsiveValue, ResponsiveValueArray, TestCase } from '../types';

test.each`
  input                              | output
  ${[true, 5]}                       | ${[true, true, true, true, true]}
  ${[[true, null, null, false], 5]}  | ${[true, false, false, false, false]}
  ${[10, 3]}                         | ${[10, 10, 10]}
  ${[[10, 20, null, null, 40], 5]}   | ${[10, 20, 40, 40, 40]}
  ${[[null, 10, null, 20, null], 5]} | ${[10, 10, 20, 20, 20]}
  ${['right', 4]}                    | ${['right', 'right', 'right', 'right']}
  ${[['left', null, 'center'], 4]}   | ${['left', 'center', 'center', 'center']}
  ${[[{ a: 1 }, null, { b: 2 }], 5]} | ${[{ a: 1 }, { b: 2 }, { b: 2 }, { b: 2 }, { b: 2 }]}
  ${[[null, null, 10, 5], 4]}        | ${[10, 10, 10, 5]}
`(
  'resolveResponsiveValues',
  ({
    input,
    output,
  }: TestCase<
    [ResponsiveValue<unknown>, number],
    ResponsiveValueArray<unknown>
  >) => {
    expect(resolveResponsiveValue(...input)).toEqual(output);
  }
);
