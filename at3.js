class Banco{
    constructor(conta,saldo,tipoConta,agencia){
        this.conta = conta;
        this.saldo = saldo;
        this.tipoConta = tipoConta;
        this.agencia = agencia;
    }
    numConta() {
        console.log(`O número da sua conta é: ${this.conta}-${this.agencia}`)
    }
    buscarSaldo(){
        console.log(`O seu saldo é de: R$${this.saldo}`)
    }
    deposito(){
        this.saldo += 300
        console.log(`O seu saldo atualizado com o depósito é de: R$${this.saldo}`)
    }
    saque(){
        this.saldo -= 100
        console.log(`O seu saldo atualizado com o saque é de: R$${this.saldo}`)
    }
}

const infConta = new Banco(393.38,500,'Conta Corrente',13)

console.log(infConta)
infConta.numConta()
infConta.buscarSaldo()
infConta.deposito()
infConta.saque()