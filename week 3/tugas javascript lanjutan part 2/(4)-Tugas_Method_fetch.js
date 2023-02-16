fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    const namaUser = data.map(user => user.name);
    console.log(namaUser);
  })
  .catch(error => console.error(error));
