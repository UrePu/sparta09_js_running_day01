function calcNum(x, sign, y) {
  switch (sign) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return x / y;
  }
}

calcNum(3, "+", 6); // 결과값 9
calcNum(11, "-", 6); // 결과값 5
calcNum(6, "*", 3); // 결과값 18
calcNum(15, "/", 3); // 결과값 5
