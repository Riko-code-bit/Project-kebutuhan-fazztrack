function cariData(nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAwal >= nilaiAkhir) {
      console.log("Error: nilaiAwal harus lebih kecil dari nilaiAkhir");
      return;
    }
  
    if (dataArray.length <= 5) {
      console.log('Jumlah angka dalam dataArray harus lebih dari 5'
        );
      return;
    }
  
    let hasilPencarian = [];
  
    for (let i = 0; i < dataArray.length; i++) {
      let data = dataArray[i];
      if (data > nilaiAwal && data < nilaiAkhir) {
        hasilPencarian.push(data);
      }
    }
  
    if (hasilPencarian.length === 0) {
      console.log("Nilai tidak ada yang ditemukan");
      return;
    }
  
    hasilPencarian.sort(function(a, b) {
      return a - b;
    });
  
    console.log("Data yang ditemukan: " + hasilPencarian.join(", "));
  }
  
  // contoh penggunaan
  let dataArray = [8, 5, 12, 3, 17, 10, 9, 6, 14];
  cariData(5, 17 , [2, 25, 4, 1, 30, 18])
  