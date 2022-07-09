type input = number | string;
function soma(numero1: input, numero2: input){
  if(typeof numero1 === 'string' || typeof numero2 === 'string'){
    return numero1.toString() + numero2.toString();
  }
  return numero1 + numero2;
}

console.log(soma('5',9));