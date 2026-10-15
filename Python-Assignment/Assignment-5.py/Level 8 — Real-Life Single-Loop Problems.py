#  Q62. Daily Expense Analyzer
days = int(input("Number of days: "))
total = 0
highest = 0
lowest = 0
for i in range(days):
    expense = int(input("Expense for day " + str(i + 1) + ": "))
    total = total + expense
    if i == 0:
        highest = expense
        lowest = expense
    else:
        if expense > highest:
            highest = expense
        if expense < lowest:
            lowest = expense
print("Total:", total)
print("Highest:", highest)
print("Lowest:", lowest)


#  Q63. Student Marks Analyzer
subjects = int(input("Number of subjects: "))
total = 0
highest = 0
lowest = 0
for i in range(subjects):
    marks = int(input("Marks for subject " + str(i + 1) + ": "))
    total = total + marks
    if i == 0:
        highest = marks
        lowest = marks
    else:
        if marks > highest:
            highest = marks
        if marks < lowest:
            lowest = marks
print("Total:", total)
print("Average:", total / subjects)
print("Highest:", highest)
print("Lowest:", lowest)


#  Q64. Attendance Analyzer
days = int(input("Number of working days: "))
present = 0
absent = 0
for i in range(days):
    status = input("Day " + str(i + 1) + " (P/A): ")
    if status == "P":
        present = present + 1
    elif status == "A":
        absent = absent + 1
print("Present:", present)
print("Absent:", absent)
print("Attendance: " + str(round(present / days * 100, 2)) + "%")


#  Q65. Electricity Usage Analyzer
days = int(input("Number of days: "))
total = 0
above = 0
for i in range(days):
    units = int(input("Units on day " + str(i + 1) + ": "))
    total = total + units
    if units > 10:
        above = above + 1
print("Total Units:", total)
print("Days Above 10:", above)


# Q66. Shopping Bill Analyzer
products = int(input("Number of products: "))
total = 0
above = 0
for i in range(products):
    price = int(input("Price of product " + str(i + 1) + ": "))
    total = total + price
    if price > 1000:
        above = above + 1
print("Total Bill:", total)
print("Products Above 1000:", above)


#  Q67. Login Attempt Analyzer
attempts = int(input("Number of attempts: "))
success = 0
failed = 0
for i in range(attempts):
    result = input("Attempt " + str(i + 1) + " (success/failed): ")
    if result == "success":
        success = success + 1
    elif result == "failed":
        failed = failed + 1
print("Successful:", success)
print("Failed:", failed)
print("Success Rate: " + str(round(success / attempts * 100, 2)) + "%")
