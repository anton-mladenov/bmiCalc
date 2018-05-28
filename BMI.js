/* let age = prompt("What is your age?");
let gender = prompt("What is your gender? (M or F possible only)");
let height = prompt("What is your height? (in cm)");
let weight = prompt("What is your weight? (in kg)");
let exerciseLevel = prompt("What is your exercise level? (1 - 5)"); */


let age = 43;
let gender = "m";
let height = 180;
let weight = 78;
let exerciseLevel = 3;

let heightInMetres = height / 100;
let bodyWeightSquared = Math.pow(heightInMetres, 2);
let BMI = weight / bodyWeightSquared;

let idealBMI = 22.5;
let idealWeight = idealBMI * bodyWeightSquared;

// let bmr = (10 * weight) + (6.25 * height) - (5 * age); // gives the same result as the line below
let bmr = 10 * weight + 6.25 * height - 5 * age;

if (gender === "m" || gender === "M") {
  bmr += 5;
};

if (gender === "f" || gender === "F") {
  bmr -= 161;
};

let caloriesPerDay;

switch (exerciseLevel) {
  case 1:
    caloriesPerDay = bmr * 1.2;
    break;
  case 2:
    caloriesPerDay = bmr * 1.375;
    break;
  case 3:
    caloriesPerDay = bmr * 1.55;
    break;
  case 4:
    caloriesPerDay = bmr * 1.725;
    break;
  case 5:
    caloriesPerDay = bmr * 1.9;
    break;
  default:
    caloriesPerDay = bmr * 1.2;
    break;
};

let dietCaloriesPerDay;
let dietWeeks;

if (weight > idealWeight) {
  dietCaloriesPerDay = caloriesPerDay - 500;
  dietWeeks = (weight - idealWeight) / 0.5;
} else {
  dietCaloriesPerDay = caloriesPerDay + 500;
  dietWeeks = (idealWeight - weight) / 0.5;
};

console.log(idealWeight);
console.log(caloriesPerDay);
console.log(dietCaloriesPerDay + " for " + dietWeeks)
