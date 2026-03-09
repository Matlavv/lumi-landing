**Situation**
Vous développez la landing page de Lumi, une application mobile de sécurité urbaine destinée à protéger les utilisateurs lors de leurs déplacements en ville. L'application vise à offrir un système d'alerte rapide, une cartographie collaborative des zones à risque, et un accompagnement post-agression. Ce MVP sera développé avec React Native et Expo, ciblant les utilisateurs francophones qui recherchent une solution de sécurité accessible et réactive.

**Task**
L'assistant doit générer le code complet et structuré d'une landing page pour l'application mobile Lumi en Next.js avec Tailwind. La landing page doit présenter l'application, ses fonctionnalités, et permettre aux utilisateurs de s'inscrire pour être informés du lancement de l'application. La landing page doit s'adresser aux utilisateurs qui veulent sortir en sécurité mais aussi aux professionnels de santé souhaitant entrer en partenariat avec Lumi pour accompagner les victimes d'agressions. 

**Objective**
Créer une landing page stylée, mémorable, impressionnante pour présenter l'application mobile Lumi et récolter des premiers utilisateurs intéressés pour le lancement de l'application.

**Knowledge**
Charte graphique :
- Couleurs principales : #5722CF (violet), #ebf067 (jaune), #f877af (rose), #fd3630 (rouge), #020201 (noir)
- Dégradé : #a949f2 → #ff5555 → #fe8570
- Logo : fourni dans /public/
- skills dans .agents/skills et skills-lock.json
- Inspire toi de cette structure de page : https://pulseagent.app/

Fonctionnalités par écran :

1. Page d'accueil (Home) :
   - Bouton principal bien visible pour déclencher l'alerte
   - Au déclenchement : afficher une simulation en 3 étapes séquentielles (alerte utilisateurs dans rayon 1km → alerte police → alerte contacts d'urgence)
   - Démarrage simulé d'un enregistrement audio
   - Interface intuitive et accessible en situation d'urgence

2. Page Carte :
   - Affichage d'une carte interactive
   - Visualisation des zones/quartiers signalés comme dangereux par la communauté
   - Possibilité d'ajouter un nouveau signalement de problème
   - Affichage des signalements des autres utilisateurs
   - Légende claire des types de signalements

3. Page Ressources/Accompagnement :
   - Liste d'articles sur la réaction en cas d'agression et l'accompagnement post-agression
   - Section pour la mise en relation avec des associations d'aide
   - Section pour la mise en relation avec des psychologues
   - Interface de type liste scrollable avec catégorisation

4. Page Paramètres :
   - Configuration du profil utilisateur
   - Gestion des 3 contacts d'urgence (nom, numéro de téléphone)
   - Interface de formulaire claire et accessible

Contraintes techniques :
- Framework : React Native avec Expo
- Langue : Français pour tous les textes de l'interface
- Navigation : Implémenter une navigation par onglets ou drawer
- État : Utiliser React hooks pour la gestion d'état
- Pour le MVP : toutes les fonctionnalités sont simulées (pas d'appels API réels, pas d'envoi d'alertes réelles, pas d'enregistrement audio réel)

**Instructions pour l'assistant**

L'assistant doit structurer le code de la manière suivante :

1. Générer la landing page avec un style moderne, dans le thème de la sécurité et en accord avec la DA fournie.

2. Générer le code pour chaque composant et page en respectant ces principes :
   - Code modulaire et réutilisable
   - Commentaires en anglais pour faciliter la compréhension
   - Utilisation de composants fonctionnels avec hooks
   - Application systématique de la charte graphique fournie

3. Implémenter la navigation entre les écrans et ancres du site.

4. Pour la page d'accueil, créer une animation ou transition visuelle claire montrant les 3 étapes de l'alerte avec un délai simulé entre chaque étape

5. Ajouter un CTA fort dans la section Hero et en bas de la page pour recueillir des adresses mails et pour demander à répondre à un sondage via un lien. 

6. Inclure les dépendances nécessaires dans le fichier package.json

7. Assurer la responsivité de l'interface pour différentes tailles d'écran. 

8. Inclure un SEO avec des mots clés impactants pour la sécurité en ville. Notre cible sont des jeunes qui sortent le soir et qui veulent se sentir en sécurité. 