// Working with Strings

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
}
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

// Exercise
// Jonas
const passenger = "jOnAS";
const pCorrect = passenger[0].toUpperCase() +
    passenger.toLowerCase().slice(1)
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


