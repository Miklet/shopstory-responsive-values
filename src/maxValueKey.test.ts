import { maxValueKey } from './maxValueKey';
import type { ResponsiveValue } from './types';

type TestCase = {
  input: Record<string, number>;
  output: ResponsiveValue<string>;
};

test.each`
  input                                             | output
  ${[{ a: 1, b: 2}, null, { a: 1, c: 3}]}           | ${["b", "c"]}
  ${[{ a: 1, b: 2}, { d: 5 }, { a: 1, c: 3, d: 8}]} | ${["b", "d"]}
  ${[{ a: 4, b: 2}, { c: 3, a: 5}, { a: 1, b: 0 }]} | ${"a"}
`('maxValueKey', ({ input, output }: TestCase) => {
  expect(maxValueKey(input)).toEqual(output);
});
