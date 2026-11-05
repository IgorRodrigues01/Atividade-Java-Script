const botao = document.getElementById("calcular");

botao.addEventListener("click", calcularIMC);

function calcularIMC() {

    const peso = parseFloat(
        document.getElementById("peso").value
    );

    const altura = parseFloat(
        document.getElementById("altura").value
    );

    const resultado = document.getElementById("resultado");

    if (isNaN(peso) || isNaN(altura) ||
        peso <= 0 || altura <= 0) {

        resultado.innerHTML =
            "Por favor, informe um peso e uma altura válidos.";

        return;
    }


    const imc = peso / (altura * altura);


    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    }
    else if (imc < 25) {
        classificacao = "Peso normal";
    }
    else if (imc < 30) {
        classificacao = "Sobrepeso";
    }
    else if (imc < 35) {
        classificacao = "Obesidade grau I";
    }
    else if (imc < 40) {
        classificacao = "Obesidade grau II";
    }
    else {
        classificacao = "Obesidade grau III";
    }


    resultado.innerHTML =
        "Seu IMC é: " + imc.toFixed(2) +
        "<br>Classificação: " + classificacao;
}
