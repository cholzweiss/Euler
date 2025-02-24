f :: Int -> Int -> Int
f m n = m*(m+1)*n*(n+1) `div` 4

g :: Int -> [(Int, Int, Int)]
g o = [(f m n, m, n) | m<-[1..o], n<-[1..o]]

main :: IO ()
main = do
  print (f 4 1)
  let gm = g 1000
  print (filter(\(z,_,_) -> z < 2000000 +10 && z > 2000000 -10) gm)
