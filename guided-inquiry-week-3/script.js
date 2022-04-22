//VERY EASY: Write a function named min that takes two arguments and returns their minimum.

function getMin(num1, num2) {
    return Math.min(num1, num2);
};



/**EASY: Create an array of students holding their last name, first name, and age with 3 students. To
validate, please log a greeting with the first name, last name and age of the 2nd student. The output
should look like "Hello, my name is John Doe and I'm 19 years old."*/

let students = [["Jack", "Sparrow", "18"], ["Emily", "Pierce", "12"], ["Harry", "Potter", "21"]];

console.log(`Hello, my name is ${students[1][0]} ${students[1][1]} and I am ${students[1][2]} years old.`);



/**MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number
and its corresponding month. For example: if the user enters the number 3, then it should return the
month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12). */

const months = ["January", "February", "March", "April", "May", "June", "July", "August", 
"September", "October", "November", "December"];

let userEntry = Number(prompt("Enter a number 1-12"));

if (months[userEntry-1] === undefined) {
    alert("invalid entry, pick a number from 1 to 12");
} else {
    console.log(`${userEntry}: ${months[userEntry-1]}`);
};



/**HARD: Given the information below for Tom and Jerry.
● Tom - height:  9in mass: 8 g
● Jerry - height: 10in mass: 45 g
Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
BMI = mass / height ^2 = mass / (height * height)
Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean
variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the
console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false). */

let tom = {
    name : "Tom",
    height : 9,
    mass : 8
};

let jerry = {
    name : "Jerry",
    height : 10,
    mass : 45
};

function getBMI(mass, height) {
    return mass/(height*height);
};

tom.bmi = getBMI(tom.mass, tom.height);
jerry.bmi = getBMI(jerry.mass, jerry.height);

let check = tom.bmi > jerry.bmi;

console.log(`Is Tom’s BMI higher than Jerry’s? ${check}.`);