import Grille from "./grille.js";

window.onload = init;

// On met les éléments de base du jeu (Permet également de modifier si besoin le temps d'une partie)

let grille;
let score = 0;
let temps = 60;


// On récupère le score dans le localSotrage pour le HighScore

if (localStorage.getItem('score')) {
  score = parseInt(localStorage.getItem('score'));
}
let highscore = localStorage.getItem('highscore');


// On ajoute et initialise les éléments pour la musique
let audioContext = new AudioContext();

let audioElement = new Audio("./assets/musique/Japanese Garden.mp3");
  
let audioSource = audioContext.createMediaElementSource(audioElement);



function settemps(newTemps)
{
  temps = newTemps;
}

function getTemps()
{
  return temps;
}


// Une méthode qui va être appellée quand on a perdu pour afficher l'alerte de fin
function alertePerdu() 
{
  if (score > parseInt(highscore) || highscore === null) 
  {
    localStorage.setItem('highscore', score);
    highscore = score;

    // On affiche le highscore
    let scoreElement = document.querySelector("#infos > div:nth-child(3)");
    scoreElement.textContent = "HighScore : " + highscore;
  }

  alert("Votre score est de " + score);
  window.location.reload();

}


// La fonction appellée dès le début pour commencer le jeu
function init() 
{
  let scoreElement = document.querySelector("#infos > div:nth-child(3)");
  scoreElement.textContent = "HighScore : " + (highscore ? highscore : 0);

  console.log("Page et ressources prêtes à l'emploi");
  // appelée quand la page et ses ressources sont prêtes.
  // On dit aussi que le DOM est ready (en fait un peu plus...)

  grille = new Grille(9, 9);
  grille.showCookies();

  // Connecter l'AudioContext à la sortie audio
  audioSource.connect(audioContext.destination);

  // On relie le bouton à jouerMusique qui permettra de configurer et de commencer la musique
  let b = document.querySelector("#buttonTestAlignement");
  b.onclick = () => {
    jouerMusique();
  }

  
  // Toutes les 200 ms on va vérifier si il y a un alignement, faire tomber les cookies trop haut et actualiser le score
  setInterval(function() 
  {
   score += grille.testAlignementDansTouteLaGrille();

    let scoreElement = document.querySelector("#infos > div:nth-child(2)");
    scoreElement.textContent = "Score : " + (score);

    grille.verifierPremiereLigne();

    grille.verifTableauTomber();
  }, 200);

  // Toutes les 1 secondes on va retirer 1 seconde au temps. Si il n'y a plus de temps on met l'écran de fin
  setInterval(function() 
  {
    score += grille.testAlignementDansTouteLaGrille();
 
     let TempsElement = document.querySelector("#infos > div:nth-child(1)");
     settemps(getTemps() - 1 );
     TempsElement.textContent = "Temps : " + (getTemps());

     if (getTemps() == 0)
     {
      alertePerdu();
     }
     
   }, 1000);
}


// Ce qui permet de mettre la musique
function jouerMusique() 
{

  // Pour éviter le fait de pouvoir lancer plusieurs fois la musique, on la remet à 0 à chaque fois qu'on appuis sur le bouton
  audioElement.pause();
  audioElement.currentTime = 0;

  // Jouer la musique
  audioElement.play().catch(function(error) 
  {
    console.error("Impossible de lire la musique:", error);
  });
}
