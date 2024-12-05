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

const WIDTH = 10;
const HEIGHT = 4;
// " " veya "#"
[
    [" ", "#", " ", " "],
    [" ", "#", "#", " "],
    [" ", " ", " ", "#"],
    [" ", "#", " ", " "],
]

const prevCells = [];
for (let i = 0; i < HEIGHT; i++) {
    const row = []; 
    for (let j = 0; j < WIDTH; j++) {
        row.push(Math.floor(Math.random() * 2) === 0 ? " " : "#")
    }
    prevCells.push(row);
}

// while (true) { 
    const currentCells = [];
    
    // Copy previous cells
    for (let i = 0; i < prevCells.length; i++) {
        currentCells[i] = prevCells[i].slice();
    }
    console.log(currentCells);
    // Print current cells
    for (let i = 0; i < currentCells.length; i++) {
        for (let j = 0; j < currentCells[i].length; j++) {
            process.stdout.write(`${currentCells[i][j]} `)
        }
        console.log();
    }

    // Calculate the next step's cells based on the current cells
    for (let i = 0; i < HEIGHT; i++){
        for (let j = 0; j < WIDTH; j++) {
            numNeighbours = 0;
            if (currentCells[i-1][j-1] === "#") numNeighbours++;
            if (currentCells[i-1][j] === "#") numNeighbours++;
            
        }
    }

// }

