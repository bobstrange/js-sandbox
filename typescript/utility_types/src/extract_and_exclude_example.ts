/**
 * Exclude<T, U>
 * Constructs a type by excluding from `T` all properties that are assignable to `U`
 */

type T0 = Exclude<string | number | object, object>;
// type T0 = string | number

type T1 = Exclude<string | number | boolean | object, string | number>;
// type T1 = boolean | object

type T2 = Exclude<string | number | ((i: number) => boolean), Function>;
// type T2 = string | number

/**
 * Extract<T, U>
 * Constructs a type by extracting from `T` all properties that are assignable to `U`
 */

type T3 = Extract<string | number | object, object | Function>;
// type T3 = object

type T4 = Extract<
  string | number | ((i: number) => boolean) | (() => void),
  Function
>;
// type T4 = ((i: number) => boolean) | (() => void)
