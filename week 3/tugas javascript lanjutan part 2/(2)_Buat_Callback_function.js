//function async "settimeout"
const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['januari', 'februari', 'maret', 'april', 
                    'mei', 'Juni', 'Juli', 'Agustus', 'September', 
                    'Oktober', 'November', ' Desember']
        if(!error) {
            callback(null, month)
        } else {
            callback(new Error('sorry data not found'), [])
        }
    }, 4000)
};

//callback
function showMonth(month) {
    console.log(month);
}


getMonth((error, months) => {
    if (months) {
        months.map(showMonth);
    } else {
      console.log(error)
    }
  });
  