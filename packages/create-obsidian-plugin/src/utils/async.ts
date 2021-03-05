export const to = <T, U = Error>(
  p: Promise<T>
): Promise<[null, T] | [U, undefined]> =>
  p
    .then<[null, T]>((value) => [null, value])
    .catch<[U, undefined]>((e: U) => [e, undefined]);
