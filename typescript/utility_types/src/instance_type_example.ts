/**
 * InstanceType<T>
 * Constructs a type consisting of the instance type of a constructor function type `T`
 * Obtain the return type of a constructor function type
 */

class Point {
  x = 0;
  y = 0;
}

type InstanceType0 = InstanceType<typeof Point>;
// type InstanceType0 = Point

type InstanceType1 = InstanceType<DateConstructor>;
// type InstanceType1 = Date
