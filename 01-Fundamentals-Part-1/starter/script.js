const markMass1 = 78;
const markHeight1 = 169;

const johnMass1 = 92;
const johnHeight1 = 195;

const markMass2 = 95;
const markHeight2 = 188;

const johnMass2 = 85;
const johnHeight2 = 176;

let bmiCalc = (height, mass) => {
    return mass / height ** 2;
};

console.log("has Mark a higher BMI?");
const markHigherBMI1 = bmiCalc(markHeight1,markMass1) > bmiCalc(johnHeight1,johnMass1);
const markHigherBMI2 = bmiCalc(markHeight2,markMass2) > bmiCalc(johnHeight2,johnMass2);

console.log(`In the test data 1? ${markHigherBMI1}`);
console.log(`In the test data 2? ${markHigherBMI2}`);

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

const dolphins1 = [96,108,89];
const koalas1 = [88,91,110];
const dolphins2 = [97,112,101];
const koalas2 = [109,95,123];
const dolphins3 = [97,112,101];
const koalas3 = [109,95,106];
let avgs = [];
const avg = (array) => array.reduce((a,b) => a+b) / array.length;
[dolphins1,koalas1,dolphins2,koalas2,dolphins3,koalas3].forEach((arr) => avgs.push(avg(arr).toFixed(2)));
const winSorting = (dolphins,koalas) => {
    if (dolphins > koalas && dolphins >= 100) {
        return "the Dolphins."
    } else if (koalas > dolphins && koalas >= 100) { 
        return "the Koalas."
    } else if (dolphins < 100 && koalas < 100){
        return "none of them. Neither of them reached 100 on average."
    } else if (dolphins > koalas && dolphins < 100) {
        return "the Koalas."
    } else if (koalas > dolphins && koalas < 100) {
        return "the Dolphins."
    } else if (dolphins === koalas && dolphins < 100){
        return "the Koalas."
    } else if (dolphins === koalas && koalas < 100){
        return "the Dolphins."
    } else {
        return "the Koalas as well as the Dolphins. Draw!"
    }
}

console.log(`
    The winner of the 1st competition are ${winSorting(avgs[0],avgs[1])} Dolphins average: ${avgs[0]}, Koalas average: ${avgs[1]}
    The winner of the 2nd competition are ${winSorting(avgs[2],avgs[3])} Dolphins average: ${avgs[2]}, Koalas average: ${avgs[3]}
    The winner of the 3rd competition are ${winSorting(avgs[4],avgs[5])} Dolphins average: ${avgs[4]}, Koalas average: ${avgs[5]}
`)