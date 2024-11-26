//////////////////////////////////////////
// DERS 4
// 7.11.2024

////////////////////////////////////////////////////////
// Introduction to Arrays
const fruit1 = "Mango";
const fruit2 = "Cherry";
const fruit3 = "Apple";

const fruits = ["Mango", "Cherry", "Apple", "Avokado"];
console.log(fruits);
console.log(fruits.length);

const y = new Array(1991, 2023, 1998, 1071);
console.log(y);

// Dizinin elemanlarına erişmek
console.log(fruits[0]);
console.log(fruits[1]);
// son elemanı elde etmek:
console.log(fruits[fruits.length - 1]);

// Dizi elemanı değiştirme
fruits[0] = "Banana";
console.log(fruits);
console.log();

const john = ["merhaba", 142, fruits];
console.log(john);

// Exercise
const years = [1990, 1998, 2000, 2006, 2018];
// argüman olarak yıl bilgisi alan
// yaş hesaplayıp return eden bir fonksiyon yazin
// bu dizinin 1. 2. ve son elemanını bu fonksiyona verin
// sonucları ayrı ayrı yazdırın
const calculateAge = function (birthYear) {
  return 2024 - birthYear;
};
const ages = [
  calculateAge(years[0]),
  calculateAge(years[1]),
  calculateAge(years[years.length - 1]),
];

// Basic Array Methods
const newFruits = ["Mango", "Cherry", "Apple"];
console.log(newFruits);
// Add elements
newFruits.push("Jay", "merhaba"); // sona ekler
console.log(newFruits);

// Add elements
newFruits.unshift("Kiwi"); // başa ekler
console.log(newFruits);

// Remove elements
newFruits.pop(); // sondan 1 eleman kaldırır
console.log(newFruits);

newFruits.shift(); // baştan 1 eleman kaldırır
console.log(newFruits);

// Herhangi bir elementin indexini öğrenmek
console.log(newFruits.indexOf("Apple"));

// Bir eleman dizinin içerisin(de olup olmadığını öğrenmek
console.log(newFruits.includes("Elma"));
console.log(newFruits.includes("Apple"));

////////////////////////////////////////////////////////
// Working with Strings - Part 1

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log("B370"[2]);

console.log(airline.length);
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));

console.log(airline.slice(4));
console.log(airline.slice(4, 9));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

// Exercise
// koltuk kodunun sonu B veya E ise:
// You got the middle seat 😬
// değilse:
// You got lucky 😎
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  // const s = seat[seat.length-1]
  if (s === "B" || s === "E") console.log("You got the middle seat 😬");
  else console.log("You got lucky 😎");
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

// Exercise
// Jonas
const passenger = "jOnAS";
const pCorrect = passenger[0].toUpperCase() + passenger.toLowerCase().slice(1);
console.log(pCorrect);

// Exercise
// trim()
const email = "hello@jonas.io";
const loginEmail = "Hello@Jonas.Io \n";
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// replacing
const priceGB = "288.97£";
const priceUS = priceGB.replace(".", ",").replace("£", "$");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replaceAll("door", "gate"));

// includes
// startsWith
// endsWith
