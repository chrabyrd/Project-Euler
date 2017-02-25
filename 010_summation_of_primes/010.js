// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
// Find the sum of all the primes below two million.

const sumOfPrimes = upperBound => {
  let primeArr = [2];
  let primeSum = 2;

  for (let i = 3; i >= 0; i++) {
    let prime = true;

    primeArr.forEach(num => {
      if (i % num === 0) {
        prime = false;
      }
    });

    if (prime) {
      primeSum += i;
      primeArr.push(i);
    }

    if (i === upperBound) return primeSum;
  }
};

console.log(sumOfPrimes(2000000));
