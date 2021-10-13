type Value = null | unknown;

type ResponsiveValueArray<T> = Array<T | null>;

type ResponsiveValue<T> = ResponsiveValueArray<T> | T;

type TestCase<Input, Output> = {
  input: Input;
  output: Output;
}

export type { Value, ResponsiveValue, ResponsiveValueArray, TestCase };
