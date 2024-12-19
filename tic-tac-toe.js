// Tic-Tac-Toe Oyunu
// Kullanıcılar sırayla hamle yaparlar(oyun tahtasına X veya O yerleştirirler).
// bir sırada X X X veya O O O yapan kazanır. Bu sıra yatay dikey ve çapraz olabilir.

/*
Talimatlar:

Öncelikle bir oyun tahtası oluşturmamız gerekiyor. Oyun tahtasında 9
tane değer olacak. Her bir hane için "X" veya "O" veya " " değeri olabilir.
Bu veriyi bir JavaScript Objesi ile temsil edebilirsiniz. {1: "X", 2: " ",...} gibi
Oyun tahtasının ilk değerlerini " " yapmalısınız.

Daha sonra bir döngü içerisinde;

1. TTT Oyun tahtasını ekrana yazdır. Örnek:
    "X|O|   1 2 3
      | |X  4 5 6
    O| |O  7 8 9"

2. Kullanıcıdan 1-9 arasında bir girdi al. Hatalı girdi olursa tekrar
girdi iste.

3. Tabloyu güncelle (yani JavaScript Objesini güncelle).

4. Oyun bitti mi kontrol et:
    1. Kazanan var mı?
    2. Beraberlik durumu var mı?

5. Oyun bittiyse çıkış yap. Bitmediyse döngü başa dönsün.
*/
