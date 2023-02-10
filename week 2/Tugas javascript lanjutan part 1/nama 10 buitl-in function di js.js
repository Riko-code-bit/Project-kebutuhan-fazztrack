// tugas buat built-in function di javascript

// no.1 ChartArt = berfungsi melihat karakter dalam sebuah string
//syntax = (variable.charAt())
//sifatnya = non-mutasi
var namaSaya = "riko hadi Pratama"
console.log(namaSaya.charAt(5));//output : h



// No.2 alert berfungsi utk menampilkam jendela dialog 
// sifatnya = non-mutasi
let sub = "Hay there!!"
alert(sub);
//outputnya = dialog sub di halaman html yang dibuat

// NO.3 topUpperCasse berfungsi menampilkan data string ke huruf besar semua
//syntax = "(variable.toUperCase())"
//sifatnya mutasi
//output
let nama = "Riko Hadi Pratama";
console.log(nama.toUpperCase()); //  RIKO HADI PRATAMA



// No.4 loLowerCase berfungsi mengkonversi variable string ke huruf kecil
//sifatnya = mutasi
//syntax = (variable.toLowerCase())
//output 
const rumah = 'Graha Rafflesia';
console.log(rumah.toLowerCase()); // graha rafflesia 


//No .5 includes berfungsi elakukan pencarian (peka huruf besar/kecil) 
//apakah string berisi atau mengandung karakter yang ditentukan.
//sytax =  (variable.includes(''));
//sifat = mutasi
const string = 'Riko Hadi Pratama';
//output
console.log(string.includes('Riko')); // true
console.log(string.includes('Hadi', 5)); // true
console.log(string.includes('Pratama', 17)); // false 

//No .6 startsWith berfungsi mengecek apakah string diawali dengan karakter yang ditentukan dalam parameter
// syntax = (variable.startsWith(''));
// sifat non-mutasi

const hay = 'riko';
//ouput
console.log(hay.startsWith('ri')); // true
console.log(hay.startsWith('Ri')); // false
console.log(hay.startsWith('ko', 2)); // true
console.log(hay.startsWith('ko', 3)); // false

// No.7 endsWith berfungsi pengecekan Apakah String Diakhiri dengan Karakter Tertentu
//syntax = (variable.endsWith(''));
//sifat = non-mutasi
const otw = 'saya on the way kesana';
//output
console.log(otw.endsWith('na')); // true
console.log(otw.endsWith('the', 8)); // false :: 8 - on()the diisi oleh spasi


// No.8 indexOf() mencari indeks dari karakter tertentu di dalam string. 
// Jika string yang dicari lebih dari satu karakter, yang dikembalikan adalah indeks karakter pertama.
//syntax = (variable.indexOf(''));
//sifat = non-mutasi
const berjalan = 'saya berjalan di trotoar';
//output
console.log(berjalan.indexOf('a')); // 1 :: s(a)ya ...
console.log(berjalan.indexOf('ja')); // 8 :: ... berjalan


// No.9 trim berfungsi Hapus Spasi di Awal dan Akhir String termasuk tab
//Sintaks =  "trim();"
//sifat = mutasi

const str = '     riko     ';
//output
console.log(str.trim()); // "riko"


//No.10 toPrecision berfungsi memformat angka agar memiliki panjang yang ditentukan.
//syntax = " toPrecision(jumlahDigit); "

//output
(2).toPrecision(3); // 2.00
(2.2543).toPrecision(3); // 2.25
(2.26).toPrecision(2); // 2.3
(2.23).toPrecision(1); // 2



