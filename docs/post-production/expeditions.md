---
id: expeditions
slug: /post-production/expeditions
title: Expéditions
---

---

## Survol {#survol}

Créez facilement des bons d’expédition et des étiquettes selon la mise en forme souhaitée. Il suffit de sélectionner le numéro d’un dossier lancé en production. Les informations pertinentes seront copiées automatiquement et vous pourrez par la suite générer aisément les différents documents requis.

Ouverture du module en [mode liste](../fonctionnalites-generales/navigation.md#mode-liste).

Par défaut, le [filtre](../fonctionnalites-generales/navigation.md#filtres-tris) est à statut : En préparation

![](/img/Expedition_01.png)

:::tip
Si vous devez livrer un travail à plusieurs endroits différents, produisez un bon de livraison par adresse de livraison. Vous pourrez ensuite procéder individuellement avec chaque commande à votre transporteur, et vous aurez ainsi les bonnes informations et un suivi de la livraison pour chacune d'entre elles. 
:::

---

## Création d'un bon d'expédition {#creataion}

- Cliquez sur **Créer un bon d'expédition** en haut à droite de la liste.

* Depuis un dossier

  Sélectionner un dossier à expédier. Vous pouvez utiliser le filtre de recherche pour isoler un client.

  ![](/img/Expedition_14.png)

  Le bon d'expédition sera créé automatiquement.

  N'oubliez pas de remplir la case Qté/bte, en cliquant sur la ligne pour faire ouvrir la fenêtre d'édition.

  ![](/img/Expedition_16.png)

  ![](/img/Expedition_17.png)

  \*À noter que le message au bas provient de vos [paramètres Système](../parametres/systeme.md#formulaires).

  ![](/img/Expedition_18.png)

:::tip
Si votre dossier était au statut Complété (donc livré et facturé), mais que vous avez besoin de faire un nouveau bon d'expédition, vous pourez le faire en vous rendant dans le module Dossiers, dans l'onglet [Détails du dossier](../production/dossiers.md#enregistrements), dans les bons de livraison liés.
:::

* Nouveau bon sans dossier

  Sélectionner un client

  ![](/img/Expedition_02.png)

  Le bon d'expédition sera créé automatiquement.

  N'oubliez pas de sélectionner un transporteur.

  ![](/img/Expedition_03.png)

  \*Le message au bas provient de vos [paramètres Système](../parametres/systeme.md#formulaires).

### Ajouter une ligne d'expédition {#ajout-ligne}

Cliquez sur **l'icône**![](/img/Contacts_2_iconeajout.png)

![](/img/Expedition_04.png)

- Avec dossier

  Au besoin : sélectionnez un dossier (non obligatoire).

  ![](/img/Expedition_05.png)

  Remplir les informations manquantes. Les champs marqués d'une [étoile](../fonctionnalites-generales/champs.md#champs-obligatoires) sont obligatoires.
  Inscrire la quantité par boîte, le nombre de boîte requise va se calculer automatiquement.

  ![](/img/Expedition_06.png)

  Pour éditer la ligne à nouveau, il suffit de recliquer sur celle-ci.

  ![](/img/Expedition_07.png)

### Étiquettes pour boite {#etiquettes}

Cliquez sur le bouton `Étiquettes ➝ 4 x 6` pour visualiser l'étiquette et l'imprimer.

![](/img/Expedition_08.png)

![](/img/Expedition_09.png)

### Divers {#divers}

![](/img/Expedition_10.png)

#### 1\. Éditer le contact

Les changements apportés lors de l'édition du contact seront appliqués dans le système au complet.

![](/img/Expedition_11.png)

#### 2\. Cueilllette par le client

Cocher la case pour indiquer que le client vient chercher sa commande.

#### 3\. Adresse Éxpédié à

Cliquez sur la loupe pour faire une recherche.

Vous y trouverez toutes les adresses liés à votre client.
Si l'adresse est manquante, veuillez vous rendre dans le module [client](../contacts/clients.md#ajout-adresse) pour l'ajouter.

![](/img/Expedition_12.png)

#### 4\. Identification Expéditeur

Provient de la [fiche contact](../contacts/clients.md#creation) de votre client, dans l'onglet Informations additionnelles.

![](/img/Expedition_13.png)

---

### Actions diverses {#actions}

#### En mode [consultation](../fonctionnalites-generales/navigation.md#mode-consultation)

- Valider l'expédition

Cette action vous permettra de pouvoir l'imprimer et/ou l'envoyer au client une fois validé.
Si des informations sont manquantes, le système vous affichera un message d'erreur avec le détail.

![](/img/Expedition_15.png)

- Visualiser le bon

- Aviser par [courriel](../fonctionnalites-generales/courriels.md)

- Imprimer le bon

- Suivi de la livraison : si vous avez inscrit un numéro de suivi et un transporteur, ceci vous mènera sur le site web de celui-ci pour faire le suivi de la livraison.

- Supprimer

  si le bouton est grisé, impossible de faire la suppression car le bon a été validé.

Abonnement à l'APIs Expédition requis pour accès à ces 3 boutons :
- Commandes transporteurs
- Imprimer étiquette transporteur
- Annuler commande transporteur

Voir section [ci-dessous](../post-production/expeditions.md#gestion-commTransporteur) pour plus de détails. 


---

## Gestion d'une commande transporteur {#gestion-commTransporteur}

*Abonnement requis pour cette [fonction](../parametres/systeme.md#apis-expedition).

### Création d'une commande et récupération de taux {#creation-commTransporteur}

Cliquer dans le menu Actions, puis **Commande transporteurs**. Si le bouton est grisé, c'est que vous devez Valider le bon en premier. 

![](/img/Expedition_commTransporteur_1.png)


Par défaut, les lignes du détail des colis représenteront vos lignes d'expédition. 

Entrez ou modifiez les informations au niveau des boîtes (nombre, format, type, etc), puis remplissez les autres champs selon votre besoin (livraison le samedi, signature requise, date d'expédition, etc).
![](/img/Expedition_commTransporteur_2.png)

**Type de paquet :** 
- Courrier pack : sac préformaté fourni par le transporteur, maximum de 3 lbs.
- Lettre courrier : seulement bon pour l'envoi d'un document dans une enveloppe. 
- Mon emballage : tout emballage de votre choix, non fourni par le fournisseur (boîte, tube ou tout autre emballage).

![](/img/Expedition_commTransporteur_2a.png)


Vous pouvez ajouter facilement des lignes en utilisant **l'icône** ![](/img/Contacts_2_iconeajout.png).

Puis en utilisant la **loupe**, vous pourrez trouver des emballages déjà existant dans vos inventaires de Produits. 

![](/img/Expedition_commTransporteur_3.png)

**Case Payeur** : si vous choisissez une autre option qu'expéditeur, vous aurez une petite icône qui apparaitra pour inscrire le numéro de compte de votre client.
- Destinataire : l'adresse sera celle déjà sélectionnée dans le bon de livraison, vous devrez entrer son numéro de compte seulement.
- Tierce partie : en plus de devoir entrer le numéro du compte, vous devrez sélectionner l'adresse de la tierce partie en utilisant la loupe (adresses d'expédition liées à votre client).

![](/img/Expedition_commTransporteur_6.png)
![](/img/Expedition_commTransporteur_5.png)

:::tip
Si l'adresse du destinataire est une résidence, cette information doit avoir été préalablement remplie dans l'adresse de livraison, dans le module Clients. 
Cette information est très importante, puisque les taux seront affectés par cette donnée. 

Vous pouvez cliquer sur le nom de l'entreprise Vendu à pour vous rendre rapidement dans les adresses d'expédition lié et vérifier l'information. 

![](/img/Expedition_commTransporteur_12.png)
![](/img/Expedition_commTransporteur_11.png)

:::

Une fois les informations remplies, cliquez sur le bouton `Récupérer les taux`.
Si l'appel produit des erreurs, elles seront visibles dans une fenêtre qui s'ouvrira. Cliquez sur `Ok` et corrigez les erreurs, au besoin. 

Une fois les taux bien récupérés, l'api du transporteur pourrait vous proposer des changements mineurs ou des notifications. Cliquez sur `Continuer`pour accepter les suggestions.
![](/img/Expedition_commTransporteur_7.png)

Une nouvelle fenêtre s'ouvrira, avec une liste des taux reçus par tous vos transporteurs actifs (le taux le moins cher étant en haut de la liste). 
Cliquez sur la petite icône à droite du prix pour avoir les détails du taux. 

![](/img/Expedition_commTransporteur_8.png)

Vous pouvez alors sélectionner le taux désiré, faire une dernière vérification des données puis faire le bouton `Commander`. 
Comme pour la récupération de taux, vous pourriez recevoir des alertes d'erreur ou de notifications de la part de l'api du transporteur. 

![](/img/Expedition_commTransporteur_9.png)

Le système vous invitera ensuite à imprimer l'étiquette d'expédition. Vous pourrez la faire immédiatement ou appuyez sur `Plus tard` et retourner l'imprimer par le menu Actions [Imprimer les étiquettes](../post-production/expeditions.md#imprimer-commTransporteur). 

L'information de la commande au transporteur sera visible dans le bas de l'écran de l'expédition. 

Bien qu'une cédule sera en place pour mettre à jour régulièrement le statut de la commande tant qu'elle n'est pas complétée, vous pourrez actualiser manuellement le statut venant du transporteur, en appuyant sur `Mettre à jour`.

![](/img/Expedition_commTransporteur_10.png)

Le numéro de suivi sera automatiquement inscrit et vous pourrez faire des vérifications en allant dans l'action **Suivi de la livraison** (ceci ouvrira le site web du transporteur pour faire le suivi).



### Imprimer étiquette transporteur {#imprimer-commTransporteur}

Après une commande réussie, on peut imprimer l'étiquette du fournisseur de transport par l'action **Imprimer étiquette transporteur**. L'action est aussi proposée tout de suite après le succès de la commande à votre fournisseur. 

:::tip
Vous pouvez préparer une commande et imprimer l'étiquette, mais demander la date d'expédition seulement le lendemain (date à laquelle vos colis quitteront vos bureaux). 
:::

### Annulation d'une commande {#annuler-commTransporteur}

Si le transporteur le permet et que le délai n'est pas dépassé, l'action **Annuler commande transporteur** permet une annulation du transport commandé et un remboursement.
En cas de problème, vous aurez un message de la part du transporteur. 

---

## Vidéo démo du module {#video}

[https://www.youtube.com/watch?v=LAlyP316cV0](https://www.youtube.com/watch?v=LAlyP316cV0)
