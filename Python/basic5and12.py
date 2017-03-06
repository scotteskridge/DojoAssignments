def PrintMax(myList):
    max = myList[0]
    for i in myList:
        if max<i:
            max = myList[i]
    print max

PrintMax([1,2,3,4,5])

def ShiftForward(myList):
    for i in range(len(myList)-1):
        myList[i] = myList[i+1]
    myList[len(myList)-1]=0
    print myList

ShiftForward([1,2,3,4,5])
