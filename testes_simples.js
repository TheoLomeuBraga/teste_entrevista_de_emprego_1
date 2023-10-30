function e_par(num) {
    if (num % 2 == 0) {
        alert(num + " é par")
    } else {
        alert(num + " é impar")
    }
}

e_par(prompt("digite um numero"))

function classificar_idade(idade) {
    let classificacao = ""

    let esta_em_alcance = (min, max, num) => {
        return num >= min && num <= max
    }

    if (esta_em_alcance(0, 12, idade)) {
        classificacao = "uma Criança"
    } else if (esta_em_alcance(13, 17, idade)) {
        classificacao = "um(a) Adolescente"
    } else if (esta_em_alcance(18, 64, idade)) {
        classificacao = "um(a) Adulto"
    } else if (idade >= 66) {
        classificacao = "um(a) Sênior"
    }

    alert("se você tem " + idade + " você é " + classificacao)
}

classificar_idade(prompt("digite sua idade"))

function gerar_tabuada(num) {
    let tabuada = "a tabuada de 1 a 10 de " + num + " é "
    for (let i = 1; i < 11; i++) {
        tabuada += num * i + " "
    }

    alert(tabuada)
}

gerar_tabuada(prompt("digite sua um numero"))



