let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio'

function exibirMensagemNoConsole() {
    console.log('O botao foi clicado')
}

function exibirAlerta() {
    alert('Eu amo JS')
}

function exibirPrompt() {
    let nomeCidade = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${nomeCidade} e lembrei de voce`);
}

function somandoDoisNumeros() {
    let numero1 = parseInt(prompt('Escolha um numero'));
    let numero2 = parseInt(prompt('Escolha outro numero'));
    resultado = numero1 + numero2;
    alert(`${numero1} + ${numero2} = ${resultado}`)
}