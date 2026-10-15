1.A student’s marks are 78. The passing marks are 40. Check whether the student has scored more than the passing marks.

  let studentMark=78
  let passingMark=40
  let scoreMoreThanPassingMark=studentMark>passingMark
  console.log("Student Passed=>",scoreMoreThanPassingMark)


2. Temperature today is 35°C and yesterday it was 28°C. Check if today is hotter.

   let todayTemperature=35;
   let yesterdayTemperature=28;
   let isTodayHotter=todayTemperature>yesterdayTemperature;
   console.log("Today is hotter=",isTodayHotter);

3. Predict the output:
   console.log(15 > 10); // True
   console.log(10 > 15);// false
   console.log(10 > 10);// False

4. Predict the output:

  console.log("20" > 15);//true
  console.log("5" > "10");//true
  console.log("abc" > 10);//false

5. What is the result of null > 0 and undefined > 0? Explain.
   null>0 = will be false because null is also a zero and zero is not greater than zero.
   undefined>0 = False because undefined is nan and nan is not greater then zero.

 6. A shop has 120 items in stock. A customer wants to buy 85 items. Write a condition using > to check if stock is sufficient.

   let itemsInStock=120;
   let buyItems=85;
   let sufficientStock= itemsInStock>buyItems;
   console.log("Is stock is sufficient=",sufficientStock)   
