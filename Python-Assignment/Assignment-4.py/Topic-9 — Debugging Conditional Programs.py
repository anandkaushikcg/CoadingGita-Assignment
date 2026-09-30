# ---------------- Q69. Debug the Condition ----------------
# Bug: input() returns a string, so "age >= 18" raises a TypeError.
# Fix: convert the input to an integer with int().
age = int(input("Q69 (age): "))

if age >= 18:
    print("Eligible")
else:
    print("Not Eligible")


# ---------------- Q70. Debug the Nested Condition ----------------
# Bug: the inner if-elif has no else, so marks from 40 to 74 print nothing.
# Fix: add an else inside the nested block to print "Pass".
marks = int(input("Q70 (marks): "))

if marks >= 40:
    if marks >= 90:
        print("A")
    elif marks >= 75:
        print("B")
    else:
        print("Pass")
else:
    print("Fail")