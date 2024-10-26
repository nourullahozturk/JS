//////////////////////////////////////////
// DERS 2
// 24.10.2024

// Strings and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1998;
const year = 2024;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job;
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(jonasNew);

const ornekStr = `Merhaba
Dünya
...`;
console.log(ornekStr);


// Taking Decisions: if else statements
const age = 20;

if (age >= 18) {
    console.log("Sarah can start driving license 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 😭`);
}


/*
TEST DATA:
Mark, 78 kg ve 1.69 m uzunluğunda
John, 92 kg ve 1.95 m uzunluğunda

- Kilo ve uzunlukları değişkenlerde tut
- BMI'leri şu formülle hesapla ve değişkende tut: BMI = ağırlık / uzunluk ** 2
- Konsola kimin BMI'i daha yüksek yazdır:
- "Mark's BMI is higher than John's!" veya "John's BMI is higher than Mark's!"
- Template literal kullanarak BMI değerlerini strinlerin içine dahil et:
- "Mark's BMI (28.3) is higher than John's! (23.9)"
*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's! (${BMIJohn})`);
} else if (BMIMark < BMIJohn) {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's! (${BMIMark})`);
} else {
    console.log("John's BMI and Mark's! BMI are equal!");
}

// Type Conversion and Type Coercion

// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);

let n = "1" + 1;
n = n - 1;
console.log(n);


// Truthy and Falsy values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean("Merhaba"));
console.log(Boolean(56));

if (0){
    console.log("yes");
}

// Equality Operators: == vs ===
// good practice: === kullan.
const newAge = "18";

if (newAge == 18) console.log("You just became an adult (loose)");

if (newAge === 18) console.log("You just became an adult (strict)");


// Logical Operators
const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}
