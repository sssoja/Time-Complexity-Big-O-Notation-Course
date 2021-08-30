function fib(n) {
  /* both of the if blocks below are base cases
  which are needed with recursive functions so that the 
  function doesn't keep calling itself after it's finished */

  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
