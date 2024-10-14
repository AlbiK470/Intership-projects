const fib = steps => {
    let  a = 0, b = 1;
    let result;
    if (steps < 0) return "Invalid input, should not be negative";
    if (steps === 0) return 0;
    if (steps === 1) return 1;

    for (let i = 2;  i <= steps; i++) {
        result = a + b;
        a = b;
        b = result;  
    }
    return b;
  };
  
  console.log(fib(0)); // 0
  console.log(fib(4)); // 3
  console.log(fib(17)); // 1597
  console.log(fib(20)); // 6765