import random

def CoinToss(tosses):
    heads =0
    tails =0
    for i in range(tosses):
        toss = round(random.random())
    
        if toss == 0:
            tails +=1
        else:
            heads +=1
    print heads
    print tails

CoinToss(15000)
