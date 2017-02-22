# Ruby and Javascript Solutions to Project Euler Questions

### Multiples of 3 and 5

```ruby
  def sum_mult(n)
    sum = 0
    (3...n).each { |num| sum += num if num % 3 == 0 || num % 5 == 0 }
    sum
  end
```

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

### Even Fibonacci Numbers

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

### Largest Prime Factorization

##### Note: The Javascript version is slow and needs to be refactored.

```ruby
  require 'prime'

  def largest_prime_factor(n)
    prime_factors = Prime.prime_division(n).map { |arr| arr[0] }
    prime_factors.sort.last
  end
```

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
