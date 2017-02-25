// A Pythagorean triplet is a set of three natural numbers, a < b < c,
// for which a**2 + b**2 = c**2.
//
// For example, 3**2 + 4**2 = 9 + 16 = 25 = 5**2.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

const specialTriplet = setSum => {
  for (let i = 0; i < (setSum / 2); i++) {
    for (let j = i; j < (setSum / 2); j++) {

      let sumSquares = Math.sqrt(Math.pow(i, 2) + Math.pow(j, 2));

      if (sumSquares % 1 === 0 && (i + j + sumSquares === 1000)) {
        return i * j * sumSquares;
      }
    }
  }
};

console.log(specialTriplet(1000));
