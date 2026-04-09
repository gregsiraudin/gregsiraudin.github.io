# Portolio de Grégoire Siraudin

## Musical Heart

Durant ma première année à EPITA, j’ai participé à la création d’un jeu vidéo en C# au sein d’une équipe de 4 personnes.

Pour choisir le jeu à développer, j’avais déjà imaginé plusieurs idées dans des blocs-notes avant mon entrée à EPITA, mais l’une d’elles se démarquait nettement par son niveau d’approfondissement. Cette idée était **Musical Heart**, un jeu 2D en pixel art. Grâce à cette proposition, j’ai été nommé chef de projet.

<figure style={{ textAlign: 'center' }}>
  <img src="/img/portfolio/jaquette.png" alt="Interface du menu" style={{ width: '400px' }} />
  <figcaption>Interface du jeu</figcaption>
</figure>


À la fin de l’année, nous avions développé les éléments essentiels d’un jeu vidéo : menu principal, pause, effets sonores, premier niveau jouable avec plusieurs mécaniques originales, ainsi qu’un mode multijoueur à deux joueurs. Au-delà de la jouabilité, les aspects graphiques et sonores ont été particulièrement travaillés afin de rendre l’expérience la plus immersive possible.

<figure style={{ textAlign: 'center' }}>
  <img src="/img/portfolio/gameplay.png" alt="Interface du menu" style={{ width: '600px' }} />
  <figcaption>Niveau du jeu</figcaption>
</figure>


Pour ce projet, la musique constitue un élément central. En effet, tout dans ce jeu est relié directement ou indirectement à la musique. Cela passe d’abord par l’histoire, qui fait découvrir différents styles musicaux, mais aussi par le gameplay, puisque les instruments de musique servent d’armes pour affronter les ennemis. Plus largement, la musique joue un rôle fondamental dans l’expérience vidéoludique.

La musique dans un jeu vidéo est un élément essentiel de l’expérience globale du joueur. Elle permet de créer une ambiance, de renforcer les émotions, d’orienter le joueur, de rendre l’univers plus mémorable et d’augmenter l’immersion. Dans **Musical Heart**, nous avons cherché à intégrer pleinement ces différentes dimensions.

Mon rôle sur ce projet était d’apporter une ambiance sonore cohérente avec l’univers du jeu. Pour cela, j’ai utilisé le logiciel **MPC Beats**.

<figure style={{ textAlign: 'center' }}>
  <img src="/img/portfolio/mpc.png" alt="MPC Beats" style={{ width: '300px' }} />
  <figcaption>MPC Beats – composition musicale</figcaption>
</figure>

Pour le premier niveau, l’objectif était de créer une ambiance stressante et angoissante. Le beat rappelle volontairement les battements d’un cœur, en référence directe au titre du jeu. Ce choix renforce l’immersion du joueur, qui se retrouve dans une situation de détresse et d’incompréhension au début de l’histoire.

Notre principale source d’inspiration fut le morceau **Progression** de l’artiste **Birraj**. Ce thème représentait bien l’esprit que nous voulions donner au jeu, et nous nous en sommes inspirés pour recréer certains accords à notre manière.

<figure style={{ textAlign: 'center' }}>
  <audio controls style={{ width: '500px' }}>
    <source src="/img/portfolio/Musical_Heart.mp3" type="audio/mpeg" />
    Ton navigateur ne supporte pas l'audio.
  </audio>
  <figcaption>Musique du niveau 1 – Musical Heart</figcaption>
</figure>

Nous avons également choisi de créer nos propres sonorités pour certains instruments présents dans le jeu, comme le violon et la trompette. Pour cela, nous avons utilisé **GarageBand**, qui nous a permis d’explorer différentes tonalités et suites d’accords.

<figure style={{ textAlign: 'center' }}>
  <img src="/img/portfolio/garageband.png" alt="GarageBand" style={{ width: '300px' }} />
  <figcaption>GarageBand – création des sonorités</figcaption>
</figure>

Concernant les ennemis basiques attaquant au corps à corps, nous avons mis en place une intelligence artificielle simple. Lorsqu’un joueur s’approche trop près d’un ennemi, celui-ci commence à le poursuivre progressivement afin de lui porter un coup. Le joueur peut alors soit éliminer l’ennemi, soit s’éloigner suffisamment pour qu’il perde sa cible et retourne à sa position initiale. Ce comportement repose sur une distance de détection représentée par une zone circulaire autour de l’ennemi.

<figure style={{ textAlign: 'center' }}>
  <img src="/img/portfolio/ennemi.png" alt="Schéma de comportement d’un ennemi" style={{ width: '300px' }} />
  <figcaption>Représentation du comportement d’un ennemi</figcaption>
</figure>

Vous pouvez en voir davantage sur ce projet, ou même le télécharger, sur ce [site web](https://sg3orges.github.io/HARMONY-CORPORATION/).

Vous pouvez également retrouver les autres musiques [ici](https://soundcloud.com/altio92130).

## GEN-IA-LE

**GEN-IA-LE** est un projet de résolution automatique de grilles de mots cachés à partir d’une image. L’objectif était de concevoir un programme capable de détecter les lettres présentes dans une grille, de reconnaître les mots recherchés dans toutes les directions, puis de résoudre la grille de manière rapide et fiable.

Ce type de problème demande à la fois une bonne gestion du traitement d’image, de la reconnaissance de caractères et de l’algorithmique de recherche. Le projet s’inscrivait donc dans une logique mêlant intelligence artificielle, optimisation et développement logiciel.

Les objectifs principaux du projet étaient les suivants :

- parcourir efficacement une grille de mots cachés ;
- détecter les mots dans toutes les directions possibles ;
- optimiser la recherche pour réduire le temps de traitement ;
- garantir la précision de détection ;
- gérer les cas complexes, comme les mots croisés ou certaines erreurs d’alignement.

Le programme a été développé en **C**, avec les bibliothèques **SDL2** pour l’interface graphique et **SDL_ttf** pour l’affichage du texte.

L’interface a été pensée pour rester simple et intuitive. Elle permettait à l’utilisateur de sélectionner une grille selon plusieurs niveaux de difficulté, puis d’appliquer différentes étapes de traitement à l’image avant la résolution finale.

<figure style={{ textAlign: 'center' }}>
  <img src="/img/portfolio/interface1.png" alt="Interface du menu" style={{ width: '600px' }} />
  <figcaption>Interface du menu</figcaption>
</figure>

Les principales fonctionnalités proposées étaient :

- **Save** : sauvegarde de l’image courante ;
- **Original** : retour à l’image d’origine ;
- **Denoise** : réduction du bruit ;
- **BW** : conversion en niveaux de gris ;
- **Binarization** : passage en noir et blanc ;
- **Elements Detection** : détection des éléments de l’image ;
- **Rotation** : rotation de l’image ;
- **OCR** : reconnaissance automatique des caractères ;
- **Solver** : résolution de la grille ;
- **Retour** : retour au menu principal.

<figure style={{ textAlign: 'center' }}>
  <img src="/img/portfolio/interface2.png" alt="Interface du menu" style={{ width: '600px' }} />
  <figcaption>Interface du menu</figcaption>
</figure>


De manière générale, le fonctionnement du programme suivait les étapes suivantes :

1. initialisation de SDL ;
2. affichage du fond décoratif ;
3. affichage de la grille ;
4. mise en place des actions associées aux boutons ;
5. affichage de l’interface complète ;
6. exécution des traitements et mise à jour de l’affichage selon les actions de l’utilisateur.

<figure style={{ textAlign: 'center' }}>
  <img src="/img/portfolio/interface4.png" alt="Interface du menu" style={{ width: '600px' }} />
  <figcaption>Interface de la résolution de la grille</figcaption>
</figure>


Ce projet m’a permis de travailler à la fois sur l’interface graphique, le traitement d’image, l’organisation d’un pipeline de résolution et l’optimisation algorithmique.

## 42sh

Avec **42sh**, j’ai implémenté un shell Unix complet en langage C, en reproduisant le comportement d’un interpréteur de commandes classique.

À travers ce projet, j’ai travaillé sur des problématiques systèmes bas niveau, notamment la gestion des processus, des appels système et le parsing de commandes complexes.

J’ai développé les fonctionnalités suivantes :

- exécution de commandes simples
- gestion des opérateurs logiques (`&&`, `||`)
- implémentation des pipelines
- gestion des redirections (`<`, `>`, `>>`)
- parsing avancé des entrées utilisateur
- gestion des processus avec `fork`, `exec` et `wait`

J’ai également conçu une architecture basée sur un **AST (Abstract Syntax Tree)** afin de structurer et d’exécuter efficacement les commandes.

Ce projet m’a permis de mieux comprendre le fonctionnement interne d’un système Unix et de renforcer mes compétences en programmation système et en conception logicielle.

## Tiger Compiler

Dans le cadre du projet **Tiger**, j’ai participé à l’implémentation d’un compilateur en C++, en suivant les différentes étapes classiques de compilation.

J’ai travaillé sur la transformation d’un code source en une représentation exploitable, en assurant sa validité syntaxique et sémantique.

J’ai notamment contribué à :

- la construction de l’**AST (Abstract Syntax Tree)**
- la mise en place du **binder** pour la gestion des identifiants et des scopes
- l’analyse sémantique et le **type-checking**
- la gestion des symboles via une **table des symboles**
- l’utilisation du **visitor pattern** pour parcourir et manipuler l’arbre

Ce projet m’a permis d’approfondir ma compréhension des compilateurs, de l’analyse statique et de la structuration de programmes complexes en C++.

## 🧪 Yakamon JWS

Dans le cadre du projet **Yakamon JWS**, j’ai développé un backend en Java avec Quarkus, exposant une API REST permettant de gérer un jeu basé sur une carte et des interactions joueur.

J’ai travaillé sur la conception et l’implémentation de plusieurs endpoints, notamment :

- initialisation d’une partie (`/start`)
- déplacement du joueur (`/move`)
- collecte d’objets (`/collect`)
- gestion de l’inventaire (`/inventory`)
- interaction avec le Yakadex (`/yakadex`)

J’ai également conçu les modèles de données et leur persistance avec **Hibernate ORM**, en structurant les entités du jeu (joueur, carte, objets, yakamons).

Une attention particulière a été portée à la logique métier, notamment :

- gestion des cooldowns sur les actions
- validation des interactions avec la carte
- mise à jour dynamique de l’état du jeu
- gestion des erreurs et cohérence des réponses API

Ce projet m’a permis de développer mes compétences en conception d’API REST, en architecture backend et en gestion de la persistance de données avec Java.