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


