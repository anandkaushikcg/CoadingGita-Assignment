# Q37
# str = input("String:")
# for i in range(len(str)):
#     print(i,str[i])

# Q38
# str = input("String:")
# count = 0
# for i in str:
#     count = count + 1
# print(count)

# Q39
# str = input("String:")
# vowel = 0
# consonant = 0
# for i in str:
#     if i in "aeiou":
#         vowel = vowel + 1
#     elif i != " ":
#         consonant = consonant + 1
# print("Vowel:",vowel,"Consonant:",consonant)

# Q40
# str = input("String:")
# target = input("Target character:")
# count = 0
# for i in str:
#     if i == target:
#         count = count + 1
# print(count)

# Q41
# str = input("String:")
# target = input("Target Character:")
# count = 0
# for i in str:
#     if i == target:
#         print(count)
#         break
#     elif target not in str:
#         print("Not found")
#         break
#     count += 1

# Q42
# str = input("String:")
# uc = 0
# lc = 0
# for i in str:
#     if i.isupper():
#         uc = uc + 1
#     elif i.islower():
#         lc = lc + 1
# print("Uppercase:",uc)
# print("Lowercase:",lc)

# Q43
# str = input("String:")
# for i in str:
#     print(i,ord(i))

# Q44
# str = input("String:")
# cons = ""
# for i in str:
#     if i not in "aeiou":
#         cons = cons + i
# print(cons)