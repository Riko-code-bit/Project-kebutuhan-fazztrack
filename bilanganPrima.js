var masukkanNilai = (angka) => 
{
  let pembaginya = 0;
  for(let a=1; a <= angka; a++){
    if(angka%a == 0){
      pembaginya++
    }
  }
  if(pembaginya == 2){
    console.log(" adalah bilangan prima")
  }else{
    console.log("bukanlah prima")
  }
}

//input angka disini
masukkanNilai(79); 
