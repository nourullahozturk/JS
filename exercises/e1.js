// e1.js
// Calculating the area of a circle given a radius by user.

/*
  Talimatlar

  Kullanıcıdan yarıçap bilgisi al.
  Dairenin alanını hesapla.
  Sonucu kullanıcıya göster.
*/

// Google for Unicode character codes
// örn. U+00B2 --> kare sembolünün kodu. U+ dan sonraki kısmı al.
// \u{} süslü parantez içerisine yerleştir \u{00B2}
// her türlü karakter, emoji, sembol için bir Unicode kodu vardır.

r = Number(prompt("Enter a radius"))
area = Math.PI * r ** 2;
// ters slash \ line continuation karakteridir.
// uzun satırları bölmemizi sağlar.
console.log(`Area of the circle with radius ${r}cm is \
${area.toFixed(2)}cm\u{00b2}`);
