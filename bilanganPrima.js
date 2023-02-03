//Logikanya kan "bilangan prima cuma bisa dibagi bilangan 1 dan bilangan itu sendiri dimana hasilnya 0"
//berarti kan ada dua pembagi,klo pembaginya ada dua bisa dikatakan bilangan prima (1,10)
//buat make sure bilangan yang kita inputkan itu hanya punya dua pembagi
//lakuin looping buat bilangan tersebut untuk dibagi bilangan yang kurang dari dan sama dengan bilangan itu sendiri.
// berarti kan da tiga variabel yg di pake : nilai input, nilai acuan pembagi = 0,dan nilai utk loopingnya dimulai dari 1 sampai bilangan yg diinput itu sndiri.
//

const masukkanNilai = (10) //variable input angka
{
  let hasilBagi = 0;
  for(let idx=1; idx <= masukkanNilai; idx++){  
    if(masukkanNilai%idx == 0){
      hasilBagi++
    }
  }
  if(hasilBagi == 2){
    console.log(masukkanNilai + " adalah bilangan prima") //nilai output
  }else{
    console.log(masukkanNilai + " bukanlah bilangan prima") // nilai output
  }
}

 
 
