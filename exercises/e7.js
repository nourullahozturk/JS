// e7.js
// Roll a six-sided die 6,000,000 times.

/*
  Talimatlar

  her bir zar yüzü için bir sayaç oluştur
  6 milyon kere zar at. her seferinde sonuca göre
  ilgili sayacı arttır. Aşağıdaki tabloyu 
  kendi sayac değerlerinizle yazdırın:

  Face    Frequency
     1       100000
     2       100000
     3       100000
     4       100000
     5       100000
     6       100000
*/

let frequency1 = 0;
let frequency2 = 0;
let frequency3 = 0;
let frequency4 = 0;
let frequency5 = 0;
let frequency6 = 0;

console.log(Math.floor(Math.random() * 6) + 1);

for (let i = 0; i < 6000000; i++){
  const face = Math.floor(Math.random() * 6) + 1;
  if (face === 1) frequency1++;
  else if (face === 2) frequency2++;
  else if (face === 3) frequency3++;
  else if (face === 4) frequency4++;
  else if (face === 5) frequency5++;
  else if (face === 6) frequency6++;
}

console.log(`Face${"Frequency".padStart(13)}`);
console.log(`${"1".padStart(4)}${String(frequency1).padStart(13)}`);
console.log(`${"2".padStart(4)}${String(frequency2).padStart(13)}`);
console.log(`${"3".padStart(4)}${String(frequency3).padStart(13)}`);
console.log(`${"4".padStart(4)}${String(frequency4).padStart(13)}`);
console.log(`${"5".padStart(4)}${String(frequency5).padStart(13)}`);
console.log(`${"6".padStart(4)}${String(frequency6).padStart(13)}`);