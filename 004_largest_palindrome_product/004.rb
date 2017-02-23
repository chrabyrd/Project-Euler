# A palindromic number reads the same both ways. The largest palindrome
# made from the product of two 2-digit numbers is 9009 = 91 × 99.
#
# Find the largest palindrome made from the product of two 3-digit
# numbers.

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

p largest_palindrome_product(999)
