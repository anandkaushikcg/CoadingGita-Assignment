# Q1. Positive Number

integer=int(input("Enter number:"))
if integer >0:
    print("Positive Number")

# Q2. Voting Eligibility Check

age=int(input("Enter Age:"))
if age >=18:
    print("Eligible to vote")

 # Q3. Temperature Warning

temp=int(input("Enter Temperature:"))
if temp >40:
    print("High Temperature")


# Q4. Divisible by 5

div=int(input("Enter Number:"))
if div %5==0:
    print("Divisible by 5")

# Q5. Free Delivery

amount=int(input("Order Amount:"))
if amount >=1000:
    print("Free Delivery")


# Q6. Character Check

character=(input("Write Character:"))
if character =="A":
  print("You entered A")

#   Q7. Password Length Check

password=(input("Enter your Password:"))
if len(password) >=8:
    print("Strong Length")

# Q8. Number of Digits

digit=int(input("Enter your Number:"))
if digit >=100<=999:
    print("Three Digit Number")