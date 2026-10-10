
#  Q68. Number Profile (no string conversion, no max()/min())
n = int(input("Enter a positive integer: "))
num = n
digits = 0
total = 0
largest = 0
smallest = 9
even = 0
odd = 0
for _ in range(n):
    if num > 0:
        digit = num % 10
        digits = digits + 1
        total = total + digit
        if digit > largest:
            largest = digit
        if digit < smallest:
            smallest = digit
        if digit % 2 == 0:
            even = even + 1
        else:
            odd = odd + 1
        num = num // 10
print("Digits:", digits)
print("Sum:", total)
print("Largest:", largest)
print("Smallest:", smallest)
print("Even Digits:", even)
print("Odd Digits:", odd)


#  Q69. String Balance Challenge

s = input("Enter a string: ")
total_chars = 0
vowels = 0
consonants = 0
upper = 0
lower = 0
even_index = 0
for i in range(len(s)):
    ch = s[i]
    total_chars = total_chars + 1
    if i % 2 == 0:
        even_index = even_index + 1
    if ch.isalpha():
        if ch.lower() in "aeiou":
            vowels = vowels + 1
        else:
            consonants = consonants + 1
        if ch.isupper():
            upper = upper + 1
        else:
            lower = lower + 1
print("Total Characters:", total_chars)
print("Vowels:", vowels)
print("Consonants:", consonants)
print("Uppercase:", upper)
print("Lowercase:", lower)
print("Even Index Characters:", even_index)
