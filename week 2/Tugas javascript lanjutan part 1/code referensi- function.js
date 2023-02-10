// 3 metode penulisan fungsi
// fungsi akan berhenti jika sudah habis
// fungsi akan berhenti jika bertemu syntax return

// 1. metode deklarasi
// syntax: function namaVar (...input) {implementasi}
function total(num1, num2) {
  const result = num1 + num2;
  // output ada 2 pilihan
  // 1. tampilkan ke console => console.log
  //   console.log("fungsi", result);
  //   return;
  // kode lain
  // 2. dikeluarkan ke code utama untuk digunakan kembali => return output
  return result;
}

// 2. metode ekspresi
// syntax: tipeVar namaVar = function (...input) {implementasi}
const hitungTotalHarga = function (totalPembelian, diskon) {
  const potonganHarga = diskon * totalPembelian;
  const result = totalPembelian - potonganHarga;
  return result;
};

// 3. metode arrow func
// syntax: tipeVar namaVar = (...input) => {implementasi}
const deliveryCost = (distance, services) => {
  let pricePerKm = 0;
  if (services === "JNT") pricePerKm = 4500;
  if (services === "POS") pricePerKm = 5000;
  const cost = distance * pricePerKm;
  return cost;
};

// MAIN CODE
const totalPembelian = 1e5; // 1 x 10^5
const promo = 0.35;
const totalHarga = hitungTotalHarga(totalPembelian, promo);
console.log("subtotal: ", totalHarga);
const jarak = 5;
const ekspedisi = "JNT";
const ongkir = deliveryCost(jarak, ekspedisi);
console.log("ongkir: ", ongkir);
const hasilFungsi = total(totalHarga, ongkir);
console.log("total: ", hasilFungsi);

// const nilai = 91;
// if (nilai > 90) {
//   console.log("A");
// } else if (nilai > 80) {
//   console.log("B");
// }
