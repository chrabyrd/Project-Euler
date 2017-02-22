// Each new term in the Fibonacci sequence is generated by adding the
// previous two terms. By starting with 1 and 2, the first 10 terms will
// be:
//
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
// By considering the terms in the Fibonacci sequence whose values do not
// exceed four million, find the sum of the even-valued terms.

const fibEvenSum = num => {
  let fibArr = [1, 1];
  let sum = 0;
  let lastValue = 0;
  let secondToLast = 0;

  while (lastValue < num) {
    lastValue = parseInt(fibArr.slice(-1));
    secondToLast = parseInt(fibArr.slice(-2, -1));

    fibArr.push(secondToLast + lastValue);

    if (secondToLast % 2 === 0) {
      sum += secondToLast;
    }
  }

  return sum;
};

console.log(fibEvenSum(4000000));
