// e5.js
// Class average program for fixed number of grades

/*
  Talimatlar

  Aşağıdaki notlar dizisinin ortalamasını bulunuz.
  notlar dizisini bir döngü ile dönerek notları toplayın.
  notlar toplamını not sayısına bölerek ortalama notu 
  bulun ve yazdırın.
*/

const grades = [98, 76, 71, 87, 83, 90, 57, 79, 82, 94];

let total = 0;
for (const grade of grades) total += grade;
console.log("Average: ", total / grades.length);