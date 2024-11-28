// e6.js
// Using nested control statements to analyze examination results.

/*
  Talimatlar

  kullanıcıdan 10 tane sınav sonucu al.
  (kullanıcının 1 veya 2 girdiği varsayılacak) eğer 1 girerse
  geçti, 2 girerse kaldı demek olsun.
  
  kullanıcıdan gelen girdi 1 ise passes sayacını 1 arttır. 
  kullanıcıdan gelen girdi 2 ise failures sayacını 1 arttır. 
  sonuçları yazdır:
  Passed: geçen sayısı
  Failed: kalan sayısı
  eğer geçen kişi sayısı 8'den büyükse "Bonus to Instructor" yazdır.
*/

let passes = 0;
let failures = 0;

for (let i = 0; i < 10; i++) {
  const result = Number(prompt("Enter result (1=pass, 2=fail)"))
  if (result === 1) passes++;
  if (result === 2) failures++;
}

console.log("Passed: ", passes);
console.log("Failed: ", failures);

if (passes > 8) console.log("Bonus to Instructor");
