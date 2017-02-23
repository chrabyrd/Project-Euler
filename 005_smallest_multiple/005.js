// 2520 is the smallest number that can be divided by each of the numbers
// from 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by all
// of the numbers from 1 to 20?

const smallestMultiple = ceiling => {
  for (let i = ceiling; i >= ceiling; i += ceiling ) {
    let divisible = true;

    for (let j = 1; j <= ceiling; j++) {

      if (i % j !== 0) {
        divisible = false;
        continue;
      }
    }

    if (divisible) return i;
  }
};

console.log(smallestMultiple(20));
