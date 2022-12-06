// let x = "";
// x = "Oi";
// console.log(x)

// JavaScript interpreta linha por linha
// Se o código da linha 2 estivesse na linha 4, não teríamos mensagem no
//console 

// DECLARAÇÃO DE FUNÇÃO

// 1) declara a função
                        //string
// function imprimeTexto(texto) {
//     console.log(texto)
//}

// 2) executa a função (1 ou + vezes)

// imprimeTexto("Chamando a função por aqui")
// imprimeTexto("E imprime tanto o texto de cima quanto esse")


// Três formas de escrever funções

// function soma(){
//     const resultado = 2 + 2; // a variável é criada porém n é solicitado o retorno da mesma para fora do bloco
// }
// soma()
// console.log(soma())
// Vai trazer o resultado undefined

// function soma() {
//     return 2 + 2;
// }

// console.log(soma()) //4


// ------------------- Teste de função -----------------

function imprimeTexto(texto) {
    console.log(texto)
}

imprimeTexto(soma());

function soma() {
    //outros códigos
    //vários console.log()
    return 2 + 2;
}

// Primeiro é entendido o valor da function pelo imprimeTexto, pegando pelo return, em seguida esse valor do
//imprimeTexto é encapsulado em "texto", por exemplo, o qual o console taca o valor no terminal por estarmos
//puxando ele. Então se o valor no console.log fosse diferente que na 1ª function, o resultado ñ aparecia.

