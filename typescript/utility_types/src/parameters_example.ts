/**
 * Parameters<T>
 * Constructs a tuple type of the types of the parameters of a function type `T`
 */

type Params1 = Parameters<() => void>;
// type Params1 = []

type Params2 = Parameters<(i: number) => boolean>;
// type Params2 = [number]
// type MyNumber = Params2[0] = number

type Params3 = Parameters<<T>(arg: T) => void>;
// type Params3 = [unknown]

function f1(arg: { a: number; b: string }) {}
type Params4 = Parameters<typeof f1>;
// type Params4 = [{ a: number, b: string }]

type Params5 = Parameters<any>;
// type Params5 = unknown[]

type Params6 = Parameters<never>;
// type Params6 = never

type Params7 = Parameters<string>; // The 'string' doesn't satisfy the constraint (...args: any) => any
type Params8 = Parameters<Function>; // The 'Function' doesn't satisfy the constraint (...args: any) => any
