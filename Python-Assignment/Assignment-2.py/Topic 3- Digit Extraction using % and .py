# Question 21 — Ones Digit

number = 583

ones = number % 10

print("Ones Digit:", ones)


# Question 22 — Tens Digit

number = 583

tens = (number // 10) % 10

print("Tens Digit:", tens)


# Question 23 — Hundreds Digit

number = 583

hundreds = number // 100

print("Hundreds Digit:", hundreds)


# Question 24 — Three-Digit Number Analyzer

number = 746

ones = number % 10
tens = (number // 10) % 10
hundreds = number // 100

print("Ones Digit:", ones)
print("Tens Digit:", tens)
print("Hundreds Digit:", hundreds)


# Question 25 — Four-Digit Number

number = 5829

ones = number % 10
tens = (number // 10) % 10
hundreds = (number // 100) % 10
thousands = number // 1000

print("Ones Digit:", ones)
print("Tens Digit:", tens)
print("Hundreds Digit:", hundreds)
print("Thousands Digit:", thousands)


# Question 26 — Sum of Digits

number = 583

ones = number % 10
tens = (number // 10) % 10
hundreds = number // 100

digit_sum = ones + tens + hundreds

print("Sum of Digits:", digit_sum)


# Question 27 — Four-Digit Sum

number = 4726

ones = number % 10
tens = (number // 10) % 10
hundreds = (number // 100) % 10
thousands = number // 1000

digit_sum = ones + tens + hundreds + thousands

print("Sum of Digits:", digit_sum)


# Question 28 — Product of Digits

number = 234

ones = number % 10
tens = (number // 10) % 10
hundreds = number // 100

product = ones * tens * hundreds

print("Product of Digits:", product)


# Question 29 — Reverse a Three-Digit Number

number = 583

ones = number % 10
tens = (number // 10) % 10
hundreds = number // 100

reverse = ones * 100 + tens * 10 + hundreds

print("Original Number:", number)
print("Reversed Number:", reverse)


# Question 30 — Reverse a Four-Digit Number

number = 4726

ones = number % 10
tens = (number // 10) % 10
hundreds = (number // 100) % 10
thousands = number // 1000

reverse = ones * 1000 + tens * 100 + hundreds * 10 + thousands

print("Original Number:", number)
print("Reversed Number:", reverse)


# Question 31 — Place Value

number = 5834

thousands = (number // 1000) * 1000
hundreds = ((number // 100) % 10) * 100
tens = ((number // 10) % 10) * 10
ones = number % 10

print("Thousands Place:", thousands)
print("Hundreds Place:", hundreds)
print("Tens Place:", tens)
print("Ones Place:", ones)


# Question 32 — Difference Between First and Last Digit

number = 583

hundreds = number // 100
ones = number % 10

difference = hundreds - ones

print("Difference:", difference)


# Question 33 — Digit Extraction Debugging

number = 583

ones = number % 10

print("Ones Digit:", ones)


# Question 34 — Four-Digit Extraction

number = 9365

thousands = number // 1000
hundreds = (number // 100) % 10
tens = (number // 10) % 10
ones = number % 10

print("Thousands Digit:", thousands)
print("Hundreds Digit:", hundreds)
print("Tens Digit:", tens)
print("Ones Digit:", ones)


# Question 35 — Build a Number

hundreds = 5
tens = 8
ones = 3

number = hundreds * 100 + tens * 10 + ones

print("Number:", number)