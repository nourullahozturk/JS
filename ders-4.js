//////////////////////////////////////////
// DERS 4
// 7.11.2024

// Introduction to Arrays
const fruit1 = "Mango";
const fruit2 = "Cherry";
const fruit3 = "Apple";

const fruits = ["Mango", "Cherry", "Apple", "Avokado"];
console.log(fruits)
console.log(fruits.length)

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
}
const ages = [
    calculateAge(years[0]),
    calculateAge(years[1]),
    calculateAge(years[years.length-1]),
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


