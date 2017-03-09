import random

def MakeScores(grades):
    results =[]
    for i in range(grades):
        results.append(random.randint(50,100))
    return results

# print MakeScores(10)

def GradeScores(aList):
    for i in range(len(aList)):
        score = "F"
        if aList[i]>= 90:
            score = "A"
        elif aList[i]>= 80:
            score = "B"
        elif aList[i]>= 70:
            score = "C"
        elif aList[i]>= 60:
            score = "D"
        print "Score: {grades}; Your grade is a {score}".format(grades=aList[i], score=score)


GradeScores(MakeScores(20))
