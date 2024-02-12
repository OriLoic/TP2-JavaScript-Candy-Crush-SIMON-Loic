# TP2-JavaScript-Candy-Crush-SIMON-Loic

## Objectif :

 L'objectif du jeu est d'obtenir le maximum de point en alignant des cookies. Pour cela, le joueur va se retrouver face à une grille de 9 cases par 9 et va pouvoir bouger un cookie à la fois. Si ce cookie bougé est aligné avec (au minimum) 2 autres cookies de la même forme et couleur alors ils disparaîtront et le joueur gagnera des points. À la fin du timer le score du joueur sera conservé et une nouvelle partie pourra être relancé


## Fonctionnalité présente :

 - Un timer de 60 secondes qui affiche au bout de 60 secondes un écran de fin
 - Un highscore enregistré localement pour permettre au joueur d'essayer de battre son record
 - Un système empêchant les "cookies" d'être échangé si cela ne forme pas un alignement de 3 "cookies" ou plus
 - Une musique pouvant être lancé via un bouton
 - Une détection automatique des alignements de 3 cookies ou plus
 - L'ajout de nouveau cookies quand il n'y en a plus sur la 2e ligne


## Fonctionnalité non présente / Bug connu :

 - Le système de score n'a pas de combo et se base sur la chute des cookies et non l'alignement des cookies
 - Il n'y a pas de système de niveau
 - Le score s'actualise dès la création donc le simple fait de démarrer la page offrira des points si des alignements sont détectés
 - Il n'y a pas d'animation
 - Il n'est pas possible de couper la musique une fois lancée


## Autres

 - Pour pouvoir effectuer ce travail, je me suis aidé de la correction effectué par Mr.Buffa *(pour la détection de l'alignement ainsi que l'échange de cookie) ainsi que de l'intelligence artificielle chat gpt
 - La musique utilisée est "Japanese Garden" de Blue Wednesday
