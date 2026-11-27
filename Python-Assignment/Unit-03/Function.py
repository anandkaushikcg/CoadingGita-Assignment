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

Q10
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

