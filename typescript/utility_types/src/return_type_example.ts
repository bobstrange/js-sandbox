/**
 * ReturnType<T>
 * Constructs a type consisting of the return type of function T
 */

type ReturnT0 = ReturnType<() => void>;
// type ReturnT0 = void

type ReturnT1 = ReturnType<() => string>;
// type ReturnT1 = string

type ReturnT2 = ReturnType<<T>() => T>;
// type ReturnT2 = unknown

type ReturnT3 = ReturnType<<T extends U, U extends number[]>() => T>;
// type ReturnT3 = number

declare function myFunc(args: { a: number; b: string }): { c: string };
type ReturnT4 = ReturnType<typeof myFunc>;
// type ReturnT4 = { c: string }

type ReturnT5 = ReturnType<any>;
// type ReturnT5 = any

type ReturnT6 = ReturnType<never>;
// type ReturnT6 = never
