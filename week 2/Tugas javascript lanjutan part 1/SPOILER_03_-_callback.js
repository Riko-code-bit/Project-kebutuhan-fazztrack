// callback => pemanggilan fungsi tidak ketika digunakan
// method => fungsi didalam object
// callback => fungsi didalam parameter fungsi

function cetakKalimat(kalimat) {
  // print ke console
  const result = kalimat + "!";
  console.log(result);
  // return;
}
function sayHello(name, callback) {
  // merakit suatu kalimat selamat datang
  const welcomeSentence = "Welcome " + name + " to QA minicamp";
  // jalankan callback
  callback(welcomeSentence);
}

function showGreeting(greeting) {
  const result = '"' + greeting + '"';
  console.log(result);
}

// sayHello("Riko", cetakKalimat);
// sayHello("Dina", showGreeting);

const cashier = (price, money, onSuccess, onFailure) => {
  if (price > money) {
    onFailure();
    return;
  }
  onSuccess(money, price);
};

const uangTidakCukup = function () {
  console.log("Uang tidak cukup");
};

function pembelianBerhasil(uang, harga) {
  const kembalian = uang - harga;
  console.log("Pembelian berhasil");
  console.log("Kembalian: ", kembalian);
}

cashier(1e4, 5e3, pembelianBerhasil, uangTidakCukup);
