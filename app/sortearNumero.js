const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumero() 

const elementoMenorValor = document.getElementById("menor-valor");
const elementoMaiorValor = document.getElementById("maior-valor");

elementoMaiorValor.textContent = maiorValor
elementoMenorValor.textContent = menorValor



function gerarNumero(){
    return parseInt(Math.random()* maiorValor + 1)
}

console.log("numero Secreto é: "+numeroSecreto )