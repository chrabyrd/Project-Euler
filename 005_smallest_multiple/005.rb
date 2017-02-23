# 2520 is the smallest number that can be divided by each of the numbers
# from 1 to 10 without any remainder.
#
# What is the smallest positive number that is evenly divisible by all
# of the numbers from 1 to 20?

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

p smallest_multiple(20)
