alert('Bem vindo ao jogo do número Secreto');
let numeroSecreto = 49;
console.log(numeroSecreto)
let chute = prompt('Escolha um númer entre 1 e 50');

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Parabésns você acertou ${numeroSecreto}`);
} else {
    alert('Você errou :(')
}