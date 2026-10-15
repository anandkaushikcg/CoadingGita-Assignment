# Q53
# import math
# num = int(input("Number:"))
# max = -1
# max_2 = -1
# for i in range(int(math.log10(num))+1):
#     digit = num % 10
#     if digit > max:
#         max_2=max
#         max= digit
#     elif digit < max and digit > max_2:
#         max_2 = digit
#     num = num // 10
# print(max_2)

# Q54
# str = input("String:")
# count = 1
# c_2 = 1
# for i in range(1,len(str)):
#     if str[i] == str[i-1]:
#         count = count + 1
#     else:
#         count = 1
#     if c_2 < count:
#         c_2 = count   # Used to save previous longest run
# print(c_2)

# Q55
# str = input("String:")
# target = input("Target:")
# count = 0
# for i in str:
#     if target == i:
#         count = count + 1
# print(count)
# percent = (count/len(str))*100
# print(percent)

# Q56
# import math
# num = int(input("String:"))
# sum = 0
# for i in range(int(math.log10(num))+1):
#     digit = num % 10
#     sum = sum + digit
#     print(sum)
#     num = num // 10

# Q57
# import math
# num = int(input("No.:"))
# odd = 0
# even = 0
# for i in range(int(math.log10(num))+1):
#     digit = num % 10
#     if digit % 2 == 0:
#         even = even + 1
#     else:
#         odd = odd + 1
#     num = num // 10
# if odd > even:
#     print("More odd numbers")
# elif odd == even:
#     print("Equal")
# else:
#     print("Even are more")

# Q58
# import math
# num = int(input("String:"))
# result = 0
# for i in range(int(math.log10(num))+1):
#     digit = num % 10
#     if i % 2 == 0:
#         result = result + digit
#     else:
#         result = result - digit
#     num =num// 10
# print(result)

# Q59
# 2
# 6
# 12
# 20
# 30

# Q60
# 5
# This code is counting the even numbers in the given range, there falls 5 even numbers in the given range.

# Q61
# sum = 0
# for i in range(1, 6):
#     sum = sum + i    # Without assigning the previous value in a variable the new iteration of loop just give the fresh output of that step  only.
# print(sum)