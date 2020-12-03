import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PanelClass from "./PanelClass.js";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  detailHeader: {
    marginBottom: "-0.5em",
  }
}));

export default function Prompts() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    console.log("hello");
  };

  // Creates a panel class and uses its setter methods to set all the field data
  const panel1 = new PanelClass("panel1", classes, expanded, handleChange);
  panel1.setHeading("Week 1:");
  panel1.setSecondaryHeading("Looking at the chaos program");
  panel1.setDescriptionDetails(<p>
    The chaos program from Section 1.6 shows how the results of an equation can be entered back into the equation
    produce seemingly chaotic results each time. You can run the program to the right and try it out.
  </p>);
  panel1.setChallengeDetails(<p>
    In programming, variables are used to store information. In the chaos program, the variable x is used to
    store our changing number. Variables can be named almost anything! Try modifying the chaos program so that
    the variable x is named something else. Pick a name and rename every spot x is at with the new name.
  </p>);


  const panel2 = new PanelClass("panel2", classes, expanded, handleChange);
  panel2.setHeading("Week 2:");
  panel2.setSecondaryHeading("Declaring instance variables");
  panel2.setDescriptionDetails(<p>
    This incomplete program wants to preform some basic math, but some variables have not been initialized yet.
    Line 2 creates a variable num1 and assigns it a value of 50. Lines 8-18 will perform a math operation with two
    variables and will store the result in total. After that it will print the total.
  </p>);
  panel2.setChallengeDetails(<p>
    In Python, a variable can be declared or have it's value changed by starting with the variable name, and then
    assigning it a value. Variables can have any name that does not start with a number, does not include spaces,
    or is not a reserved key word. Create four more variables on lines 3-6 and assign them values of your choice.
    Then on lines 8, 11, 14, and 17, add each variable you made to the right of the math operation sign.
  </p>);


  const panel3 = new PanelClass("panel3", classes, expanded, handleChange);
  panel3.setHeading("Week 3:");
  panel3.setSecondaryHeading("Coding input and output");
  panel3.setDescriptionDetails(<p>
    The goal of this program is to ask the user to enter two values, add them together, and then display the result.
    Line 2 prints a statement telling the user it can add two numbers.
  </p>);
  panel3.setChallengeDetails(<p>
    Line 3 and 4 have hardcoded values that need to be changed. Create two eval(input("")) statements to ask the user
    to input a value for num1 and num2. Also, the print() statement in line 4 is empty! Add something inside it so
    that it displays the result of adding the variables.
  </p>);


  const panel4 = new PanelClass("panel4", classes, expanded, handleChange);
  panel4.setHeading("Week 4:");
  panel4.setSecondaryHeading("Calculating the area of a trapezoid");
  panel4.setDescriptionDetails(<p>
    This handy program will be able to calculate the area of a trapezoid. The formula to calculate the the area
    of a trapezoid is area = (a + b) / 2 * h.  Where a and b are the two bases and h is the height.
  </p>);
  panel4.setChallengeDetails(<p>
    Complete lines 3-5 so that it asks the user for all of the required information. Next, fill out the formula
    using the created variables so that the program can calculate the area. Program code will follow the order of
    operations rules in standard math. Then, make sure the program will inform the user of the result.
  </p>);


  const panel5 = new PanelClass("panel5", classes, expanded, handleChange);
  panel5.setHeading("Week 5:");
  panel5.setSecondaryHeading("Casting variable data types");
  panel5.setDescriptionDetails(<p>
    A car taxi company is creating a program to calculate the total cost of their car rides. The program should
    ask the user for the length of the ride in miles, the time the ride took in minutes, and the amount of
    passengers the ride had. Then it will calculate the cost for each passenger. Line 7 calculates the cost of the
    ride based on a certain formula, then casts the end result to a floating point number. Line 8 includes a
    formatted print statement that will display some text followed by the stored cost variable value.
  </p>);
  panel5.setChallengeDetails(<p>
    Variables in python can store many different types of data. The integer data type is used to store values that
    should only be whole numbers. The floating point data type should be used to store values that can have a
    decimal value. Ask the user to input all the required data, but cast that data to their respective data types.
    In this scenario length and time should be floating point numbers and passengers should be an integer.
    Replace eval() with either int() or float() to cast the user input into the specific type. Then create a
    variable called cost and store the result from this cost formula into it: c = (0.2 * t + 0.5 * d) / p, where t
    is time, distance, and p is passengers. Make sure to cast the result to a float before it is stored.
  </p>);


  const panel6 = new PanelClass("panel6", classes, expanded, handleChange);
  panel6.setHeading("Week 6:");
  panel6.setSecondaryHeading("Calculating volume of a cylinder");
  panel6.setDescriptionDetails(<p>
    This program should be able to calculate the volume of a cylinder. A user will input all of the required data and
    the program should be able to calculate the volume and display it to the user in cm cubed.
  </p>);
  panel6.setChallengeDetails(<p>
    Create variables to store the user's input for radius and height. Then create a variable and store the calculated
    volume in it. The formula for the area of a cylinder is: V = 3.14159 * radius * radius * height. Use print
    formatting to display the results to the user like this example output: "Volume = 61.8475 cm cubed"
  </p>);


  // The following weeks still needs to be filled out
  const panel7 = new PanelClass("panel7", classes, expanded, handleChange);
  panel7.setHeading("Week 7:");
  panel7.setSecondaryHeading("Strings and Arrays");
  panel7.setDescriptionDetails(<p>
    A string is a type of variable used for storing a set of characters. Similarly an array can be used to store
    a set of several variables. For example the words "hello world" can be stored into a variable as a string. A set
    of integers can be stored in an array containing integers.
  </p>);
  panel7.setChallengeDetails(<p>
    Line 2 creates an array with two strings stored in it. Line three appends another string to the end of the array.
    Line 5 will print the first string in the array. Append the words "teaches" and "python" to the array and print
    all of the words in the array.
  </p>);


  const panel9 = new PanelClass("panel9", classes, expanded, handleChange);
  panel9.setHeading("Week 9:");
  panel9.setSecondaryHeading("Loops");
  panel9.setDescriptionDetails(<p>
    There are many tasks that are repetitive, such as printing variables from an array. Instead of copying and pasting
    code a loop can be used for these tasks. There are many different types of loops. A while() loop can be used to
    loop until a certain condition is met. A for loop can be used to loop through a set of items. For example, an
    array can be looped through using for(word in words). Word is a variable used in the for loop to represent each
    word in the words array.
  </p>);
  panel9.setChallengeDetails(<p>
    Line 2 creates an array of integers. Line 7 prints the total of a sum divided by the array length. Use a for loop
    to loop through each number in the array and sum the total in the sum variable. Then notice how the average will
    be printed from the print statement.
  </p>);


  const panel10 = new PanelClass("panel10", classes, expanded, handleChange);
  panel10.setHeading("Week 10:");
  panel10.setSecondaryHeading("Functions");
  panel10.setDescriptionDetails(<p>
    In programming, a function can be used to do a certain set of tasks. For example, in each program you have created
    so far a main() function has been used. In programming languages, function main is used to run the core code of
    a program. A function can have a set of variables inputted into the function as well. Any variables used in a
    function will be deleted when the function has ended. A return statement can be used in a function to return a
    variable as output.
  </p>);
  panel10.setChallengeDetails(<p>
    Lines 9 through 16 is a function that calculates the distance between 2 points using the distance formula. Line 9
    specifies that the function should take 4 different variables. Lines 13 and 14 use the math library to use the
    power and square root math functions. Line 16 returns the distance of the 2 points. Use the calculateDistance
    function in main to print the distance of three different sets of points.
  </p>);


  const panel11 = new PanelClass("panel11", classes, expanded, handleChange);
  panel11.setHeading("Week 11:");
  panel11.setSecondaryHeading("Average Function");
  panel11.setDescriptionDetails(<p>
    Functions can take arrays as inputs as well. The goal of this program is to create a function that can average an
    array of numbers and return the average. The numbers variable in line 4 is an array of numbers.
  </p>);
  panel11.setChallengeDetails(<p>
    Fill out the average function to perform its specified task. Then, create two arrays with a set of numbers in them
    within main. Then call the average function twice with each of the inputs being the arrays you created. Either
    store the outputs in variables and print them after or encase the function call within print to immediately print
    the returned value.
  </p>);


  const panel12 = new PanelClass("panel12", classes, expanded, handleChange);
  panel12.setHeading("Week 12:");
  panel12.setSecondaryHeading("Conditional Logic");
  panel12.setDescriptionDetails(<p>
    Conditional logic refers to making decisions based on a certain condition. When programing different decisions
    can be made using "if" "else" statements. A condition can be set and the program can either execute the code in the
    "if" block if the specific condition is met, or execute the code in the "else" block if the condition is not
    met. This allows programs to make varied decisions.
  </p>);
  panel12.setChallengeDetails(<p>
    Write a program that allows a user to enter a sentence. The program should count the amount of lowercase and
    uppercase letters are in the sentence and print the results. The program needs to loop through each character in
    the string and use conditional logic to determine if its lowercase or uppercase.  You can use the .isUpper or
    .isLower built in functions to determine this.
  </p>);


  const panel13 = new PanelClass("panel13", classes, expanded, handleChange);
  panel13.setHeading("Week 13:");
  panel13.setSecondaryHeading("Multi-function Calculator");
  panel13.setDescriptionDetails(<p>
    If statements can also have more than two different conditional judgements. Using elif between the if and else
    keywords an unlimited multitude of conditional selection cases can be used.
  </p>);
  panel13.setChallengeDetails(<p>
    Write a program that asks the user to enter either "+", "-", "*", or "/" to perform a certain math operation.
    Then ask the user to enter two different numbers. Use multi-conditional if, elif, else case to determine which
    operation to preform with these numbers and output the result to the user.
  </p>);


  const panel14 = new PanelClass("panel14", classes, expanded, handleChange);
  panel14.setHeading("Week 14:");
  panel14.setSecondaryHeading("Reading Files");
  panel14.setDescriptionDetails(<p>
    Python has the ability to open or create files. The open("filename", "permissions") built in function can be used
    to open or create a file and store it in a variable. Then several functions can be called from this variable to
    preform actions such as writing or reading data from the file. For example, variableName.readline() can be used
    to read a line in the file.
  </p>);
  panel14.setChallengeDetails(<p>
    Finish writing a program that asks a user for a file name. The program should then open the file and print all
    the contents of it for the user to see. The "r" in line 3 states that the file will be opened in read only mode.
    It is important to use .close() to close a file after you are done with it.
  </p>);


  const panel15 = new PanelClass("panel15", classes, expanded, handleChange);
  panel15.setHeading("Week 15:");
  panel15.setSecondaryHeading("Writing Files");
  panel15.setDescriptionDetails(<p>
    Writing to a file is similar to reading from a file. To overwrite a file "w" can be used and "a" can be used to
    append contents to a file. Functions line .write("data") can be used to write the data to the file.
  </p>);
  panel15.setChallengeDetails(<p>
    Create a program that will create a file and have the user write lines to it. Have the program continuously loop
    and during each loop prompt the user to enter data for a line. Use variableName.write("content") to write data
    to the file. Once the user enters "..." the infinite loop should break and the program should save the file
    and exit.
  </p>);

  // Returns the HTML for every single panel
  // Invokes PanelClass.returnHTML() for each PanelClass object to return its respective HTML
  return (
    <div className={classes.root}>
      {panel1.returnHTML()}
      {panel2.returnHTML()}
      {panel3.returnHTML()}
      {panel4.returnHTML()}
      {panel5.returnHTML()}
      {panel6.returnHTML()}
      {panel7.returnHTML()}
      {panel9.returnHTML()}
      {panel10.returnHTML()}
      {panel11.returnHTML()}
      {panel12.returnHTML()}
      {panel13.returnHTML()}
      {panel14.returnHTML()}
      {panel15.returnHTML()}
    </div>
  )
}
