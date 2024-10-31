//////////////////////////////////////////
// DERS 3
// 31.10.2024

// switch statement

const day = "friday";

switch (day) {
    case "monday":  // day === "monday"
        console.log("Plan course structure");
        break;    
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday": // day === "wednesday" || day === "thursday"
    case "thursday":
        console.log("write code examples");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "saturday":    
    case "sunday":    
        console.log("Enjoy the weekend!");
        break;
    default:
        console.log("Not a valid day!");
}

if (day === "monday") {
    console.log("Plan course structure");
} else if (day === "tuesday") {
    console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
    console.log("write code examples");
} else if (day === "friday") {
    console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
    console.log("Enjoy the weekend!");
} else {
    console.log("Not a valid day!");
}

// The Conditional (Ternary) Operator

const myAge = 7;

myAge >= 3 ? console.log("I like to eat carrot 🥕") : console.log("I like to drik milk 🍼");

console.log(`I like to ${myAge >= 3 ? "eat carrot 🥕" : "drik milk 🍼"}`);

// Coding Challenge
/*
%15 bahşiş --> fatura 50 ve 300 arasındaysa (50 ve 300 dahil)
%20 bahşiş --> diğer durumlar
TEST DATA: Şu fatura değerleri için dene: 275, 40 ve 430

ipucu: 20/100 = 0.2 bu değerle çarparsanız %20'sini elde edersiniz

1. fatura değerine göre bahşişi hesapla. if/else veya switch/case kullanmayın.
ternary operator kullanın.
2. ekrana fatura değeri, bahşiş ve toplam değeri (fatura + bahşiş) yazdır.
örn: "The bill was 275, the tip was 41.25, and the total value 316.25"
*/

const bill = 430
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and total value ${bill + tip}`);


// Functions
function logger() {
    console.log("My name is John");
}

// calling / running / invoking function
logger();
logger();

// parametreler: apples ve oranges
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);    // argumanlar: 5 ve 0
console.log(appleJuice);

const orangeJuice = fruitProcessor(0, 5);
console.log(orangeJuice);

const num = Number("23")

// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYear) {
    return 2024 - birthYear;
}

const age1 = calcAge1(1998);

// Function expression
const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}

const age2 = calcAge1(1998);

console.log(age1, age2);

// Arrow functions
// const [fonksiyon_ismi] = ([par1, ...]) =>  ...
// const [fonksiyon_ismi] = ([par1, ...]) =>  { ... return ... }
const calcAge3 = birthYear => 2024 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1998, "Nurullah"));


// Functions calling other functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor2(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor2(2, 3));