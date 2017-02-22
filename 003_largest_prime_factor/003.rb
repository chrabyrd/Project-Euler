# The prime factors of 13195 are 5, 7, 13 and 29.
#
# What is the largest prime factor of the number 600851475143 ?

require 'prime'

def largest_prime_factor(n)
  prime_factors = Prime.prime_division(n).map { |arr| arr[0] }
  prime_factors.sort.last
end

p largest_prime_factor(600851475143)
