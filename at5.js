class Casa {
    constructor(comodo, cor, telhado){
        this.comodo = comodo;
        this.cor = cor;
        this.telhado = telhado;
    }
    infComodo() {
        console.log(`Sua casa têm ${this.comodo} cômodos`)
    }
    infCor() {
        console.log(`Sua casa é ${this.cor}`)
    }
    infTelhado() {
        if(this.telhado === true) {
            console.log('Aqui dentro não molha.')
        } else{
            console.log('Aqui dentro molha.')
        }
    }
}
class Carro {
    constructor(marca,cor, assento) {
    this.marca = marca;
    this.cor = cor;
    this.assento = assento;
    }
    infMarca() {
        console.log(`A marca do seu veículo é: ${this.marca}.`)
    }
    infCor() {
        console.log(`A cor do seu veículo é: ${this.cor}.`)
    }
    infAssento() {
        console.log(`Seu veículo tem: ${this.assento} assentos.`)
    }
}
class Usuario {
    constructor(nome,email,senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
    infNome() {
        console.log(`Nome: ${this.nome}`)
    }
    infemail() {
        if(this.email <= 150) {
            console.log(`Email: ${this.email}`)
        } else {
            console.log(`Email: ${this.email}`)
        }
    }
    infsenha() {
        console.log(`Senha: ${this.senha}`)
    }
}
class End {
    constructor(rua,bairro,num) {
        this.rua = rua;
        this.bairro = bairro;
        this.num = num;
    }
    infRua() {
        console.log(`Rua: ${this.rua}`)
    }
    infBairro() {
        console.log(`Bairror: ${this.bairro}`)
    }
    infNum() {
        console.log(`Número da casa: ${this.num}`)
    }
}
const chamarCarro = new Carro('Toyota', 'Vermelho', 5)
const chamarCasa = new Casa(5,'Branca', true)
const chamarUsuario = new Usuario('Luan Vinícius', 'luanvini1234@gmail.com', 'luan1234')
const chamarEnd = new End('Miguel Lagos', 'Livramento', 116)

console.log(chamarCarro)
chamarCarro.infMarca(),chamarCarro.infCor(),chamarCarro.infAssento()
console.log('\n')
console.log(chamarCasa)
chamarCasa.infComodo(),chamarCasa.infCor(),chamarCasa.infTelhado()
console.log('\n')
console.log(chamarUsuario)
chamarUsuario.infNome(),chamarUsuario.infemail(),chamarUsuario.infsenha()
console.log('\n')
console.log(chamarEnd)
chamarEnd.infRua(),chamarEnd.infBairro(),chamarEnd.infNum()