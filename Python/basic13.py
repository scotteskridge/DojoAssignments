""" number1 """
def PrintRange(a,b):
    arr =[]
    for i in range(a,b+1):
        arr.append(i)
    print arr

PrintRange(1,10)

""" number2 """
def PrintOdds(a,b):
    arr =[]
    for i in range(a,b+1,2):
        arr.append(i)
    print arr

PrintOdds(1,255)

""" number3 """

""" number5 """
def PrintMax(myList):
    max = myList[0]
    for i in myList:
        if max<i:
            max = i
    print max

PrintMax([1,10,5,11,12,2,3,4,5])

""" number12 """

def ShiftForward(myList):
    for i in range(len(myList)-1):
        myList[i] = myList[i+1]
    myList[len(myList)-1]=0
    print myList

ShiftForward([1,2,3,4,5])
