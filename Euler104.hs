-- Euler104

test y = and [
     '1' `elem` take 9 y,
     '2' `elem` take 9 y,
     '3' `elem` take 9 y,
     '4' `elem` take 9 y,
     '5' `elem` take 9 y,
     '6' `elem` take 9 y,
     '7' `elem` take 9 y,
     '8' `elem` take 9 y,
     '9' `elem` take 9 y
    ]

fibs (n, x, y)
  | test (take 9 (show y)) && test (take 9 (reverse (show y))) = (n, y)
  | otherwise = fibs (n + 1, y, x + y)

fib = fibs (1, 0, 1)

-- >>> fib

main = do
  print fib
