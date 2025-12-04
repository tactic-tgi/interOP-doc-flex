---
id: clients
slug: /contacts/clients
title: Clients
---

---

## Survol {#survol}

Ce module a été élaboré pour consigner toutes les informations relatives aux clients actuels et potentiels. En plus des contacts liés et des adresses d’expédition (sans limite de nombre), vous y retrouvez l’historique des soumissions, des dossiers, des bons d’expédition et des factures émises avec l’analyse des ventes par année.

De plus, l’utilisation de nos passerelles de connexion à votre logiciel comptable et/ou logiciel CRM permettent également de créer ou mettre ces informations à jour à un seul endroit dans interOP, puis déclencher la mise à jour automatiquement dans les logiciels connectés.

Ouverture du module en [mode liste](../fonctionnalites-generales/navigation.md#mode-liste).

Par défaut, le [filtre](../fonctionnalites-generales/navigation.md#filtres-tris) est à Actif.

![](/img/Clients_liste.png)

![](/img/Clients_2_filtre.png)

**En mode** [**consultation**](../fonctionnalites-generales/navigation.md#mode-consultation)

La portion du **haut** présente les coordonnées de base de l'entreprise.

À droite, se retrouvent les personnes contacts ainsi que les adresses d'expédition associées.

La portion du **bas** présente l'historique pour :

- les soumissions
- les dossiers de production
- les bons d'expédition
- les factures

Le dernier onglet permet de consigner différentes [notes](../fonctionnalites-generales/notes.md) segmentées par catégorie.

![](/img/Clients_3.png)

---

## Création d'un client {#creation}

1. Revenir dans la liste des clients et cliquer sur **Créer un client**
   ![](/img/Clients_4_création.png)
  ### Coordonnées
     Les champs marqués d'une [étoile](../fonctionnalites-generales/champs.md#champs-obligatoires) sont obligatoires.
     ![](/img/Clients_5.png)
     **Remplissage automatique par Google : Abonnement requis** pour cette [fonction](../fonctionnalites-generales/recherche-adresse.md).
     
     Vous devrez compléter l'adresse ici ⤵️ 
     
     À noter que si la sélection d'un pays fait en sorte qu'il n'y a pas de province liée, le champ Province ne sera pas obligatoire. Par défaut, à la création d'un client, le Canada et Québec seront inscrits comme Pays et Province.
     
     ![](/img/Clients_6_google.png)
  ### Informations additionnelles
       Identification expéditeur sur le bon d'expédition et les étiquettes.
       **Standard** ➝ Logo & coordonnées de votre entreprise.
       **Client** ➝ Logo de votre client à ajouter.
       **Aucune** ➝ Blank shipping (aucun logo/identification) ![](/img/Clients_7_infosadd_std.png)
  ### Comptabilité
     Les champs à compléter sont en fonction de votre système comptable. 
     ![](/img/Clients_8_admin.png)

      
     Dans cet onglet, vous pourrez identifier un client comme étant **Prospect**, ce qui veut dire que vous pourrez faire des soumissions à un client sans devoir l'envoyer dans votre système comptable. Lorsque ce client vous demandera une vraie commande, il ne sera donc plus un prospect et vous devrez le synchroniser pour pouvoir éventuellement produire une facture.

     Si vous voulez que vos nouveaux clients créés soient toujours des Prospects par défaut, il suffit d'aller cocher la case dans les Paramètres, section [Valeurs par défaut](../parametres/systeme.md#defauts). 

     ![](/img/Clients_Prospect_defaut.png)

     À noter que si un client a déjà un dossier lié, la case prospect ne sera plus visible. 

     ![](/img/Clients_prospect.png)


     C'est aussi dans cet onglet que vous pouvez choisir de facturer à une autre entité (autre client de votre base de donnée).
     ![](/img/Clients_9_admin.png)

2\. **Enregistrer**

---

## Contacts {#contacts}

Icônes possibles à côté de chaque contact :

- Étoile ➝ Contact par défaut
- Calculatrice ➝ Responsable de la facturation : À noter qu'on ne peut avoir qu'un seul responsable facturation, mais on peut avoir autant de contact que l'on veut qui sont cochés "Facturation - Envoi courriel", un peu comme un utilisateur en CC dans un courriel.

  Par défaut, le responsable de la facturation sera dans l'envoi courriel ainsi que tous ceux cochés dans "Envoi courriel". Si on ne coche aucun contact dans "Envoi courriel", le responsable de la facturation va quand même recevoir la facture.

- Rond vert ➝ Identifie que le contact est synchronisé avec Hubspot

Contact **Actif** : en couleur

Contact **Inactif** : grisé

![](/img/Contacts_1.png)

### Ajouter un contact {#ajout-contact}

- Cliquer sur **l'icône** ![](/img/Contacts_2_iconeajout.png)
- Remplir la fiche : les champs marqués d'une [étoile](../fonctionnalites-generales/champs.md#champs-obligatoires) sont obligatoires.

  ![](/img/Contacts_3.png)

- Spécifiez si le contact est celui par défaut, s'il est responsable de la facturation et/ou de l'envoi courriel de la facturation.

- **Enregistrer**

### Consulter, modifier ou supprimer un contact {#consulter-contact}

- Consulter

  - cliquez sur le nom d'un des contacts pour afficher sa fiche
  - cliquez sur Enregistrer pour sortir de la fenêtre.

- Modifier

  apportez vos modifications dans la fiche et cliquez sur **Enregistrer**

- Supprimer

  dans la fiche, cliquez sur **Supprimer**

  À noter : Si le bouton est grisé, impossible de faire la suppression car le contact est utilisé dans le système.

![](/img/Contacts_4_supprimer.png)

---

## Adresses {#adresses}

Icônes possibles à côté d'une adresse :

- Maison ➝ Adresse principale ( possiblité d'en désigner 1 seule)
- Petite planète : permet de voir l'itinéraire

![](/img/AdressesExp_1.png)

### Ajouter une adresse d'expédition {#ajout-adresse}

- Cliquer sur **l'icône** ![](/img/Contacts_2_iconeajout.png)
- Remplir la fiche

**Remplissage automatique par Google : Abonnement requis** pour cette [fonction](../fonctionnalites-generales/recherche-adresse.md).
 ![](/img/Googlemaps.png)
     
  Adresse à compléter ⤵️ les champs marqués d'une [étoile](../fonctionnalites-generales/champs.md#champs-obligatoires) sont obligatoires.
  
  À noter que si la sélection d'un pays fait en sorte qu'il n'y a pas de province liée, le champ Province ne sera pas obligatoire. 
  Par défaut, le Canada et le Québec sont inscrits dans les cases Pays et Province.
 
  ![](/img/AdressesExp_2_creation.png)

- **Enregistrer**

### Consulter, modifier ou supprimer une adresse {#consulter-adresse}

- Consulter

  - cliquez sur une des adresses pour afficher sa fiche
  - cliquez sur Enregistrer pour fermer la fenêtre

- Modifier

  apportez vos modifications dans la fiche et **Enregistrer**

- Supprimer

  dans la fiche, cliquez sur **Supprimer** Si le bouton est grisé, impossible de faire la suppression car l'adresse est utilisée dans le système.

---

## Notes {#notes}

Les [notes](../fonctionnalites-generales/notes.md) ajoutées ici seront visible dans le haut de tous les modules où le client est utilisé.

### Ajouter une note {#ajout-note}

1. Cliquez sur l'onglet Notes
2. Cliquez sur **l'icône** ![](/img/Contacts_2_iconeajout.png)

Sélectionnez une catégorie.

Suivre les [instructions suivantes](../fonctionnalites-generales/notes.md#notes-actions).

![](/img/Notes_1.png)

![](/img/Notes_2.png)

Pour consulter, modifier, supprimer une note ou insérer et consulter des pièces jointes, vous référez à cette [section](../fonctionnalites-generales/notes.md#notes-actions).

---

### Actions diverses {#actions}

#### En mode [consultation](../fonctionnalites-generales/navigation.md#mode-consultation)

![](/img/Clients_actions.png)

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

## Autres fonctionnalités {#autres}

Dans l'onglet **Facture.**

### Mettre à jour le total des ventes {#maj-total-ventes}

L'actualisation des totaux ne se fait pas automatiquement.

Cliquez pour actualiser le total des ventes pour les 5 dernières années.
![](/img/Clients_facture_refresh.png)

### Créer une facture {#creation-facture}

Suivre les étapes de la [création](../post-production/factures.md#creation) de nouvelle facture.

---

## Vidéo démo du module {#video}

[https://www.youtube.com/watch?v=y99c8--Omm0](https://www.youtube.com/watch?v=y99c8--Omm0)
