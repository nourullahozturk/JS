//////////////////////////////////////////
// DERS 1
// 17.10.2024


// dosya kaydetme kısayolu: ctrl + s 
console.log("hello world");
console.log(40 + 23 - 43 * 12);

// Değerler(Values) ve Değişkenler(Variables)
let firstName = "Tuğba";

// satır kopyalama:
// alt + shift + down arrow  
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

// yorum satırına alma: ctrl + ö
// let new = 321;
// let let = 12;

// geri al: ctrl + z

// Variable naming conventions
let nurullah_tugba; // snake_case
let nurullahTugba;  // camelCase
// Not: Tutarlı olunmalı. Ya hep camelCase ya hep snake_case 

// boolean türü
let javascriptIsFun = true;
console.log(typeof javascriptIsFun);
// string türü
console.log(typeof firstName);
// undefined türü
console.log(nurullahTugba);
console.log(typeof nurullahTugba);
console.log(typeof null);

// Değişken değeri değiştirme
// daha önceden tanımlamış olduğumuz değişkene basitçe
// yeni bir değer atıyoruz. değişken değeri değiştirilebilir
// olması için let veya var keywordu ile tanımlanmış olmalı.
javascriptIsFun = "YES";
console.log(javascriptIsFun);

// Sabit tanımlama
const birthYear = 1991;
// birthYear = 1992;    // bu hata verir.

// good practice:
// degerin degiseceginden emin degilsen
// her zaman const kullan.

// Yeni değişken tanımlarken let/const kullan.
// böyle tanımlarsan global objenin bir değişkeni olur.
// Buglara sebebiyet verebilir...
lastName = "Ozturk";
console.log(lastName);

// Basic Operators

const now = 2024;
const ageNurullah = now - 1998;
const ageTugba = now - 1995;
console.log(ageNurullah, ageTugba);

console.log(ageNurullah * 2, ageNurullah / 10, 2 ** 3);

// Assignment Operators
let x = 10 + 5;

// x = x + 10;
x += 10;

// x = x * 4;
x *= 4;

// x = x + 1;
x++;

// x = x - 1;
x--;

console.log(x);

// Comparison Operators
console.log(ageNurullah > ageTugba);
console.log(ageNurullah < ageTugba);
console.log(ageNurullah >= 26);
console.log(ageNurullah <= 26);

// Operator Precedence
console.log(now - 1998 > now - 1995);
const averageAge = (ageNurullah + ageTugba) / 2;
console.log(averageAge);

// Exercise 1
// BMI = Kütle / (Boy ** 2)
// TEST DATA 1: Ahmet 54 kg ve 1.76m boyunda.
// TEST DATA 2: Feyza 60 kg ve 1.69m boyunda.

let massNurullah = 54;
let massTugba = 60;

let heightNurullah = 1.76;
let heightTugba = 1.69;

let bmiNurullah = massNurullah / heightNurullah ** 2;
let bmiTugba = massTugba / heightTugba ** 2;

console.log(bmiNurullah);
console.log(bmiTugba);

// Değişken isimlendirirken
// Böyle değil:
// boy1
// boy2
// Daha açıklayıcı olunmalı. Tavsiye edilen:
// boyNurullah
// boyTugba