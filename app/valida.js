function verficaChute(chute){
    const numero = parseInt(chute);
    if(chuteInvalido(numero)){
        boxChute.innerHTML += "<div>Valor Inválido</div>"
        return
    }
    if(numeroMaiorOuMenor(numero)){
        boxChute.innerHTML += `<div>valor Invalido: O número secreto precisa estar entre ${menorValor} e ${maiorValor} </div>`
        return
    }
    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogarNovamente">Jogar Novamente</button>`
    } else if(numero < numeroSecreto){
        boxChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }else{
        boxChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    }
}

function chuteInvalido(numero){
    return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor;
}


document.body.addEventListener("click", (event) =>{
    if(event.target.id == "jogarNovamente"){
        window.location.reload();
    }
})