class Account {
    constructor(associado) {
        this.associado = associado
        this.saldo = 0
    }

    depositar(valor) {
        if( valor > 0 ){
            this.saldo += valor
        }else{
            console.log("você não pode depositar ou sacar valores menores ou iguais a zero")
        }
    }

    sacar(valor) {
        if( valor > 0 ){
            if(this.saldo >= valor){
                this.saldo -= valor
            }else{
                console.log("você não pode sacar valores que deixem o seu saldo negativo")
            }
        }else{
            console.log("você não pode depositar ou sacar valores menores ou iguais a zero")
        }
    }
}

class savingAccount {
    constructor(associado) {
        this.associado = associado
        this.saldo = 0
    }

    depositar(valor) {
        if( valor > 0 ){
            this.saldo += valor * 1.05
        }else{
            console.log("você não pode depositar ou sacar valores menores ou iguais a zero")
        }
    }

    sacar(valor) {
        console.log("você não pode sacar em uma savingAccount")
    }
}

//testes Account

var conta_teste = new Account(["jack"])

console.log(conta_teste.saldo)

conta_teste.depositar(10)
conta_teste.depositar(-10)

console.log(conta_teste.saldo)

conta_teste.sacar(1000)
conta_teste.sacar(10)
conta_teste.sacar(-10)

console.log(conta_teste.saldo)

//testes savingAccount

var conta_teste = new savingAccount(["jack"])

console.log(conta_teste.saldo)

conta_teste.depositar(100)
conta_teste.depositar(-100)

console.log(conta_teste.saldo)

conta_teste.sacar(1000)
conta_teste.sacar(10)
conta_teste.sacar(-10)

console.log(conta_teste.saldo)
