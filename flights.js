///////////////////////////////////////
// String Methods Practice
 
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
 

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25\
+_Arrival;bru0943384722;fao93766109;11:45\
+_Delayed_Arrival;hel7439299980;fao93766109;12:05\
+_Departure;fao93766109;lis2323639855;12:30";

const flightsArr = flights.split("+");

for (const flight of flightsArr) {
    const [type, from, to, time] = flight.split(";")
    const pType = type.replaceAll("_", " ").trim();
    const pFrom = from.slice(0, 3).toUpperCase();
    // pTo
    // pTime
    // output stringini oluştur
    // bazı stringlerin (Delayed ile başlayan) başına 
    // 🔴 koymak için ternary operatör kullanın.
    // ayrıca stringi oluştururken template literal ``
    // kullanmanız işinizi kolaylaştıracaktır
}
