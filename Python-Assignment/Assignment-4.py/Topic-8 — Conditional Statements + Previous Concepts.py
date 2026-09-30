# ---------------- Q58. Student ID Validation ----------------
student_id = input("Q58 (e.g. BTECH-2026-CSE-105): ").strip()
degree, batch, branch, roll = student_id.split("-")

if branch == "CSE":
    print("CSE Student")
else:
    print("Non-CSE Student")


# ---------------- Q59. Email Domain Checker ----------------
email = input("Q59 (email): ").strip()
domain = email.split("@")[1]

if domain == "gmail.com":
    print("Gmail User")
else:
    print("Other Email Provider")


# ---------------- Q60. Username Generator Validation ----------------
words = input("Q60 (first middle last): ").split()
username = words[0].lower() + "." + words[-1].lower()

if "." in username:
    print("Valid Username Format")
else:
    print("Invalid Username Format")


# ---------------- Q61. Number Digit Analyzer ----------------
n = int(input("Q61 (positive integer): "))

if n < 10:
    print("One Digit")
elif n < 100:
    print("Two Digits")
elif n < 1000:
    print("Three Digits")
else:
    print("Four or More Digits")


# ---------------- Q62. Shopping Bill Category ----------------
price, qty = map(int, input("Q62 (price quantity): ").split())
subtotal = price * qty

if subtotal >= 5000:
    disc = 20
elif subtotal >= 2000:
    disc = 10
else:
    disc = 0

final = subtotal - subtotal * disc / 100
print(f"Subtotal: {subtotal}, Discount: {disc}%, Final: {final:.2f}")


# ---------------- Q63. Electricity Bill Category ----------------
units = int(input("Q63 (units consumed): "))

if units <= 100:
    rate = 5
elif units <= 300:
    rate = 7
else:
    rate = 10

print(f"Units: {units}")
print(f"Rate: ₹{rate}")
print(f"Bill: ₹{units * rate}")


# ---------------- Q64. ATM Menu ----------------
balance = 10000
print("1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit")
parts = input("Q64 (choice [amount]): ").split()
atm_choice = int(parts[0])

match atm_choice:
    case 1:
        print(f"Balance: {balance}")
    case 2:
        amount = int(parts[1]) if len(parts) > 1 else int(input("Amount: "))
        balance += amount
        print(f"Deposit Successful, Balance: {balance}")
    case 3:
        amount = int(parts[1]) if len(parts) > 1 else int(input("Amount: "))
        if amount <= balance:
            balance -= amount
            print(f"Withdrawal Successful, Balance: {balance}")
        else:
            print("Insufficient Balance")
    case 4:
        print("Thank You")
    case _:
        print("Invalid Choice")


# ---------------- Q65. Restaurant Ordering System ----------------
item, quantity = map(int, input("Q65 (item_no quantity): ").split())

match item:
    case 1:
        item_price = 250
    case 2:
        item_price = 150
    case 3:
        item_price = 200
    case 4:
        item_price = 120
    case _:
        item_price = 0

if item_price == 0:
    print("Invalid Choice")
else:
    total = item_price * quantity
    if total >= 500:
        discount = total * 0.10
    else:
        discount = 0
    print(f"Total: {total}, Discount: {discount:.2f}, Final: {total - discount:.2f}")


# ---------------- Q66. Exam Result Analyzer ----------------
m1, m2, m3, attendance = map(int, input("Q66 (m1 m2 m3 attendance): ").split())
total_marks = m1 + m2 + m3
average = total_marks / 3

if attendance >= 75:
    if average >= 90:
        print("Outstanding")
    elif average >= 75:
        print("Very Good")
    elif average >= 60:
        print("Good")
    elif average >= 40:
        print("Pass")
    else:
        print("Fail")
else:
    print("Not Eligible")


# ---------------- Q67. Cab Fare Calculator ----------------
dist, ride = input("Q67 (distance ride_type): ").split()
dist = float(dist)

match ride.lower():
    case "normal":
        fare = dist * 15
    case "premium":
        fare = dist * 25
    case _:
        fare = None

if fare is None:
    print("Invalid Ride Type")
else:
    if dist > 20:
        fare = fare * 1.10
    print(f"Fare: {fare:.2f}")


# ---------------- Q68. College Admission System ----------------
score, percentage, category = input("Q68 (score percentage category): ").split()
score = float(score)
percentage = float(percentage)

match category.lower():
    case "general":
        if score >= 80:
            if percentage >= 75:
                print("Admission Eligible")
            else:
                print("Admission Not Eligible")
        else:
            print("Admission Not Eligible")
    case "obc":
        if score >= 70:
            if percentage >= 70:
                print("Admission Eligible")
            else:
                print("Admission Not Eligible")
        else:
            print("Admission Not Eligible")
    case "sc":
        if score >= 60:
            if percentage >= 60:
                print("Admission Eligible")
            else:
                print("Admission Not Eligible")
        else:
            print("Admission Not Eligible")
    case _:
        print("Invalid Category")