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