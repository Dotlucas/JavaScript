// parâmetros de função

// function soma(primeiroParâmetro, segundoParâmetro) {
//     return primeiroParâmetro + segundoParâmetro;
// }

// console.log(valoresParaPrimeiroParâmetro + valoresParaSegundoParâmetro)


// Para fazer a soma de quaisquer números:

// function somaNumeros(num1, num2) {
//     return num1 + num2;
// }

// console.log(somaNumeros(234, 22))
// console.log(somaNumeros(13, -33))
// console.log(somaNumeros(212, -21))

// parâmetros x argumentos

// ordem dos parâmetros

//function nomeIdade(nome, idade) {
//    return `Meu nome é ${nome} e minha idade é ${idade} anos`
//}

//console.log(nomeIdade("Lucas", 23))


function soma(num1, num2) {
    return num1 + num2;
}

function multiplica(num1 = 1, num2 = 1) {
    return num1 * num2;
}

console.log(multiplica(soma(4,3)))
