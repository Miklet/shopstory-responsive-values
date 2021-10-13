import { normalizeResponsiveValue } from './normalizeResponsiveValue';
import type { TestCase } from './types';

test.each`
  input                                                         | output
  ${[10, 10, 20, 20, 20]}                                       | ${[null, 10, 20]}
  ${[10, 5, 10, 10]}                                            | ${[10, 5, 10]}
  ${[10, 10, 10, 5]}                                            | ${[null, null, 10, 5]}
  ${['100%', '100%', 'calc(100% - 50px)', 'calc(100% - 50px)']} | ${[null, '100%', 'calc(100% - 50px)']}
  ${['b', 'c', 'c']}                                            | ${['b', 'c']}
  ${['b', 'b', 'd']}                                            | ${[null, 'b', 'd']}
  ${['a', 'a', 'a']}                                            | ${'a'}
  ${[true, true, true, true, true]}                             | ${true}
  ${[true, false, false, false, false]}                         | ${[true, false]}
  ${[10, 10, 20, 20, 20]}                                       | ${[null, 10, 20]}
  ${['left', 'center', 'center', 'center', 'center']}           | ${['left', 'center']}
  ${[10, 10, 20, 20, 20, 10, 20]}                               | ${[null, 10, null, null, 20, 10, 20]}
`(
  'normalizes $input into $output',
  ({ input, output }: TestCase<Array<unknown>, Array<unknown>>) => {
    expect(normalizeResponsiveValue(input)).toEqual(output);
  }
);
