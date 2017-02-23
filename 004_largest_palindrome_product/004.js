// A palindromic number reads the same both ways. The largest palindrome
// made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit
// numbers.

const largestPalindromeProduct = ceiling => {
  let largestPalindrome = 0;

  for (let i = ceiling; i > (ceiling / 2); i--) {
    let multiplier = i;

    while (multiplier > i / 2) {
      let product = i * multiplier;
      let productArray = product.toString().split('');

      if (productArray.join('') === productArray.reverse().join('')){
        if (product > largestPalindrome){
          largestPalindrome = product;
        }
      }
      multiplier--;
    }
  }

  return largestPalindrome;
};

console.log(largestPalindromeProduct(999));
