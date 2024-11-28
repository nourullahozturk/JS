//////////////////////////////////////////
// DERS 6
// 28.11.2024

///////////////////////////////////////
// Introduction to Objects
nurullahArray = [
  "Nurullah",
  "Öztürk",
  2024 - 1998,
  "araştırma görevlisi",
  ["Fazıl, Ahmet, Ömer"]
]

const nurullah = {
  firstName: "Nurullah",
  lastName: "Öztürk",
  age: 2024 - 1998,
  job: "araştırma görevlisi",
  cousins: ["Fazıl, Ahmet, Ömer"]
}

// Dot vs. Bracket Notation
console.log(nurullah);

console.log(nurullah.lastName);
console.log(nurullah["lastName"]);

const nameKey = "Name";
console.log(nurullah["first" + nameKey]);
console.log(nurullah["last" + nameKey]);
// console.log(nurullah.("last" + nameKey)); // hata

// Adding new property
nurullah.location = "İstanbul";
nurullah["github"] = "nourullahozturk";
console.log(nurullah);

// Object Methods
const fazil = {
  firstName: "Fazıl",
  lastName: "Şengül",
  birthYear: 1996,
  job: "jewelery clerk",
  cousins: ["Nurullah, Ahmet, Abdussamed"],
  hasDriversLicense: true,

  // calcAge: function () {
  //   return 2024 - this.birthYear;
  // } 

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  // Exercise
  // "Fazıl is a 28-year old jewelery clerk, and he has a driver's license"
  getSummary: function () {
    return `${fazil.firstName} is a ${fazil.calcAge()}-year old
    ${fazil.job}, and he has
    ${fazil.hasDriversLicense ? "a" : "no"} driver's license`
  }

}
console.log(fazil.calcAge());
console.log(fazil.age);
console.log(fazil.age);
console.log(fazil.age);

console.log(fazil.getSummary());

///////////////////////////////////////
// Coding Challenge #1

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / height ** 2;
    return this.bmi;
  }
}

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / height ** 2;
    return this.bmi;
  }
}
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

///////////////////////////////////////
// Iteration: The for Loop

///////////////////////////////////////
// Coding Challenge #2

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

///////////////////////////////////////
// Primitive Types vs Reference types

// JavaScript'te primitive türler şunlardır:
// Number
// String
// Boolean
// Null
// Undefined
// Symbol

// JavaScript'te referans türleri şunlardır:
// Object Literals
// Functions
// Arrays
// Collections
// Dates
// ve diğer türden objeler.

// Primitive türlerin Referans türlerden farkı şudur:
// primitive türdeki değişkenler bir fonksiyona argüman
// olarak verildiğinde, değişkenin değeri fonksiyona verilir.
// değişkenin hafızadaki adresi verilmez.

// Ancak Referans türlerde böyle değildir. Referans türünde
// bir değişken (obje, array, fonksiyon vs.)
// bir fonksiyona verildiğinde aslında fonksiyona bu değişkenin
// adresi verilir. Dolayısıyla, fonksiyonun içerisinde argumana
// yapılan değişiklikler orjinal değişkeni değiştirir.
