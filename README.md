# KWEZI'S ODIN CalculatorApp

This is a calculator application used for basic arithmetic such as addition,subtraction,
muliplication and division of numbers.

# CREATION
1. This calculator was written in Hyper-Text Markup Language,CSS and JavaScript.
2. It comprises of multiple functions and event:
    1. We have addition,subtraction, multiplication and division.
    2. there is an operate function that calls the operators based on their value assigned
        to perform their respective calculation.
    3. We have a numbers function for appending the assigned values to the input section of the   calculator
    4. There is also an operator function that assigns the numbers their positions such as the first number and second number of the equation.
    5. We also have an equals function that produces the final result when the calculation is executed.

# STRUGGLES
1. Logic errors when it came to writting the operator button call function,equals button call function and numbers button call function.
2. Performing chained calculations such as '1x3x3'.
3. Allowing previous result to be used as a new calculation.
4. Managing calculator state using variables.
5. Functioning of AC button to clear the past information.

# FIX AND LESSONS LEARNED
1. I managed to fix the chained calculation errors by calling the operate() function whenever
    an operator  already exists. The result of that calculation is then assigned to fnumber, allowing it to become the first number of the next calculation when another operator is entered.

2. I did the same thing but for the equals event listener. Whenever equals is clicked the result   is produced and it is assigned to fnumber so it can be used if another operator is clicked.justCalculated is set to true.If a new number is clicked immediately,the numbers event listener checks justCalculated,clears the old calculation, and the new number becomes the first number of a new calculation.