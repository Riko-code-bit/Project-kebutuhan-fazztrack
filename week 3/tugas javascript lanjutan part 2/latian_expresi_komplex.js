//utk menentukan harga-diskon
const totalHarga = function (totalPembelian, diskon) {
    let potongan = diskon * totalPembelian
    let result = totalPembelian - potongan
    return result;
}
// fungsi utk menghitung ongkir
function totalHargaOngkir (a, b) {
    let hasilAkhir = a+b
    return hasilAkhir;
}

//function utk ongkir ekspedisi dan harga per jarak sekaligus menggnakan function arrow
const cekOngkir = (jarak, pengiriman) => {
    let hargaPerJaraknya;
    if(pengiriman === "jnt") hargaPerJaraknya = 5000
    if(pengiriman === 'pos') hargaPerJaraknya = 10000
    const hasilJarak = jarak * hargaPerJaraknya
    console.log(hasilJarak)
    return hasilJarak;
}


// main code
const hargaBarang = 5e4 // input harga barang 50k
const promo = 0.50; // input diskon 50%
const jarakMain = 6
const service = "pos"
const ongkir = cekOngkir(jarakMain, service) //memanggil cek ongkir dan memasukkan vaarible ke ongkir
console.log('harga sama diskon adalah '+ totalHarga(hargaBarang, promo)) 
const hargaTampung = totalHarga(hargaBarang, promo) //varible utk menampung harga totalharga

console.log('harga akhir '+ totalHargaOngkir(hargaTampung, ongkir))
