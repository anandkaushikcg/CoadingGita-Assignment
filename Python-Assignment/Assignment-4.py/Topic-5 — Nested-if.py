# Topic 5 — Nested if
# Q36 to Q43


# Q36. Login with Role
username = "admin"
password = "admin123"

if username == "admin":
    if password == "admin123":
        print("Login Successful")
    else:
        print("Wrong Password")
else:
    print("Invalid Username")


# Q37. Driving License
age = 20
test_status = "pass"

if age >= 18:
    if test_status == "pass":
        print("License Approved")
    else:
        print("Test Not Passed")
else:
    print("Age Not Eligible")


# Q38. ATM Withdrawal
balance = 10000
withdrawal = 5000

if withdrawal <= balance:
    if withdrawal % 100 == 0:
        print("Withdrawal Successful")
    else:
        print("Enter Amount in Multiples of 100")
else:
    print("Insufficient Balance")


# Q39. Exam Result with Attendance
attendance = 80
marks = 65

if attendance >= 75:
    if marks >= 40:
        print("Pass")
    else:
        print("Fail")
else:
    print("Not Eligible Due to Attendance")


# Q40. Bank Account Verification
account_type = "savings"
balance = 5000

if account_type == "savings":
    if balance >= 1000:
        print("Minimum Balance Maintained")
    else:
        print("Minimum Balance Not Maintained")
else:
    print("Unsupported Account")


# Q41. Online Shopping Eligibility
amount = 1000
payment_method = "card"

if amount >= 500:
    if payment_method == "card":
        print("Card Payment Accepted")
    elif payment_method == "upi":
        print("UPI Payment Accepted")
    else:
        print("Unsupported Payment Method")
else:
    print("Minimum Order Amount Not Reached")


# Q42. Hostel Room Allocation
year = 3
attendance = 80

if year == 2 or year == 3 or year == 4:
    if attendance >= 75:
        print("Room Eligible")
    else:
        print("Attendance Too Low")
else:
    print("Not Eligible by Year")


# Q43. Internet Plan Upgrade
current_plan = "basic"
usage = 150

if current_plan == "basic":
    if usage > 100:
        print("Recommend Upgrade")
    else:
        print("Basic Plan Is Sufficient")
else:
    print("Already on Higher Plan")