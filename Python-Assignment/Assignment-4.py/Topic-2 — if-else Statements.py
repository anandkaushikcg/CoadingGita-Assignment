# Q9. Even or Odd

integer=int(input("Enter your integer:"))

if integer %2==0:
    print("Even")
else:
 print("odd")   

# Q10. Pass or Fail

marks=int(input("Enter your Marks:"))
if marks >=40:
   print("Pass")
else:
   print("Fail")


#  Q11. Adult or Minor     

age=int(input("Enter your Age:"))

if age >=18:
   print("Adult")
else:
   print("Minor")

#   Q12. Number Sign

number=int(input("Enter Number:"))
if number >0:
   print("Positive")
else:
   print("Non-Positive")

    #   Q13. Divisible by 3

integer=int(input("Enter number:"))
if integer %3==0:
   print("Divisible by 3")
else:
   print("Not Divisible by 3")

    #   Q14. Login Password    

password=input("Enter password:")
if password=="python123":
   print("Login successful")
else:
   print("Invalid Password") 

#   Q15. Username Check 


username=input("Enter your Username:")
if username=="Admin":
   print("Welcome Admin")
else:
   print("Invalid username")

#  Q16. Greater Between Two Numbers  

a = int(input())
b = int(input())

if a == b:
    print("Both are Equal")
else:
    if a > b:
        print(a)
    else:
        print(b)


# Q17. Hot or Comfortable

temperature=int(input("Enter temperature:"))

if temperature >30:
   print("Hot")
else:
   print("Comfortable")


# Q18. Shopping Discount Eligibility

discount=int(input("Enter Amount:"))
if discount >=5000:
   print("Discount Available")
else:
   print("No Discount")


