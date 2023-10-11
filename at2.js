/*função sem parametro*/
function welcome() {
    alert('Calculadora')
}

welcome()

/*função com parametro e retorno*/
function operador(op) {
    op = prompt('Escolha o operador desejado:\n\nSoma: +\nSubtração: -\nDivisão: /\nMultiplicação: *')
if(op === '+' || op === '-' || op === '*' || op === '/'){
    opConfirm = true
} else {
    opConfirm = false
}
while(opConfirm === false){
    alert('Operador inválido, tente novamente.')
    op = prompt('Escolha o operador desejado:\nSoma: +\nSubtração: -\nDivisão: /\nMultiplicação: *')
        if(op === '+' || op === '-' || op === '*' || op === '/'){
        opConfirm = true
        }   else {
        opConfirm = false
            }
}
return op
}

chamarOperador = operador()

/*função arrow com parametro*/
const num1 = (n1) => {
    n1 = Number(prompt('Digite o primeiro número: '))
    while(isNaN(n1)) {
        alert('Número inválido, tente novamente')
        n1 = Number(prompt('Digite o primeiro número: '))
    }
    return (n1)
}

const num2 = (n2) => {
    n2 = Number(prompt('Digite o segundo número: '))
    while(isNaN(n2)) {
        alert('Número inválido, tente novamente')
        n2 = Number(prompt('Digite o segundo número: '))
    }
    return (n2)
}

chamarNum1 = num1()
chamarNum2 = num2()

if(chamarOperador === '+') {
    resultado = chamarNum1 + chamarNum2
    alert(resultado)
} else if (chamarOperador === '-') {
    resultado = chamarNum1 - chamarNum2
    alert(resultado)
} else if(chamarOperador === '*') {
    resultado = chamarNum1 * chamarNum2
    alert(resultado)
} else if (chamarOperador === '/') {
    resultado = chamarNum1 / chamarNum2
    alert(resultado)
}