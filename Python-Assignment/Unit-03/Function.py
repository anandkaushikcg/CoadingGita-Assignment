def display_welcome():
    print("================================")
    print("   Welcome to Python Programming")
    print("       Let's learn Functions!")
    print("================================")
display_welcome()   

def display_student_card(name, age, course):
    print(f"+--------------------------------+")
    print(f"|         STUDENT CARD           |")
    print(f"+--------------------------------+")
    print(f"| Name   :{name:<23}|") 
    print(f"| Age    :{age:<23}|") 
    print(f"| Course :{course:<23}|") 
    print(f"+--------------------------------+")
display_student_card("Rahul", 18, "B.Tech")
display_student_card("Priya", 19, "BCA")
display_student_card("Aman", 20, "B.Sc")


def calculate_square(number):
    print("Square:", number ** 2)


def calculate_cube(number):
    print("Cube:", number ** 3)


def calculate_double(number):
    print("Double:", number * 2)



for n in (2, 4, 5):
    calculate_square(n)
    calculate_cube(n)
    calculate_double(n)
    print()

def calculate_simple_interest(principal, rate, time):
    print("Principal:",principal)
    print("Rate:",rate)
    print("Time:",time)
    SI = principal*time*rate/100
    print("Simple Interest:",SI)
    total = principal+SI
    print("Total Amount:",total)

calculate_simple_interest(5000,5,2)
calculate_simple_interest(10000,7,3)


def check_even_odd(number):
    if number%2==0:
        print(f"{number} is even number")
    else:
        print(f"{number} is odd number")

check_even_odd(12)
check_even_odd(7)   

# Q6
def find_largest(number_1, number_2):
    if number_1>number_2:
        return number_1
    else:
        return number_2

result1 = find_largest(25, 40)
print("Largest number:", result1)

result2 = find_largest(63, 13)
print("Largest number:", result2)

# Q7
def celsius_to_fahrenheit(celsius):
    F = (9/5)*celsius + 32
    return F

def fahrenheit_to_celsius(fahrenheit):
    C = (5/9)*(fahrenheit - 32)
    return C

fahrenheit = celsius_to_fahrenheit(0)
print(fahrenheit)

celsius = fahrenheit_to_celsius(98.6)
print(celsius)

fahrenheit = celsius_to_fahrenheit(100)
print(fahrenheit)

celsius = fahrenheit_to_celsius(68)
print(celsius)

# Q8
def calculate_sum_1(a, b):
    print(a + b)


def calculate_sum_2(a, b):
    return a + b

calculate_sum_1(10, 20)
calculate_sum_2(10, 20)
res1 = calculate_sum_1(10, 20)
res2 = calculate_sum_2(10, 20)
print("Result from 1st function:",res1)
print("Result from 2nd function:",res2)

# 2nd function returns a value

# As function does not have a return value so python automatically returns None

# No this is not possible in python the print() does not directly stores any return value.

# Q9
def calculate_result(mark_1, mark_2, mark_3, mark_4, mark_5):
    total = mark_1+mark_2+mark_3+mark_4+mark_5
    avg = total/5
    return total, avg

total, percentage = calculate_result(75, 80, 65, 90, 70)
print("Total marks:", total)
print(f"Average Marks: {percentage}%")

total, percentage = calculate_result(76, 83, 75, 30, 50)
print("Total marks:", total)
print(f"Average Marks: {percentage}%")

# Q10
def rectangle_details(length, breadth):
    area = length*breadth
    perimeter = 2*(length+breadth)
    return area, perimeter

area, perimeter = rectangle_details(10, 5)
print("Area:",area)
print("Perimeter:",perimeter)

area, perimeter = rectangle_details(6, 50)
print("Area:",area)
print("Perimeter:",perimeter)

# Q11
def greet_user(name, message="Welcome to Python!"):
    print("Hello",name+"!")
    print(message)

greet_user("Rahul", "Good Morning!")
greet_user("Aman", message="Keep Learning!")
greet_user("Priya")

# Q12
def calculate_electricity_bill(units, rate=7):
    bill = units*rate
    return bill

bill_1 = calculate_electricity_bill(100)
bill_2 = calculate_electricity_bill(100, 8)
bill_3 = calculate_electricity_bill(rate=6, units=100)

print(bill_1)
print(bill_2)
print(bill_3)

# Q13
def calculate_salary(basic_salary, bonus=2000, deduction=500):
    final_salary = basic_salary + bonus - deduction
    print(final_salary)

calculate_salary(25000)
calculate_salary(25000, 3000)
calculate_salary(25000, 3000, 1000)
calculate_salary(basic_salary=25000, deduction=800, bonus=4000)
calculate_salary(basic_salary=90000,deduction=4200)


# Q14
def count_digits(number):
    import math
    count = 0
    # length = int(math.log10(number)+1)
    # print(length)
    for i in range(0,int(math.log10(number)+1)):
        count+=1
        number//10
    return count

# count_digits(4354)
count = count_digits(34253)
print("Total Digits:",count)

# Q15
def sum_of_digits(number):
    import math
    sum = 0
    for i in range(0,int(math.log10(number)+1)):
        digit = number%10
        sum+=digit
        number//=10
    return sum

result = sum_of_digits(482)
print("Sum of digits:", result)

result = sum_of_digits(799)
print("Sum of digits:", result)

# Q16
def reverse_number(number):
    import math
    reverse = 0
    for i in range(0,int(math.log10(number))+1):
        digit = number%10
        reverse = reverse*10+digit
        number//=10
    return reverse

result = reverse_number(4826)
print("Reversed number:", result)

result = reverse_number(78347843)
print("Reversed number:", result)

# Q17
def is_palindrome(number):
    import math
    original = number
    reverse = 0
    for i in range(0,int(math.log10(number))+1):
        digit = number%10
        reverse = reverse*10+digit
        number//=10
    if original==reverse:
        return True
    else:
        return False
    
result = is_palindrome(121)
print(result)

result = is_palindrome(163478361)
print(result)

result = is_palindrome(12321)
print(result)

# Q18
def is_prime(number):
    multiples = 0
    for i in range(2,number):
        if number%i==0:
            return False
        break
    return True

result = is_prime(17)
print(result)

result = is_prime(2)
print(result)

result = is_prime(33)
print(result)

result = is_prime(34)
print(result)

# Q19
def display_primes(start, end):
    primes=""
    total = 0
    for i in range(start,end+1):
        for j in range(2,i):
            if i%j==0:
                break
        else:
            primes+=str(i)+" "
            total+=1
    print("Prime numbers:",primes)
    print("Total prime numbers:",total)

display_primes(10, 30)

display_primes(20,25)

# Q20
def display_student_report(name, mark_1, mark_2, mark_3):
    total=mark_1+mark_2+mark_3
    avg=total/3
    if avg>=40:
        result = "PASS"
    else:
        result = "FAIL"
    print(f"==============================\n        STUDENT REPORT        \n==============================")
    print(f"Name       : {name}\nSubject 1  : {mark_1}\nSubject 2  : {mark_2}\nSubject 3  : {mark_3}\n------------------------------")
    print(f"Total      : {total} / 300\nPercentage : {avg:.2f}%\nResult     : {result}\n==============================")

display_student_report("Rahul", 75, 80, 65)
display_student_report("Priya", 84, 34, 54)
