# Q45
# str = input("String:")
# for i in range(len(str)):
#     if i == len(str)//2:
#         print(str[i])

# Q46
# text = input("String:")
# mid = len(text) // 2
# for i in range(len(text)):
#     if i < mid:
#         print(text[i],end="")
#     else:
#         if i == mid:
#             print()
#         print(text[i],end="")

# Q47
# str = input("String:")
# half = len(str)/2
# for i in range(len(str)):
#     if len(str)%2 == 0:
#         if i < half:
#             print(str[i],end="")
#         else:
#             if i == half:
#                 print()
#             print(str[i],end="")
#     else:
#         if i < len(str)//2:
#             print(str[i],end="")
#         elif i == len(str)//2:
#             print()
#             print(str[i])
#         else:
#             print(str[i],end="")

# Q48
# str = input("String of even length:")
# mid = len(str) // 2

# for i in range(mid):
#     if str[0:mid] != str[mid:len(str)+1]:
#         print("Not Same")
#         break
#     else:
#         print("same")
#         break

# same = True
# for i in range(mid):
#     if str[i] != str[i+mid]:
#         same = False
#         break
# if same:
#     print("Same")
# else:
#     print("Not Same")

# Q49
# str = input("String of even length:")
# mid = len(str) // 2

# same = True
# for i in range(mid):
#     if str[i] != str[-(i+1)]:
#         same = False
#         break
# if same:
#     print("Symmetric")
# else:
#     print("Not Symmetric")

# Q50
# str = input("String:")

# for i in range(len(str)):
#     if i % 2 == 0:
#         print(str[i],end="")

# Q51
# str = input("String:")
# odd = 0
# even = 0
# for i in range(len(str)):
#     if i % 2 == 0:
#         even = even + 1
#     else:
#         odd = odd + 1
# print("Even:",even,", Odd:",odd)

# Q52
# str = input("String:")
# result = ""
# for i in range(0,len(str),2):
#     print(str[i+1]+str[i],end="")