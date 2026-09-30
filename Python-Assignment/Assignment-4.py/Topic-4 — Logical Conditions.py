# Q29. College Admission Eligibility
marks = int(input("Marks"))
attendance = int(input("Attendance:"))

if marks >= 60 and attendance >= 75:
    print("Eligible")
else:
    print("Not Eligible")


# Q30. Scholarship Eligibility
marks = int(input("Marks:"))
income = int(input("Income:"))

if marks >= 85 or income < 300000:
    print("Scholarship Available")
else:
    print("No Scholarship")


# Q31. Weekend Check
day = input("Day")

if day == "Saturday" or day == "Sunday":
    print("Weekend")
else:
    print("Weekday")


# Q32. Online Exam Access
username = input("Username:")
password = input("Password:")

if username == "student" and password == "python123":
    print("Access Granted")
else:
    print("Access Denied")


# Q33. Delivery Availability
city = input("City:")

if city == "Ahmedabad" or city == "Gandhinagar":
    print("Delivery Available")
else:
    print("Delivery Unavailable")


# Q34. Number Range Check
num = int(input("NNumber:"))

if num >= 10 and num <= 50:
    print("Inside Range")
else:
    print("Outside Range")


# Q35. Secure Transaction
amount = int(input("Amount:"))
otp = input("OTP:")

if amount <= 50000 and otp == "1234":
    print("Transaction Approved")
else:
    print("Transaction Declined")