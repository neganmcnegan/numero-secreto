let listaDeNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1;
let numeroDeJogos = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function textoInicial(){
    mensagemJogo =`Jogo do numero secreto nivel ${numeroDeJogos}`
    exibirTextoNaTela('h1', mensagemJogo);
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
    numeroDeJogos++;
}

textoInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!!!')
        let palavraTentantivas = tentativas > 1 ? 'tentativas' : 'tentativa'; 
        let mensagemTentativas = `Você descobriu um numero secreto com ${tentativas} ${palavraTentantivas}!`
        exibirTextoNaTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (chute > numeroSecreto){
        exibirTextoNaTela('p', 'Tente um numero mais baixo')
        } else{
        exibirTextoNaTela('p', 'Tente um numero mais alto')
        }
        tentativas++;
        limparCampo();
    }

}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
    chute.focus();
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosDaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    textoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}