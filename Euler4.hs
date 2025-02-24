p :: Int -> Bool
p s = show s == reverse (show s)

euler4 :: [Int] -> Int
euler4 xs = maximum (filter p [x*y | x<-xs, y<-xs])

main :: IO()
main = do
  print(euler4 [100..999])
