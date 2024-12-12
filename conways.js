/*
10-conways.js
"""Conway's Game of Life"""
İki boyutlu bir tabloda canlı hücrelerin hareketlerini/yaşamlarını
simüle eden bir program yazınız.
tablomuzu oluşturmak için liste listesi kullanın.
"#" canlı hücreleri, " " ise ölü hücreleri temsil etsin.
başlangıçta tabloya rastgele yaşayan veya ölü hücre yerleştirin.
örnek:
[
   ["#", " ", " ", "#", " "]
   ["#", " ", "#", "#", " "]
   [" ", "#", " ", "#", " "]
   ["#", " ", "#", " ", "#"]
   [" ", "#", "#", " ", "#"]
 ]
Daha sonra bir oyun döngüsü içerisinde
önce mevcut tabloyu yazdırın
sonra oyun kurallarına göre yeni tabloyu oluşturun

oyun kuralları:
--> 2 veya 3 tane komşusu olan yaşayan hücreler hayatta kalır.
komşu derken hücrenin etrafındaki(sol-üst, üst, sağ-üst, sağ, sağ-alt, alt, sol-alt, sol)
yaşayan hücreler kastedilmektedir.
örneğin aşağıdaki hücrenin(ortadaki) komşu sayısı 2 dir:
[" ", " ", "#",
" ", "#", " ",
" ", "#", " "]
--> 3 komşusu olan ölü hücreler canlanır. Yukarıdaki tablonun sonraki aşaması:
[" ", " ", " ",
" ", "#", "#",
" ", " ", " "]
--> Diğer hepsi ölür veya ölü kalmaya devam eder.

Hint: Add a 1-second pause to reduce flickering (use time module)
*/

const WIDTH = 60;
const HEIGHT = 20;

// Matematiğe uygun mod işlemi yapacak fonksiyonumuz
const modulo = function(dividend, divisor) {
    const quotient = Math.floor(dividend / divisor);
    remainder = dividend - divisor * quotient
    return remainder;
}

const sleep = function(ms) {
    return new Promise((cb) => setTimeout(cb, ms));
}


const nextCells = [];
for (let x = 0; x < WIDTH; x++) {
    const row = []; 
    for (let y = 0; y < HEIGHT; y++) {
        row.push(Math.floor(Math.random() * 2) === 0 ? " " : "#")
    }
    nextCells.push(row);
}

const game = async function () {
    while (true) { 
        const currentCells = [];
        
        // Copy previous cells
        for (let i = 0; i < nextCells.length; i++) {
            currentCells[i] = nextCells[i].slice();
        }

        // Print current cells
        console.clear();
        for (let y = 0; y < HEIGHT; y++) {
            for (let x = 0; x < WIDTH; x++) {
                process.stdout.write(`${currentCells[x][y]} `)
            }
            console.log();
        }

        // Calculate the next step's cells based on the current cells
        for (let x = 0; x < WIDTH; x++){
            for (let y = 0; y < HEIGHT; y++) {
                // WIDTH = 10 => [0, 9] arasında olmalı
                leftCoord = modulo(x - 1, WIDTH); 
                rightCoord = modulo(x + 1, WIDTH);
                aboveCoord = modulo(y - 1, HEIGHT);
                belowCoord = modulo(y + 1, HEIGHT);

                let numNeighbours = 0;
                // currentCells[-1][-1] // hata
                if (currentCells[leftCoord][aboveCoord] === "#") numNeighbours++;
                if (currentCells[x][aboveCoord] === "#") numNeighbours++;
                if (currentCells[rightCoord][aboveCoord] === "#") numNeighbours++;
                if (currentCells[leftCoord][y] === "#") numNeighbours++;
                if (currentCells[rightCoord][y] === "#") numNeighbours++;
                if (currentCells[leftCoord][belowCoord] === "#") numNeighbours++;
                if (currentCells[x][belowCoord] === "#") numNeighbours++;
                if (currentCells[rightCoord][belowCoord] === "#") numNeighbours++;

                if(currentCells[x][y] === "#" && (numNeighbours === 2 || numNeighbours === 3)) {
                    nextCells[x][y] = "#";
                }
                else if(currentCells[x][y] === " " && numNeighbours === 3){
                    nextCells[x][y] = "#";
                } else {
                    nextCells[x][y] = " ";
                }
            }
        }
        await sleep(500);
    }
}

game();