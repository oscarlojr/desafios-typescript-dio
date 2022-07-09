"use strict";
function soma(numero1, numero2) {
    if (typeof numero1 === 'string' || typeof numero2 === 'string') {
        return numero1.toString() + numero2.toString();
    }
    return numero1 + numero2;
}
console.log(soma('5', 9));
