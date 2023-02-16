const jamKerja = new Promise ((resolve, reject) => {
    setTimeout(() => {
        let jam = true
        if (jam) {
            resolve('ini adalah jam kerja');
        } else {
            reject(new Error('bukan jam kerja'))
        }
    }, 500);

});


jamKerja
.then((result) => {
console.log(result);
})
.catch((error) => {
console.log(error);
}) ;

