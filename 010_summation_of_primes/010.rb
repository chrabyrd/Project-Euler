# The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
#
# Find the sum of all the primes below two million.

require 'prime'

def sum_of_primes(upper_bound)
  count = 0
  sum = 0

  while count < upper_bound
    sum += count if count.prime?
    count += 1
  end

  sum
end

p sum_of_primes(2000000)
