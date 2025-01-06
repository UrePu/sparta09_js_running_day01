const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

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

for (let i = 0; i < scores.length; i++) {
  scores[i] = calcNum(scores[i], "+", 3);
}

console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]
