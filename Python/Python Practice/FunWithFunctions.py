# def odd_even (start,end):
#     while (start<=end):
#         if start %2 == 0:
#             print "Number {num} is Even".format(num=start)
#         if start %2 == 1:
#             print "Number {num} is Odd".format(num=start)
#         start +=1
# odd_even(1,1000)

# def odd_even_forloop(start,end):
#     for i in xrange(start,end+1):
#         if start %2 == 0:
#             print "Number {num} is Even".format(num=i)
#         if start %2 == 1:
#             print "Number {num} is Odd".format(num=i)
# odd_even_forloop(1,20)

# a = [2, 4, 10, 16]
# b = [2]
def multiply(arr, num):
    for i in range(len(arr)):
        arr[i] *= num
            # print i
    return arr
# a = multiply([2,4,5],3)
# print a
# print multiply(a,5)
# print multiply(b,2)

#
# def MultiplyEllement(arr, num):
#     for i in arr:
#         i *= num
#             # print i
#     return arr
# b = MultiplyEllement(a,5)
# print b

"""[6, 12, 15]"""
def layered_multiples(mylist): #ok so this should go thorugh 3 times and make 3 arrays
    new_array=[]
    for i in range(len(mylist)):
        size = mylist[i]
        subarray=[]
        for i in range(size):
            # print i
            subarray.append(1)
        new_array.append(subarray)
    return new_array
x = layered_multiples(multiply([2,4,5],3))
print x
