// e2.js
// Comparing integers using if statements and comparison operatos.

/*
  Talimatlar
  
  kullanıcıdan iki sayı al. değişkenlerde tut
  eğer sayı1 sayı2 ile eşit ise "sayı1, sayı2 ile eşittir" yazdır
  eğer sayı1 sayı2 ile eşit değilse "sayı1, sayı2 ile eşit değildir" yazdır
  eğer sayı1 sayı2 den küçük ise "sayı1, sayı2 den küçüktür" yazdır
  eğer sayı1 sayı2 den büyük ise "sayı1, sayı2 den büyüktür" yazdır
  eğer sayı1 sayı2 den küçük veya eşit ise "sayı1, sayı2 den küçük veya eşittir" yazdır
  eğer sayı1 sayı2 den büyük veya eşit ise "sayı1, sayı2 den büyük veya eşittir" yazdır
*/

number1 = Number(prompt("Enter the first number"));
number2 = Number(prompt("Enter the second number"));

if (number1 === number2)
  console.log(`${number1} and ${number2} are equal`);
if (number1 !== number2)
  console.log(`${number1} and ${number2} are not equal`);
if (number1 > number2)
  console.log(`${number1} is greater than ${number2}`);
if (number1 < number2)
  console.log(`${number1} is smaller than ${number2}`);
if (number1 >= number2)
  console.log(`${number1} is greater than or equal to ${number2}`);
if (number1 <= number2)
  console.log(`${number1} is smaller than or equal to ${number2}`);