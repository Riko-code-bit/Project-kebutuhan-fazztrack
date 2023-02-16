const cekRangeJamKerja = (time) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
        const range = ['7.00','8.00','9.00','10.00','11.00','12.00','13.00','14.00','15.00']
        let cekRange = range.find((item) => {
            return item === time

        })
        if (cekRange) {
            resolve('hari ini jam kerja')
        } else { 
        reject(new Error('bukan jam kerja,silahkan beristirahat'));

        }
    }, 200);

  }) 
    }

cekRangeJamKerja('9.00')
.then((result) => {
    console.log(result)
})
.catch((error) => {
    console.log(error.message)
});
