# ---------------- Q44. Greatest of Three Numbers ----------------
a, b, c = map(int, input("Q44 (a b c): ").split())

if a == b == c:
    print("All are Equal")
elif a >= b:
    if a > c:
        if a == b:
            print("A and B are Equal and Greatest")
        else:
            print("A is Greatest")
    elif a == c:
        print("A and C are Equal and Greatest")
    else:
        print("C is Greatest")
else:
    if b > c:
        print("B is Greatest")
    elif b == c:
        print("B and C are Equal and Greatest")
    else:
        print("C is Greatest")


# ---------------- Q45. Student Result with Grade ----------------
marks, attendance = map(int, input("Q45 (marks attendance): ").split())

if attendance >= 75:
    if marks >= 90:
        print("Grade A")
    elif marks >= 75:
        print("Grade B")
    elif marks >= 60:
        print("Grade C")
    elif marks >= 40:
        print("Grade D")
    else:
        print("Grade F")
else:
    print("Not Eligible")


# ---------------- Q46. Employee Bonus ----------------
salary, rating = map(int, input("Q46 (salary rating): ").split())

if salary >= 30000:
    if rating == 5:
        print("Bonus: 20%")
    elif rating == 4:
        print("Bonus: 15%")
    elif rating == 3:
        print("Bonus: 10%")
    else:
        print("Bonus: 5%")
else:
    print("Not Eligible for Bonus")


# ---------------- Q47. Bus Ticket Category ----------------
age, distance = map(int, input("Q47 (age distance): ").split())

if age < 5:
    print("Free")
elif age < 60:
    if distance <= 10:
        print("Regular - Short Distance")
    else:
        print("Regular - Long Distance")
else:
    print("Senior")


# ---------------- Q48. Product Purchase Validation ----------------
stock, status = input("Q48 (stock status): ").split()
stock = int(stock)

if stock > 0:
    if status == "paid":
        print("Order Confirmed")
    elif status == "pending":
        print("Payment Pending")
    else:
        print("Invalid Payment Status")
else:
    print("Out of Stock")


# ---------------- Q49. Travel Ticket Validation ----------------
age, ticket = input("Q49 (age ticket_type): ").split()
age = int(age)

if age < 5:
    print("Free Travel")
elif age < 60:
    if ticket == "AC":
        print("AC Ticket")
    elif ticket == "Sleeper":
        print("Sleeper Ticket")
    else:
        print("Invalid Ticket Type")
else:
    print("Senior Passenger")