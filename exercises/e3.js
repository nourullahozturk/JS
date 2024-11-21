// e3.js
// Counting vowels of the firstname of a user

/*
  Talimatlar

  Kullanıcıdan bir isim al.
  İsimdeki sesli harfleri say. (döngü kullan)
  sesli harf sayısını ekrana yazdır.
*/

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

firstname = prompt("Enter your firstname")

let vowelCount = 0;
for (let letter of firstname) {
  if (vowels.includes(letter))
    vowelCount++;
}

console.log(`Your name has ${vowelCount} vowels`);