const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                    return item === day
            })
            if(cek){
                resolve(cek)
            }
            else {
                reject(new Error('Hari ini bukan haari kerja'))
            }
        }, 3000)
})
}