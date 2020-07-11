/**
 * NonNullable<T>
 * Constructs a type by excluding `null` and `undefined` from `T`
 */

type T6 = NonNullable<string | number | undefined>;
// type T6 = string | number

type T7 = NonNullable<string[] | null | undefined | void | null[]>;
// type T7 = void | string | null[]
