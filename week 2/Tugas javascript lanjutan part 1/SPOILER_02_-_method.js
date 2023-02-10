// object => variabel yang berisikan pasangan key dan value
// value bisa berisikan tipe data apapun (ex: function)
// ketika sebuah fungsi menjadi value dari object, maka dia disebut method
// untuk mengakses variabel/key lain didalam object, kita menggunakan this

// class Car {
//   constructor(name, topSpeed, price) {
//     this.name = name;
//     this.topSpeed = topSpeed;
//     this.price = price;
//   }
//   getInstallment(months) {
//     const installmentPerMonth = this.price / months;
//     return installmentPerMonth;
//   }
// }

// const bugatti = new Car("BUGATTI BOLIDE", 310, 4.3e6);
// const bugattiPricePerMonth = bugatti.getInstallment(16);
// console.log(bugattiPricePerMonth);
this.model = "TUATARO"
this.brand = "SSC"

const car = {
  brand: "BUGATTI",
  model: "BOLIDE",
  topSpeed: 310,
  price: 4.3e6, // 4.3 x 10^6
  getInstallment(months) {
    // deklarasi
    // cicilan = harga / bulan
    const installmentPerMonth = this.price / months;
    return installmentPerMonth;
  },
  convertTopSpeedToKmh: function () {
    const topSpeedInKmh = this.topSpeed * 1.6;
    return topSpeedInKmh;
  },
  getFullName: () => {
    const carFullName = this.brand + " " + this.model;
    return carFullName;
  },
};

const pricePerMonth = car.getInstallment(16);
console.log("installment: ", pricePerMonth);
// const tuatara = { ...car, name: "SSC TUATARA", topSpeed: 283, price: 2.4e6 };
// const pricePerMonthTuatara = tuatara.getInstallment(16);
// console.log(pricePerMonthTuatara);
const topSpeedInKmh = car.convertTopSpeedToKmh();
console.log("speed: ", topSpeedInKmh, " kmh");
const carName = car.getFullName();
console.log("name: ", carName);
