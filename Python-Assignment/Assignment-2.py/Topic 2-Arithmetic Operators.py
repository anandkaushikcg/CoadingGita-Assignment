# Question 11 — Basic Arithmetic

a = 20
b = 6

print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)
print("Floor Division:", a // b)
print("Remainder:", a % b)
print("Power:", a ** b)


# Question 12 — Predict the Output

a = 17
b = 5

print(a / b)   # 3.4
print(a // b)  # 3
print(a % b)   # 2

# Explanation:
# / gives the exact division result.
# // gives the quotient without the decimal part.
# % gives the remainder after division.


# Question 13 — Operator Precedence

result = 10 + 5 * 2
print(result)  # 20

# Addition first
result = (10 + 5) * 2
print(result)  # 30


# Question 14 — More Precedence Practice

result = 20 - 4 * 3 + 2
print(result)  # 10

# Using parentheses for clarity
result = 20 - (4 * 3) + 2
print(result)


# Question 15 — Power Operator

print(2 ** 3)   # 8
print(3 ** 2)   # 9
print(10 ** 2)  # 100

side = 5
area = side ** 2

print("Area of Square:", area)


# Question 16 — Shopping Bill

notebook = 80
pen = 20
pencil = 10

total_amount = notebook + pen + pencil

print("Total Amount:", total_amount)


# Question 17 — Multiple Quantities

notebook_cost = 3 * 50
pen_cost = 2 * 15
calculator_cost = 1 * 500

total_bill = notebook_cost + pen_cost + calculator_cost

print("Notebook Cost:", notebook_cost)
print("Pen Cost:", pen_cost)
print("Calculator Cost:", calculator_cost)
print("Total Bill:", total_bill)


# Question 18 — Complete Groups and Remainder

students = 47
group_size = 5

complete_groups = students // group_size
students_left = students % group_size

print("Complete Groups:", complete_groups)
print("Students Left:", students_left)


# Question 19 — Average Marks

python_marks = 85
mathematics = 78
physics = 92

total = python_marks + mathematics + physics
average = total / 3

print("Total Marks:", total)
print("Average Marks:", average)


# Question 20 — Percentage

english = 78
mathematics = 85
python_marks = 92
physics = 81
chemistry = 74

total_marks = english + mathematics + python_marks + physics + chemistry
percentage = total_marks / 5

print("Total Marks:", total_marks)
print("Percentage:", percentage, "%")