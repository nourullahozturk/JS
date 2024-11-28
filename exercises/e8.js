// e8.js
// Simple exception handling example.

// Number(null); // 0
// Number(''); // 0
// Number('    '); // 0
// Number(false); // 0

// parseFloat(null); // NaN
// parseFloat(""); // NaN
// parseFloat("    "); // NaN
// parseFloat(false); // NaN

while(true){
    try {
        const number1 = Number(prompt("Enter numerator: "));
        if (Number.isNaN(number1))
            throw "Numerator must be a number";
        const number2 = Number(prompt("Enter denominator: "));
        if (Number.isNaN(number2) || number2 === 0)
            throw "Denominator must be a non-zero number";
        const result = number1 / number2;
        console.log(result);
    } catch(err) {
        console.error("Error: " + err);
        break;
    }
}