const welcome_modal = document.querySelector('.welcome-modal');
// delete welcome modal after 2s
setTimeout(() => {
   welcome_modal.remove();
}, 0);

// selectionne les bouttons
const choix = document.querySelector('.buttons').children;
const btn_pierre = choix[0];
const btn_feuille = choix[1];
const btn_ciseaux = choix[2];

function botRandomChoice() {
   const coups = ['Pierre', 'Feuille', 'Ciseaux'];
   const randInt = parseInt(Math.random() * coups.length); // retourne 0, 1 ou 2
   return botChoice = coups[randInt];
}

btn_pierre.addEventListener('click', playPierre);
btn_feuille.addEventListener('click', playFeuille);
btn_ciseaux.addEventListener('click', playCiseaux);

function playPierre() {
   const choixRobot = botRandomChoice();
   const choixJoueur = 'Pierre';
   checkHands(choixJoueur, choixRobot);
}
function playFeuille() {
   const choixRobot = botRandomChoice();
   const choixJoueur = 'Feuille';
   checkHands(choixJoueur, choixRobot);
}
function playCiseaux() {
   const choixRobot = botRandomChoice();
   const choixJoueur = 'Ciseaux'; // pierre
   checkHands(choixJoueur, choixRobot);
}

const fightBox = document.querySelector('#fight');
// const fightYou = document.querySelector('#fight-you');
// const fightBot = document.querySelector('#fight-bot');

let joueurScoreEl = document.querySelector('#player-score');
let botScoreEl = document.querySelector('#bot-score');
let playerScore = 0;
let botScore = 0;

function showFight(userChoice, botChoice) {
   const playerDiv = document.createElement('div');
   const botDiv = document.createElement('div');
   fightBox.append(playerDiv);
   playerDiv.setAttribute('id', 'fight-you');
   fightBox.append(botDiv);
   botDiv.setAttribute('id', 'fight-bot');
   playerDiv.innerHTML = '<h3>Vous</h3><img src="assets/img/' + userChoice + '.png">';
   botDiv.innerHTML = '<h3>Bot</h3><img src="assets/img/' + botChoice + '.png">';
}

function checkHands(joueur, bot) {
   resetFight();
   if (joueur == "Pierre" && bot == "Pierre") {
      showFight('pierre', 'pierre');
   } else if (joueur == "Pierre" && bot == "Feuille") {
      botScore++;
      botScoreEl.textContent = botScore;
      showFight('pierre', 'feuille');
   } else if (joueur == 'Pierre' && bot == 'Ciseaux') {
      playerScore++;
      joueurScoreEl.textContent = playerScore;
      showFight('pierre', 'ciseaux');
   }

   if (joueur == "Feuille" && bot == "Feuille") {
      showFight('feuille', 'feuille');
   } else if (joueur == "Feuille" && bot == "Ciseaux") {
      botScore++;
      botScoreEl.textContent = botScore;
      showFight('feuille', 'ciseaux');
   } else if (joueur == 'Feuille' && bot == 'Pierre') {
      playerScore++;
      joueurScoreEl.textContent = playerScore;
      showFight('feuille', 'pierre');
   }
   if (joueur == "Ciseaux" && bot == "Ciseaux") {
      showFight('ciseaux', 'ciseaux');
   } else if (joueur == "Ciseaux" && bot == "Pierre") {
      botScore++;
      botScoreEl.textContent = botScore;
      showFight('ciseaux', 'pierre');
   } else if (joueur == 'Ciseaux' && bot == 'Feuille') {
      playerScore++;
      joueurScoreEl.textContent = playerScore;
      showFight('ciseaux', 'feuille');
   }
   if (playerScore === 3) {
      alert('Vous avez gagné')
      playerScore = 0;
      botScore = 0;
      joueurScoreEl.textContent = playerScore;
      botScoreEl.textContent = botScore;
   } else if (botScore === 3) {
      alert('Vous avez perdu');
      playerScore = 0;
      botScore = 0;
      joueurScoreEl.textContent = playerScore;
      botScoreEl.textContent = botScore;
   }
}

function resetFight() {
   console.log(fightBox.children);
   const boxes = [...fightBox.children];
   boxes.forEach(element => {
      element.remove();
   });
}