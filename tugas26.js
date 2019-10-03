var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
var hasil ="";
for (var i = 0; i < angka.length; i++) {
  hasil = isFinite(angka[i])
  if (hasil==true) {
    console.log("Angka",angka[i],"Not infinity")
  }
}
