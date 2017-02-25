// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we
// can see that the 6th prime is 13.
//
// What is the 10 001st prime number?

const nthPrime = n => {
  let primeArr = [2];

  if (n === 1) return 2;

  for (let i = 3; i >= 0; i++) {
    let prime = true;

    primeArr.forEach(num => {
      if (i % num === 0) {
        prime = false;
      }
    });

    if (prime) {
      if (primeArr.length === n - 1) {
        return i;
      } else {
        primeArr.push(i);
      }
    }

  }
};

console.log(nthPrime(10001));
