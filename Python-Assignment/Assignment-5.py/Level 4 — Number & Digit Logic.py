# Q23
# num = int(input("A positive integer:"))
# count = 0
# for i in range(num):
#     if num > 0:
#         count = count + 1
#         num = num // 10
# print(count)

# Q24
# num = int(input("A positive integer:"))
# add = 0
# for i in range(num):
#     if num > 0:
#         digit = num % 10
#         add = add + digit
#         num = num // 10
# print(add)

# Q25
# num = int(input("Integer:"))
# product = 1
# for i in range(num):
#     if num > 0:
#         digit = num % 10
#         product = product * digit
#         num = num // 10
# print(product)

# Q26
# num = int(input("Integer:"))
# count = 0
# for i in range(num):
#     if num > 0:
#         digit = num % 10
#         if digit % 2 == 0:
#             count += 1
#         num = num // 10
# print(count)

# Q27
# num = int(input("Integer:"))
# sum = 0
# for i in range(num):
#     if num > 0:
#         digit = num % 10
#         if digit % 2 == 0:
#             sum = sum + digit
#         num = num // 10
# print(sum)

# Q28
# import math
# num = int(input("Integer:")) # 54364
# max_value = 0
# for i in range(int(math.log10(num))+1):
#     digit = num % 10
#     if digit > max_value:
#         max_value = digit
#     num = num // 10
# print(max_value)

# Q29
# import math
# num = int(input("Integer:"))
# min_val = 9
# for i in range(int(math.log10(num))+1):
#     digit = num % 10
#     if digit < min_val:
#         min_val = digit
#     num = num // 10
# print(min_val)

# Q30
# import math
# num = int(input("Integer:"))
# reverse = 0
# for i in range(int(math.log10(num))+1):
#     digit = num % 10
#     reverse = reverse*10 + digit
#     num = num // 10
# print(reverse)

# Q31
# import math
# num = int(input("Integer:"))
# original = num
# reverse = 0
# for i in range(int(math.log10(num))+1):
#     digit = num % 10
#     reverse = reverse*10 + digit
#     num = num // 10
# if reverse == original:
#     print("Palindrome")
# else:
#     print("Not Palindrome")

# Q32
# import math
# num = int(input("Integer:"))
# target = int(input("Target digit:"))
# count = 0
# for i in range(int(math.log10(num))+1):
#     digit = num % 10
#     if digit == target:
#         count = count + 1
#     num = num // 10
# print(count)

# Q33
# import math
# num = int(input("Integer:"))
# for i in range(int(math.log10(num))+1):
#     num = num // 10
#     if 0 < num < 10:
#         print(num)

# Q34
# import math
# num = int(input("Integer:"))
# min = 9
# max = 0
# for i in range(int(math.log10(num))+1):
#     digit = num % 10
#     if digit < min:
#         min = digit
#     if digit > max:
#         max = digit
#     num = num // 10
# print(max - min)

# Q35
# import math
# num = int(input("Integer:"))
# position = 1
# for i in range(int(math.log10(num))+1):
#     digit = num % 10
#     print(digit, position)
#     position += 1
#     num = num // 10

# Q36
# import math
# num = int(input("Integer:"))
# original = num
# tally = 0
# for i in range(int(math.log10(num))+1):
#     digit = num % 10
#     tally = tally + digit ** 3
#     num = num // 10

# if original == tally:
#     print("Armstrong Number")
# else:
#     print("Not Armstrong Number")