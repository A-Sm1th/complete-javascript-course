let markMass1 = 78;
let markHeight1 = 169;

let johnMass1 = 92;
let johnHeight1 = 195;

let markMass2 = 95;
let markHeight2 = 188;

let johnMass2 = 85;
let johnHeight2 = 176;

let bmiCalc = (height, mass) => {
    return mass / height ** 2;
};

console.log("has Mark a higher BMI?");
const markHigherBMI1 = bmiCalc(markHeight1,markMass1) > bmiCalc(johnHeight1,johnMass1);
const markHigherBMI2 = bmiCalc(markHeight2,markMass2) > bmiCalc(johnHeight2,johnMass2);

console.log("In the test data 1? " + markHigherBMI1);
console.log("In the test data 2? " + markHigherBMI2);