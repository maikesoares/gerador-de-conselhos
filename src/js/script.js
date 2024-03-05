const mensagemConselho = document.getElementById('conselho');
const idAdvice = document.querySelector('.advice');

document.getElementById('botao').addEventListener('click', () => {
  gerarUmConselhoAleatorio();
});

async function conselhoAleatorio() {
  const url = 'https://api.adviceslip.com/advice';
  const resposta = await fetch(url);
  return await resposta.json();
}

async function gerarUmConselhoAleatorio() {
  const conselho = await conselhoAleatorio();
  const conselhoId = `Advice #${conselho.slip.id}`;
  const mensagem = conselho.slip.advice;

  idAdvice.innerHTML = conselhoId;
  mensagemConselho.innerHTML = mensagem;
  
}

gerarUmConselhoAleatorio();