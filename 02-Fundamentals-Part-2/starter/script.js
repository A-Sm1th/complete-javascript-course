"use strict";

// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

const dolphins1 = [44, 23, 71];
const koalas1 = [65, 54, 49];
const dolphins2 = [85, 54, 41];
const koalas2 = [23, 34, 27];

const calcAverage = (array) => array.reduce((a, b) => a + b) / array.length;
const avgDolphins1 = calcAverage(dolphins1);
const avgKoalas1 = calcAverage(koalas1);
const avgDolphins2 = calcAverage(dolphins2);
const avgKoalas2 = calcAverage(koalas2);

const checkWinner = function (avg1, avg2) {
  avg1 >= 2 * avg2
    ? avg1 > avg2
      ? console.log(`Dolphins wins (${avg1} vs. ${avg2}).`)
      : console.log(`Koalas wins (${avg2} vs. ${avg1}). `)
    : console.log(`No teams wins!`);
};

checkWinner(avgDolphins1, avgKoalas1);
checkWinner(avgDolphins2, avgKoalas2);

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

const totals = [];
const bills = [125, 555, 44];
const tipCalc = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
bills.forEach((bill) => {
  totals.push(bill + tipCalc(bill));
});
console.log(totals);

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    return (this.weight / this.height ** 2).toFixed(1);
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.weight / this.height ** 2).toFixed(1);
  },
};

console.log(
  `${mark.firstName} ${mark.lastName}'s BMI (${mark.calcBMI()}) is ${
    mark.calcBMI() > john.calcBMI() ? "higher" : "lower"
  } than ${john.firstName} ${john.lastName}'s (${john.calcBMI()})!`
);

// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips2 = [];
let totals2 = [];

for (let bill2 of bills2) {
  const fBill2 = parseFloat(bill2);
  const tip2 = Number(tipCalc(fBill2).toFixed(2));
  const total2 = Number((tip2 + fBill2).toFixed(2));
  tips2.push(tip2);
  totals2.push(total2);
  console.log(`Bill: $${bill2}; Tip: $${tip2}; Total: $${total2}`);
}
const avgTotals = calcAverage(totals2);

console.log(`Average total: $${avgTotals}.`);
