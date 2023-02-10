// varible array
const nama = ["Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
    ];

    // fungsi utk looping membatasi
function searchName(searchAbjad, batas, callback) {
  let results = [];
  for (let i = 0; i < nama.length; i++) {
    if (nama[i].toLowerCase().indexOf(searchAbjad.toLowerCase()) !== -1) {
      results.push(nama[i]);
      if (results.length === batas) {
        break;
      }
    }
  }
  return callback(results);
}

const searchResult = searchName("An", 4, function(results) {
  return results;
});

console.log(searchResult);



