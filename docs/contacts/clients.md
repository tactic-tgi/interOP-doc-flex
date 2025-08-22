---
id: clients
slug: /contacts/clients
title: Clients
---

---

## Survol

Ce module a été élaboré pour consigner toutes les informations relatives aux clients actuels et potentiels. En plus des contacts liés et des adresses d’expédition (sans limite de nombre), vous y retrouvez l’historique des soumissions, des dossiers, des bons d’expédition et des factures émises avec l’analyse des ventes par année.

De plus, l’utilisation de nos passerelles de connexion à votre logiciel comptable et/ou logiciel CRM permettent également de créer ou mettre ces informations à jour à un seul endroit dans interOP, puis déclencher la mise à jour automatiquement dans les logiciels connectés.

Ouverture du module en [mode liste](../fonctionnalites-generales/navigation.md#mode-liste).

Par défaut, le [filtre](../fonctionnalites-generales/navigation.md#filtres-et-tris) est à Actif.

![](../../static/img/Clients_liste.png)

![](../../static/img/Clients_2_filtre.png)

**En mode** [**consultation**](../fonctionnalites-generales/navigation.md#mode-consultation)

La portion du **haut** présente les coordonnées de base de l'entreprise.

À droite, se retrouvent les personnes contacts ainsi que les adresses d'expédition associées.

La portion du **bas** présente l'historique pour :

- les soumissions
- les dossiers de production
- les bons d'expédition
- les factures

Le dernier onglet permet de consigner différentes [notes](../fonctionnalites-generales/notes.md) segmentées par catégorie.

![](../../static/img/Clients_3.png)

---

## Création d'un client

1. Revenir dans la liste des clients et cliquer sur **Créer un client**
   ![](../../static/img/Clients_4_création.png)
   - **Coordonnées**
     Les champs marqués d'une [étoile](../fonctionnalites-generales/champs.md#champs-obligatoires) sont obligatoires.
     ![](../../static/img/Clients_5.png)
     **Abonnement requis** pour cette [fonction](../fonctionnalites-generales/recherche-adresse.md)
     Adresse à compléter ici ⤵️ ![](../../static/img/Clients_6_google.png)
     - **Informations additionnelles**
       Identification expéditeur sur le bon d'expédition et les étiquettes.
       **Standard** ➝ Logo & coordonnées de votre entreprise.
       **Client** ➝ Logo de votre client à ajouter.
       **Aucune** ➝ Blank shipping (aucun logo/identification) ![](../../static/img/Clients_7_infosadd_std.png)
   - **Administration**
     Les champs à compléter sont en fonction de votre système comptable. À noter que vous pouvez choisir de facturer à une autre entité (autre client de votre base de donnée).
     ![](../../static/img/Clients_8_admin.png)

2\. **Enregistrer**

---

## **Contact**

Icônes possibles à côté de chaque contact :

- Étoile ➝ Contact par défaut
- Calculatrice ➝ Responsable de la facturation : À noter qu'on ne peut avoir qu'un seul responsable facturation, mais on peut avoir autant de contact que l'on veut qui sont cochés "Facturation - Envoi courriel", un peu comme un utilisateur en CC dans un courriel.

  Par défaut, le responsable de la facturation sera dans l'envoi courriel ainsi que tous ceux cochés dans "Envoi courriel". Si on ne coche aucun contact dans "Envoi courriel", le responsable de la facturation va quand même recevoir la facture.

- Rond vert ➝ Identifie que le contact est synchronisé avec Hubspot

Contact **Actif** : en couleur

Contact **Inactif** : grisé

![](../../static/img/Contacts_1.png)

### Ajouter un contact

- Cliquer sur **l'icône** ![](../../static/img/Contacts_2_iconeajout.png)
- Remplir la fiche : les champs marqués d'une [étoile](../fonctionnalites-generales/champs.md#champs-obligatoires) sont obligatoires.

  ![](../../static/img/Contacts_3.png)

- Spécifiez si le contact est celui par défaut, s'il est responsable de la facturation et/ou de l'envoi courriel de la facturation.

- **Enregistrer**

### Consulter, modifier ou supprimer un contact

- Consulter

  - cliquez sur le nom d'un des contacts pour afficher sa fiche
  - cliquez sur Enregistrer pour sortir de la fenêtre.

- Modifier

  apportez vos modifications dans la fiche et cliquez sur **Enregistrer**

- Supprimer

  dans la fiche, cliquez sur **Supprimer**

  À noter : Si le bouton est grisé, impossible de faire la suppression car le contact est utilisé dans le système.

![](../../static/img/Contacts_4_supprimer.png)

---

## Adresses

Icônes possibles à côté d'une adresse :

- Maison ➝ Adresse principale ( possiblité d'en désigner 1 seule)
- Petite planète : permet de voir l'itinéraire

![](../../static/img/AdressesExp_1.png)

### Ajouter une adresse d'expédition

- Cliquer sur **l'icône** ![](../../static/img/Contacts_2_iconeajout.png)
- Remplir la fiche

  **Abonnement requis** pour cette [fonction](../fonctionnalites-generales/recherche-adresse.md).

  ![](../../static/img/Googlemaps.png)

  Adresse à compléter ⤵️ les champs marqués d'une [étoile](../fonctionnalites-generales/champs.md#champs-obligatoires) sont obligatoires.

  ![](../../static/img/AdressesExp_2_creation.png)

- **Enregistrer**

### Consulter, modifier ou supprimer une adresse

- Consulter

  - cliquez sur une des adresses pour afficher sa fiche
  - cliquez sur Enregistrer pour fermer la fenêtre

- Modifier

  apportez vos modifications dans la fiche et **Enregistrer**

- Supprimer

  dans la fiche, cliquez sur **Supprimer** Si le bouton est grisé, impossible de faire la suppression car l'adresse est utilisée dans le système.

---

## Notes

Les [notes](../fonctionnalites-generales/notes.md) ajoutées ici seront visible dans le haut de tous les modules où le client est utilisé.

### Ajouter une note

1. Cliquez sur l'onglet Notes
2. Cliquez sur **l'icône** ![](../../static/img/Contacts_2_iconeajout.png)

Sélectionnez une catégorie.

Suivre les [instructions suivantes](../fonctionnalites-generales/notes.md#notes-actions).

![](../../static/img/Notes_1.png)

![](../../static/img/Notes_2.png)

Pour consulter, modifier, supprimer une note ou insérer et consulter des pièces jointes, vous référez à cette [section](../fonctionnalites-generales/notes.md#notes-actions).

---

### Actions diverses

#### En mode [consultation](../fonctionnalites-generales/navigation.md#mode-consultation)

![](../../static/img/Clients_actions.png)

- Modifier ce client

  Apporter vos modifications dans l'écran d'édition et **Enregistrer**

- Modifier le code client

  Suivre les étapes à l'écran.

  Souvent cette étape sera réservée à certains utilisateurs seulement.

- Rendre actif/inactif

  Inactif : le client apparaitra grisé dans la liste.

- Envoyer à Système comptable

  Synchroniser avec votre système comptable.

- Supprimer

  Supprimer la fiche contact si vous avez les accès pour le faire

  Si le bouton est grisé, impossible de faire la suppression car le client est utilisé ailleurs dans le logiciel. , rendre plutôt le client **Inactif.**

---

## Autres fonctionnalités

Dans l'onglet **Facture.**

### Mettre à jour le total des ventes

L'actualisation des totaux ne se fait pas automatiquement.

Cliquez pour actualiser le total des ventes pour les 5 dernières années.
![](../../static/img/Clients_facture_refresh.png)

### Créer une facture

Suivre les étapes de la [création](../post-production/factures.md#création-dune-facture) de nouvelle facture.

---

## Vidéo démo du module

[https://www.youtube.com/watch?v=y99c8--Omm0](https://www.youtube.com/watch?v=y99c8--Omm0)
