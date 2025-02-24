isPrime :: Int -> Bool
isPrime 2 = True
isPrime n = and [n `mod` x /= 0|x<- [2]++[3,5..ceiling (sqrt (fromIntegral n))]]

euler7 :: Int -> Int
euler7 n = last (take n (filter isPrime [2..]))

main :: IO()
main = do
--  print (isPrime 7)
  print(euler7 10001)
