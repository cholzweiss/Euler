euler6 n = sum [1..n]^2 - sum [x^2|x<-[1..n]]

main :: IO()
main = do
  print(euler6 100)
