function somaValoresNumericos(numero1: number, numero2: number, callback: (numero: number) => number): number {
  let resultado = numero1 + numero2;
  return callback(resultado);
}

function aoQuadrado(numero: number): number {
  return numero * numero;
}

function dividirPorEleMesmo(numero: number): number {
  return numero / numero;
}

console.log(somaValoresNumericos(1, 3, aoQuadrado));
console.log(somaValoresNumericos(1, 3, dividirPorEleMesmo));