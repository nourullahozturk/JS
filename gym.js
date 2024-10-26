/*
İki takım var: Dolphins ve Koalas

- Takımların ortalama skorlarını hesaplayınız.
- Takımların ortalama skorlarını karşılaştırarak kazanan takımı belirleyiniz.
ve konsola yazdırınız.

BONUS 1:
- oyunu kazanmak için minimum 100 ortalama skor şartı olsun
- yani bir takım sadece diğer takımdan fazla ve 100den de fazla skor yapmışsa
kazanır.

BONUS 2:
- Beraberlik durumu için de minimum 100 skor şartı olsun.
- Yani sadece iki takım da aynı skoru yapmış ve skorları 100den büyük olursa
beraberlik olsun.
- Skorlar eşit fakat 100den büyük değilse hiç bir takım kazanamaz.

TEST DATA: Dolphins score 96, 100 ve 89, Koalas score 88, 91, ve 110
TEST DATA BONUS 1: Dolphins score 97, 112 ve 101. Koalas score 109, 95 ve 123
TEST DATA BONUS 2: Dolphins score 97, 112 ve 101. Koalas score 109, 95 ve 106
*/

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1 ve 2
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}