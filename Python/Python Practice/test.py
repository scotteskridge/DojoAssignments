str = "If monkeys like bananas, then I must be a monkey!"

print str.find("monkeys")
print str.replace("monkey", "alligator")

x = [2,54,-2,7,12,98]

print min(x)
print max(x)

y = ["hello",2,54,-2,7,12,98,"world"]
print y[:1],y[-1:]

z = [19,2,54,-2,7,12,98,32,10,-3,6]
z.sort()
a = z[len(z)/2:]
print z
print a
a.insert(0,z[:len(z)/2])
print a
