const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['januari', 'februari', 'maret', 'april', 
                    'mei', 'Juni', 'Juli', 'Agustus', 'September', 
                    'Oktober', 'November', ' Desember']
        if(!error) {
            callback(new Error('Sorry Data Not Found'), [])
        }
    }, 4000)
}