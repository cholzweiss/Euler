w1 = [[x0,x1,x2,x3,x4,x5] | 
    x0 <- [0..4],
    x1 <- [(x0+1)..5],
    x2 <- [(x1+1)..6], 
    x3 <- [(x2+1)..7], 
    x4 <- [(x3+1)..8], 
    x5 <- [(x4+1)..9]
  ]


ss = [(0,1), (0,4), (0,9), (1,6), (2,5), (3,6), (4,9), (6,4), (8,1)]

enh xs | 6 `elem` xs = 9:xs
       | 9 `elem` xs = 6:xs
       | otherwise = xs 

isElem (xs,ys) = and [(fst t `elem` enh xs && snd t `elem` enh ys) || (fst t `elem` enh ys && snd t `elem` enh xs) | t <- ss]

euler90 = length (filter isElem [(xs, ys) | xs <- w1,  ys <- w1]) `div` 2

main = do
  print (euler90)
