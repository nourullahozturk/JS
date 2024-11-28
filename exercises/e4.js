// e4.js
// Find the minimum of three values.

/*
  Talimatlar

  Kullanıcıdan 3 sayı al.
  Bu 3 sayının minimum olanını ekrana yazdır.
*/

try {
  const number1 = Number(prompt("Enter the first number"));
  if (Number.isNaN(number1)) throw "Enter a number";
  const number2 = Number(prompt("Enter the second number"));
  if (Number.isNaN(number2)) throw "Enter a number";
  const number3 = Number(prompt("Enter the third number"));
  if (Number.isNaN(number3)) throw "Enter a number";
} catch (err) {
  alert("Error: " + err)
  // console.error("Error: " + err);
  window.close();
}

let minimum = number1;

if (number2 < minimum) minimum = number2;
if (number3 < minimum) minimum = number3;

console.log("Minimum of the values you entered is " + minimum);