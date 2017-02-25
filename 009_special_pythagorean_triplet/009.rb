# A Pythagorean triplet is a set of three natural numbers, a < b < c,
# for which a**2 + b**2 = c**2.
#
# For example, 3**2 + 4**2 = 9 + 16 = 25 = 5**2.
#
# There exists exactly one Pythagorean triplet for which a + b + c = 1000.
# Find the product abc.

def special_triplet(set_sum)
  (1..(set_sum / 2)).each do |num1|
    (num1..(set_sum / 2)).each do |num2|

      sum_squares = Math.sqrt(num1**2 + num2**2)

      if sum_squares % 1 == 0 && (num1 + num2 + sum_squares.to_i == 1000)
        return num1 * num2 * sum_squares.to_i
      end

    end
  end
end

p special_triplet(1000)
