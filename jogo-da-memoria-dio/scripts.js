const cards = document.querySelectorAll(".card"); // pegando todas divs com classe .card

let hasFlippedCard = false;
let firstCard, secondCard;
let paresIguais = 0;

/* Variavel para travar o tabuleiro durante uma jogada. Nao permitir que seja virada mais de duas cartas
por jogada */
let lockBoard = false;

function flipCard() {
  /*Adicionando a classe flip em cada card quando for clicado no card
    o metodo toggle() adiciona e retira a classe quando clicado fazendo com que vire e desvire a carta

    Ja o metodo add() adiciona a classe uma vez e se clicado novamente nao retira a classe
     fazendo com que o jogador nao possa devirar a carta para virar outra 
   */

  //this.classList.toggle('flip');

  if (lockBoard) return;
  if (this === firstCard) return; // verificacao nao comparar a imagem com ela mesma

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  hasFlippedCard = false;

  checkForMath();
}

/**Foi inserido no html um atributo data para fazer a verificacao na funcao abaixo
 * com data.set.card
 */
function checkForMath() {
  if (firstCard.dataset.card === secondCard.dataset.card) {
    paresIguais = paresIguais + 1;
    disableCard();
    return;
  }

  unflipCard();
}

/*Se as cartas forem iguais na funcao checkForMath() é chamada esta funcao que ira remover o evento de click
para que as cartas permanecam viradas*/
function disableCard() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

/*Se as cartas nao forem iguais é chamada esta funcao que faz com que as cartas desvirem depois do tempo
passado como parametro na funcao setTimeout() */
function unflipCard() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1500);
}

function resetBoard() {
  //Usando desestruturacao para resetar as variaveis
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

/*Immediate invocation function / Funcao auto Invocavel
  Quando display flex display flez em um container os elementos flex itens dentro do container 
  * sao ordenados pela propriedade order que usa um numero inteiro para esse ordenamento, entao se 
  * mudarmos esse numero inteiro os itens mudarao dentro do container.
  * Assim alteramos o numero inteiro do atributo order na funcao shuffle() abaixo para criarmos
  * um tabuleiro dinamico todas as vezes que o jogo for iniciado*/

(function shuffle() {
  cards.forEach((card) => {
    let randomPosition = Math.floor(Math.random() * 12);
    card.style.order = randomPosition;
  });
})();

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});
