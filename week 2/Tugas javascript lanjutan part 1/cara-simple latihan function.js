//CARA SIMPLE YA
//jenis penulisan expresi function
const simpleKubus = function (a, b) {
    var kubusA = a**3;
   var kubusB = b**3;
  
    const total = kubusA + kubusB
    return total ;
}
console.log(simpleKubus(8,3));

//deklarasi function

function pengurangan(a, b) {
    let a =  14
    let b = 10
    
    const result = a-b
    return result;
    console.log(result)


}

//function arrow

const arrow = (a, b) => {
    let result = a*b
    console.log(result);
}

arrow(1,9)

