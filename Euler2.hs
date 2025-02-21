fib n | n == 0 = 1
      | n == 1 = 1
      | otherwise = fib (n-1) + fib (n-2)

euler2 n = sum (takeWhile (< n) [fib x | x <- [0..], even (fib x)])

main = do
  print (euler2 4000000)
