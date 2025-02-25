integerSquareRoot :: Integer -> Integer
integerSquareRoot n = bbin 0 (n+1)
    where bbin a b | a + 1 == b = a
                   | otherwise = if m*m > n
                                 then bbin a m
                                 else bbin m b
                                    where m = (a + b) `div` 2

str :: (Integer, Int) -> String
str (n,d) = show (integerSquareRoot (n*10^(2*d)))

intArr :: String -> [Int]
intArr (x:xs) = map (\x -> read (x:[])) xs

eulerSqrt13 :: (Integer, Int) -> Int
eulerSqrt13 (n, d) = sum (intArr(str (n ,d)))

main = do
  print (eulerSqrt13 (13, 1000))
