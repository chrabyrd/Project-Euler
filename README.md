# Ruby and Javascript Solutions to Project Euler Questions

### 1. Multiples of 3 and 5

##### Ruby
```ruby
  def sum_mult(n)
    sum = 0
    (3...n).each { |num| sum += num if num % 3 == 0 || num % 5 == 0 }
    sum
  end
```

##### Javascript
```javascript
  let sumMult = num => {
    let sum = 0;

    for (let i=3; i < num; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    return sum;
  };
```

### 2. Even Fibonacci Numbers

##### Ruby
```ruby
  def fib_even_sum(n)
    fib_arr = [1, 1]
    sum = 0

    until fib_arr[-1] >= n
      fib_arr << (fib_arr[-2] + fib_arr[-1])
      sum += fib_arr[-2] if fib_arr[-2].even?
    end

    sum
  end
```

##### Javascript
```javascript
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
```

### 3. Largest Prime Factorization

Note: The Javascript version is slow and needs to be refactored.

##### Ruby
```ruby
  require 'prime'

  def largest_prime_factor(n)
    prime_factors = Prime.prime_division(n).map { |arr| arr[0] }
    prime_factors.sort.last
  end
```

##### Javascript
```javascript
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
```

### 4. Largest Palindrome Product

##### Ruby
```ruby
  def largest_palindrome_product(ceiling)
    largest_palindrome = 0

    ceiling.downto(ceiling / 2) do |num|
      multiplier = num

      until multiplier <= num / 2
        product = num * multiplier

        if product.to_s == product.to_s.reverse && product > largest_palindrome
          largest_palindrome = product
        end

        multiplier -= 1
      end
    end

    largest_palindrome
  end
```

##### Javascript
```javascript
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
```

### 5. Smallest Multiple

##### Ruby
```ruby
  def smallest_multiple(ceiling)
    count = ceiling

    loop do
      count += ceiling
      divisible = true

      ceiling.downto(1) do |num|
        if count % num != 0
          divisible = false
          next
        end
      end

      return count if divisible
    end
  end
```

##### Javascript
```javascript
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
```

### 6. Sum Square Difference

##### Ruby
```ruby
  def sum_square_difference(ceiling)
    sum_of_squares = 0
    square_of_sums = 0

    (1..ceiling).each do |num|
      sum_of_squares += (num**2)
      square_of_sums += num
    end

    square_of_sums = (square_of_sums**2)

    square_of_sums - sum_of_squares
  end
```

##### Javascript
```javascript
  const sumSqaureDifference = ceiling => {
    let sumOfSquares = 0;
    let squareOfSums = 0;

    for (let i = 1; i <= ceiling; i++) {
      sumOfSquares += Math.pow(i, 2);
      squareOfSums += i;
    }

    squareOfSums = Math.pow(squareOfSums, 2);

    return squareOfSums - sumOfSquares;
  };
```

### 7. 10001st Prime

##### Ruby
```ruby
  require 'prime'

  def nth_prime(n)
    Prime.first(n).last
  end
```

##### Javascript
```javascript
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
```
