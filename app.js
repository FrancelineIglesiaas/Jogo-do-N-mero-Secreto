 //criando uma lista de numeros aleatorios//
let listaDeNumerosSorteados = [];
let numeroLimite = 10 //variavel dinamica//
 //variavel para guardar o numero aleatorio//
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

 // apontar variavel html // <h1> titulo da pagina em si// 
 //let titulo = document.querySelector('h1'); //selecionar // criando variavel dentro do h1//
 //titulo.innerHTML = 'Jogo do número secreto';  //dentro do html - daquele titulo//

 //let paragrafo = document.querySelector('p');
 //paragrafo.innerHTML = 'Esolha um número entre 1 e 10'; //no paragrafo//
 
 // funções com parametros//
 //function = trecho de codigo responsavel determinada ação//
 // função - nome (parametro) - escopo// função uma responsabilidade - deixar claro o nome da função//

function exibirTextoNaTela(tag, texto) {
 let campo = document.querySelector(tag);
 campo.innerHTML = texto;
 responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); //fala// idioma//velocidade//
}
function exibirMensagemInicial(){
 exibirTextoNaTela('h1','Jogo do número secreto');
 exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();
 //button - ao clicar tem que ter algo funcional// 
function verificarChute() {
 let chute = document.querySelector('input').value; //guarda na variavel o chute//
   if(chute == numeroSecreto){
    exibirTextoNaTela('h1','Acertou!');
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Parabens! Você descobriu o número secreto em ${tentativas} ${palavraTentativas}`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');  // Seleciona elementos com base em seus IDs//
    //Removendo o atributo "disabled", torna o elemento novamente interativo, permitindo que o usuário clique ou realize ações nele.//
   } else {
    if(chute > numeroSecreto){
        exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
    }else {
        exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
    }
    tentativas++;
    limparCampo();
   }
} 
//funções com retorno//
function gerarNumeroAleatorio() {
 let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
 let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

 if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
 }
 
 if(listaDeNumerosSorteados.includes(numeroEscolhido)){ //includes() verifica se o elemento está na lista//
   return gerarNumeroAleatorio(); //recursão - verificará novamente se aquele número já foi escolhido ou não. gerando um novo nro se true//
 } else {
    listaDeNumerosSorteados.push(numeroEscolhido); //push adicionar elementos//
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
 }
} 
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}