function checkNum(n) {
  if (n % 2 === 0) {
    return "짝수";
  } else return "홀수";
}

console.log(checkNum(10)); // 결과값 "짝수";
console.log(checkNum(7)); // 결과값 "홀수";
