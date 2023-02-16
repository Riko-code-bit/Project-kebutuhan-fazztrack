const janjian = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true;
    if (success) {
      resolve({
        msg: "Berhasil",
        data: [1, 2, 3, 4, 5],
      });
    } else {
      reject(new Error("Gagal"));
    }
  }, 1000);
});

const onResolve = (result) => {
  console.log(result.data);
};

// janjian
//   //   .then((result) => {
//   //     console.log(result);
//   //   })
//   .then(onResolve)
//   .catch(function (error) {
//     console.log(error.message);
//   });

// =================== ASYNC/AWAIT + TRY-CATCH ==================

async function janjianFunc() {
  try {
    // akan menjalankan promise janjian
    const result = await janjian;
    // kemudian print hasilnya
    console.log(result);
  } catch (error) {
    console.log(error.message);
  } finally { // optional
    console.log("finally done");
  }
}

janjianFunc();
