# Question 45 — String Numbers

price = "1200"
quantity = "4"

price = int(price)
quantity = int(quantity)

total_price = price * quantity

print("Price:", price)
print("Quantity:", quantity)
print("Total Price:", total_price)


# Question 46 — Student Result

python_marks = "85"
math_marks = "78"
physics_marks = "91"

python_marks = int(python_marks)
math_marks = int(math_marks)
physics_marks = int(physics_marks)

total_marks = python_marks + math_marks + physics_marks
average_marks = total_marks / 3

print("Total Marks:", total_marks)
print("Average Marks:", average_marks)


# Question 47 — Bill with Tax

price = "1500"
quantity = "2"
tax_rate = "5"

price = float(price)
quantity = int(quantity)
tax_rate = float(tax_rate)

subtotal = price * quantity
tax_amount = (subtotal * tax_rate) / 100
final_bill = subtotal + tax_amount

print("Subtotal:", subtotal)
print("Tax Amount:", tax_amount)
print("Final Bill:", final_bill)


# Question 48 — Discount + GST

price = 2000
discount_percent = 15
gst_percent = 18

discount_amount = (price * discount_percent) / 100
price_after_discount = price - discount_amount

gst_amount = (price_after_discount * gst_percent) / 100
final_price = price_after_discount + gst_amount

print("Discount Amount:", discount_amount)
print("Price After Discount:", price_after_discount)
print("GST Amount:", gst_amount)
print("Final Price:", final_price)


# Question 49 — Debug the Billing Program

price = "500"
quantity = 3

price = int(price)

total = price * quantity

print("Total:", total)


# Question 50 — Debug the Marks Program

marks1 = "80"
marks2 = "75"
marks3 = "90"

marks1 = int(marks1)
marks2 = int(marks2)
marks3 = int(marks3)

total = marks1 + marks2 + marks3

print("Total Marks:", total)