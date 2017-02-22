// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

const largestPrimeFactor = num => {
  const isPrime = number => {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
  };

  for (let i = Math.floor(num / 2); i > 0; i--) {
    if (num % i === 0 && isPrime(i)) {
      return i;
    }
  }
};

console.log(largestPrimeFactor(600851475143));
