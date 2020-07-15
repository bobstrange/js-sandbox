function isString(a: unknown): a is string {
  return typeof a === "string";
}

function parseInput(input: string | number) {
  let formattedInput: string;
  if (isString(input)) {
    formattedInput = input.toUpperCase();
  }
}
