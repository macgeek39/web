/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.


//Store Mark's and John's mass and height in variables
let markMass = 95 ;
let markHeigh = 1.88;

let johnMass = 85;
let johnHeight = 1.76;

//Calculate both their BMIs using the formula (you can even implement both versions)

let markBMI = markMass / markHeigh ** 2;
let johnBMI = johnMass / (johnHeight * johnHeight);

if (markBMI > johnBMI)
{
    console.log("Mark has a higher BMI than John")
} 
else 
{
    console.log("John has a higher BMI than Mark");
}

*/

/* Write your code below. Good luck! 🙂 *///Store Mark's and John's mass and height in variables
let massMark = 95 ;
let heightMark = 1.88;

let massJohn = 85;
let heightJohn = 1.76;

//Calculate both their BMIs using the formula (you can even implement both versions)

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);
