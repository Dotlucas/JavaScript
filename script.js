// VAR

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area)
// var area;


// LET

// let forma = 'retângulo';
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retângulo') {
//     area = altura * comprimento;
// } else {
//     area = (altura * comprimento) / 2;
// }

// console.log(area)


// CONST


const forma = 'triângulo';
const altura = 5;
const comprimento = 4;
let area; // como vai ter o valor alterado ñ pode ser uti-
//lizado com o tipo constante (const)

if (forma === 'triângulo') {
    area = (altura * comprimento) / 2;
} else {
    area = altura * comprimento;
}
console.log(area)


// tipagem dinâmica
// JavaScript é untyped

let minhaVar = 876;
minhaVar = "texto";
minhaVar = true;