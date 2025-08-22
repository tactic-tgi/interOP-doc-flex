---
id: saisie-temps
slug: /production/saisie-temps
title: Saisie de temps
---

---

# Survol

Grâce à ce module, vous pouvez consigner rapidement et clairement le temps investi dans des opérations de main-d’œuvre. La préparation des fiches de paie d’employés est aussi simplifiée.

Un mode d’affichage additionnel par station permet également à plusieurs employés d’utiliser le même appareil de saisie des temps.

![](../../static/img/SaisieTemps_13.png)

#### Attributions

Les opérations et tâches connexes visibles proviennent des [attributions définies dans la fiche](../parametres/utilisateurs.md#actions-diverses) de l'utilisateur.

- Pour y accéder

  Cliquez sur la photo de l'employé dans le coin supérieur gauche.

  Apportez vos changements et cliquez sur **Enregistrer** (vous devez avoir les accès nécessaires pour le faire).

  ![](../../static/img/SaisieTemps_01.gif)

---

## En mode individuel

Le module s'ouvre directement sur l'interface de paie de l'employé.

### Ma Paie

Permet de débuter votre période de travail à comptabiliser.

Cette partie présente également le total d'heures de la journée et de la semaine en cours ainsi que tous vos punchs de la journée .

Cliquez sur **Débuter** pour commencer un punch et sur le **chronomètre rouge** pour le terminer.

![](../../static/img/SaisieTemps_02.png)

![](../../static/img/SaisieTemps_03.png)

![](../../static/img/SaisieTemps_04.png)

Pour apporter des modifications à un punch, vous référez au rapport [suivant.](../parametres/rapports.md#paie---détail)

---

### Mes Opérations

Permet de comptabiliser le temps passé sur des opérations reliées à un dossier de production.

Il est possible de repartir le chronomètre d'une opération, non terminée, réalisée plus tôt dans la journée ; cliquez sur le bouton démarrer. Le total se cumulera.

![](../../static/img/SaisieTemps_06.png)

Le crochet désigne une opération terminée.

![](../../static/img/SaisieTemps_05.png)

- Ajouter une nouvelle opération

  Cliquez sur **l'icône**![](../../static/img/Contacts_2_iconeajout.png)

  - Par attribution

    Sélectionnez une opération (attribution, ex : infographie), puis un dossier. Le chronomètre partira automatiquement.

    ![](../../static/img/SaisieTemps_09.gif)

  - Par dossier

    Recherchez toutes les opérations reliées à un dossier précis.

    Entrer un numéro de dossier et **Chercher.**  
    Pour revenir en arrière, utilisez la flèche bleue.

    Sélectionnez une opération. Le chronomètre partira automatiquement.

    ![](../../static/img/SaisieTemps_10.gif)

- Arrêter un chronomètre

  Pour arrêter le chronomètre, cliquez sur le **bouton rouge arrêt.**

  ![](../../static/img/SaisieTemps_07.png)

#### Éditer/terminer une opération

Cliquez sur le **crayon** au bout de la ligne d'opération.

![](../../static/img/SaisieTemps_08.gif)

- Éditer

  Vous pouvez apporter des changements aux [champs éditables](../fonctionnalites-generales/champs.md#champs-éditables) et/ou ajouter une note.

  **Enregistrer**

- Terminer

  Cliquez sur **Terminer opération**. Le punch s'arrêtera automatiquement.

  **Enregistrer**

---

### Mes tâches connexes

Permet de comptabiliser le temps passé sur des tâches connexes.

Ces tâches ne sont pas rattachées à un dossier de production.

Il est possible de repartir le chronomètre d'une tâche déjà réalisée plus tôt dans la journée ; cliquez sur le bouton démarrer. Le total se cumulera.

![](../../static/img/SaisieTemps_11.png)

- Ajouter une nouvelle tâche

  Cliquez sur sur **l'icône**![](../../static/img/Contacts_2_iconeajout.png)

  Sélectionnez une tâche. Le chronomètre partira automatiquement.

- Arrêter un chronomètre

  Pour arrêter le chronomètre, cliquez sur le **bouton rouge arrêt.**

  ![](../../static/img/SaisieTemps_12.gif)

---

## En mode partagé

L'employé partage l'appareil de saisie de temps avec d'autres.

Connectez-vous a interOP, sur l'ordinateur partagée, avec les accès d'une station.

**Exemple : Prépresse**

Nom de compte Filemaker = prepresseA

Mot de passe = prepresseA_motdepasse

- **Connexion sécurisée**

  Dans l'interface d'accueil de Saisie de temps, l'employé doit y inscrire son nip personnel et appuyer sur le crochet.

  Il sera automatiquement dirigé vers son interface de paie.

  ![](../../static/img/saisie_station_10.png)

- **Connexion non sécurisée**

  Dans l'interface d'accueil de Saisie de temps, tous les employés assignés à cette station seront visible à droite de l'écran.

  L'employé clique sur son nom pour avoir accès son interface de paie.

  ![](../../static/img/saisie_station_14.png)

Pour revenir à l'écran d'accueil, cliquez sur la flèche en haut à gauche.

![](../../static/img/saisie_station_11.png)

### Stations

Une station permet à plusieurs employés de se puncher sur un ordinateur commun.

Il est donc possible de créer 1 station par département ou par équipement.
Exemple : presse, reliure, expédition etc.

Pour accéder aux stations, cliquez sur **Stations** dans le [menu principal](../menu.md).

![](../../static/img/saisie_station_12.png)

#### Créer une nouvelle station

Cliquez sur **l'icône**![](../../static/img/Contacts_2_iconeajout.png).

Remplir chacun des onglets :

- **INFORMATIONS**

  Remplir les informations.

  Le nom de la station est seulement un nom d'affichage tandis que le nom de compte Filemaker sera le nom d'utilisateur à utiliser pour se connecter à interOP sur la station.

  ![](../../static/img/saisie_station_07.png)

  Créer l'accès à interOP et confirmez un mot de passe.

  ![](../../static/img/saisie_station_04.png)
  ![](../../static/img/saisie_station_05.png)

  Pour **sécuriser** l'accès des employés, cochez la case suivante.
  Un nip personnel devra être confirmé dans l'onglet **Utilisateurs**.

  ![](../../static/img/saisie_station_15.png)

  Également, vous pouvez choisir un délai **(temps d'inaction)** avant que l'utilisateur ne soit sortie de son interface. Cela permet à l'utilisateur de ne pas bloquer la session s'il quitte pour travailler. Généralement, nous conseillons de mettre 60 ou 120 sec maximum.

  Si l'utilisateur fait une action comme partir un temps ou éditer un punch, le chronomètre va se réinitialiser et il aura de nouveau 60 ou 120 secondes pour procéder à une autre action, avant d'être sorti par le système.

  Une fois dans son interface de paie, il verra un petit sablier s'écouler.

  ![](../../static/img/saisie_station_13.png)

- **UTILISATEURS**

  Attribuez des utilisateurs à cette station.

  Les utilisateurs doivent être existant dans la liste des [utilisateurs](../parametres/utilisateurs.md).

  ![](../../static/img/saisie_station_02.png)

  Si l'accès a été préalablement sécurisé dans l'onglet **Informations**, définir un nip personnel à chaque utilisateur. Ce nip lui permettra de se connecter à sa fiche de paie.

  ![](../../static/img/saisie_station_08.png)

- **TÂCHES**

  Attribuez des tâches à la station.

  ![](../../static/img/saisie_station_03.png)

- **ÉQUIPEMENTS**

  Attribuez des équipements à la station.

  ![](../../static/img/saisie_station_16.png)

- **OPÉRATIONS**

  Attribuez des opérations à la station.

  ![](../../static/img/saisie_station_17.png)

#### Actions diverses

- Modifier le mot de passe (de la station)
- Supprimer

![](../../static/img/saisie_station_09.png)

---

## Vidéo démo du module

[https://www.youtube.com/watch?v=6sbG8gCGAFY](https://www.youtube.com/watch?v=6sbG8gCGAFY)
