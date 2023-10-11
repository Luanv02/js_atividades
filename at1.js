operador = prompt('Escolha o operador desejado:\nSoma: +\nSubtração: -\nMultiplicação: *\nDivisão: /')
if(operador === '+' || operador === '-' || operador === '*' || operador === '/') {
    opConfirm = true
} else {
    opConfirm = false
}
while(opConfirm === false) {
    alert('Operador inválido, tente novamente.')
    operador = prompt('Escolha o operador desejado:\nSoma: +\nSubtração: -\nMultiplicação: *\nDivisão: /')
    if(operador === '+' || operador === '-' || operador === '*' || operador === '/') {
        opConfirm = true
    } else {
        opConfirm = false
    }
}
valor1 = Number(prompt('Digite o primeiro valor: '))
while(isNaN(valor1)) {
    alert('Valor inválido, tente novamente.')
    valor1 = Number(prompt('Digite o primeiro valor: '))
}
valor2 = Number(prompt('Digite o segundo valor: '))
while(isNaN(valor2)) {
    alert('Valor inválido, tente novamente.')
    valor2 = Number(prompt('Digite o segundo valor: '))
}
if(operador === '+') {
    resultado = valor1 + valor2
    alert('O resultado da soma foi: '+resultado)
} else if(operador === '-') {
    resultado = valor1 - valor2
    alert('O resultado da subtração foi :'+resultado)
} else if(operador === '*') {
    resultado = valor1 * valor2
    alert('O resltado da multiplicação foi: '+resultado)
} else if(operador === '/') {
    resultado = valor1 / valor2
    resto = valor1 % valor2
    if(resto === 0) {
        alert('O resultado da sua divisão foi: '+resultado)
    } else{
        parseInt(resultado)
        alert(`O resultado da sua divisão foi: ${resultado}\nE o resto da divisão foi: ${resto}`)
    }
}