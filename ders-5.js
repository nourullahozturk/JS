//////////////////////////////////////////
// DERS 5
// 14.11.2024

// The JavaScript for of statement loops through the values of an
// iterable object. It lets you loop over iterable data structures
// such as Arrays, Strings, Maps, NodeLists, and more.

for (const x of ["pzt", "sal", "çar"]) {
    console.log(x);
}

const kelime = "merhaba";
for (const harf of kelime) {
    console.log(harf);
}

let total = 0;
const dizi = [10, 20, 30, 40, 50];
for (const number of dizi) {
    total = total + number;
    // total += number;
}
console.log("dizinin ortalaması:", total / dizi.length);

for (let i = 0; i < 10; i++){
    console.log(i);
}

const newPlane = "Airbus A320neo";
console.log(newPlane.startsWith("Airb"));
console.log(newPlane.endsWith("neo"));

// Split and Join
console.log("a+very+nice+string".split("+"));

// Array destructuring (Dizi açma)
// const isim = "John Doe".split(" ");
// const fName = isim[0];
// const lName = isim[1];

const [fName, lName] = "John Doe".split(" "); // ["John", "Doe"]
console.log(fName);
console.log(lName);

const newName = ["Mr.", fName, lName.toUpperCase()].join(" ");
console.log(newName);

// Exercise
// capitalizeName diye bir fonksiyon oluşturun.
// parametre olarak bir isim alsın.
// İsimdeki her bir kelimenin baş harfini büyük yapsın
// diğer harflerini küçük yapsın.

// ["jessica", "ann", "smith", "davis"]
// isim <-- "jessica"
// ismin baş harfini büyük yap
// döngüye devam et (sıradaki isim)

const capitalizeName = function (nameStr) {
    const isimler = nameStr.split(" ");
    const isimlerDizisi = [];

    for (const isim of isimler) {
        // isimlerDizisi.push(isim.toLowerCase().replace(isim[0], isim[0].toUpperCase()));
        isimlerDizisi.push(isim[0].toUpperCase() + isim.toLowerCase().slice(1));
    }
    return isimlerDizisi.join(" ");
}  
console.log(capitalizeName("jessica ann smith davis"));
console.log(capitalizeName("eDremitLi eLekçi eRDİ"));
console.log(capitalizeName("John doe"));
console.log(capitalizeName("JOHN DOE"));

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(20, "+"));
console.log(message.padEnd(20, "*"));

// console.log(`Sıra${"İsim".padStart(10, " ")}`);
// console.log(`${"1".padStart(4)}${"Nurullah".padStart(10, " ")}`);
// console.log(`${"2".padStart(4)}${"Tuğba".padStart(10, " ")}`);
// console.log(`${"3".padStart(4)}${"Büşra".padStart(10, " ")}`);

// Exercise
// maskCreditCard adında bir fonksiyon oluşturun
// parametre olarak kart numarası alsın. Bunun son
// 4 hanesini alın diğer kısımlarını * ile doldurun
// ve bu stringi return edin.

const maskCreditCard = function (number) {
    const str = String(number);
    // const str = number + "";

    const last = str.slice(-4);
    return last.padStart(str.length, "*");
}
console.log(maskCreditCard(67328826));
console.log(maskCreditCard(6732882612346589));
console.log(maskCreditCard("123213214947354321732171142"));

// repeat
const message2 = "Bad weather...All Departures Delayed...";
console.log(message2.repeat(5));

// flights.js