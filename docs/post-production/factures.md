---
id: factures
slug: /post-production/factures
title: Factures
---

---

## Survol

Le module Facturation permet de produire des factures de vente selon la mise en forme souhaitée en rappelant le numéro d’un dossier, ce qui affiche automatiquement le nom du travail, la quantité commandée et le prix unitaire.

L’intégration avec votre logiciel comptable par notre passerelle de connexion \[interOP • Comptabilité\] permet par la suite de transférer automatiquement ces factures.

Ouverture du module en [mode liste](../fonctionnalites-generales/navigation.md#mode-liste).

Par défaut, le [filtre](../fonctionnalites-generales/navigation.md#filtres-et-tris) est à statut : Proforma - En préparation + Proforma - Envoyée + Finale - Prête pour envoi.

![](../../static/img/Facturation_01.png)

**En mode** [**consultation**](../fonctionnalites-generales/navigation.md#mode-consultation)

![](../../static/img/Facturation_02.png)

## Préfixe du numéro de facture

![](../../static/img/Facturation_03.png)

**PF** : Indique qu'il s'agit d'une facture pro forma. Elle sert principalement à informer l'acheteur des coûts estimés avant la transaction finale. Ceci n'est pas une facture finale.

---

## Création d'une facture

- Cliquez sur **Créer une facture** en haut à droite de la liste.

### Depuis un dossier

    Sélectionnez un dossier à facturer. Vous pouvez utiliser le filtre pour isoler un client ou trouver un dossier facilement.

    ![](../../static/img/Facturation_04.png)



    La facture sera créée automatiquement.

    La **Qté facturée est** la quantité totale du dossier, à laquelle on soustrait les quantités qui pourraient avoir déjà été facturées pour ce dossier. Assurez-vous de la remplir si elle ne l'est pas déjà, en cliquant sur la ligne pour faire apparaitre la boîte d'édition.

    Également, selon votre logiciel comptable, déterminez un compte GL par ligne, s'il n'est pas déjà rempli ( préalablement défini dans le dossier.

    ![](../../static/img/Facturation_05.png)

    ![](../../static/img/Facturation_07.png)



    Assurez vous que le code de taxes est bien rempli.

    ![](../../static/img/Facturation_06.png)

### Nouvelle facture (vide, à partir d'un client)

    Sélectionner un client.

    ![](../../static/img/Facturation_09.png)



    La facture sera créée automatiquement.

    ![](../../static/img/Facturation_08.png)



    Assurez vous de remplir le code de taxes.

    ![](../../static/img/Facturation_10.png)

### Responsable facturation

Responsable de la facturation : Veuillez vous référer à la fiche [Clients](../contacts/clients.md#consulter-modifier-ou-supprimer-un-contact) pour voir votre contact de Facturation par défaut.

À noter qu'on ne peut avoir qu'un seul responsable facturation, mais on peut avoir autant de contact que l'on veut qui sont cochés "Facturation - Envoi courriel", un peu comme un utilisateur en CC dans un courriel.

Par défaut, le responsable de la facturation sera dans l'envoi courriel ainsi que tous ceux cochés dans "Envoi courriel". Si on ne coche aucun contact dans "Envoi courriel", le responsable de la facturation va quand même recevoir la facture.

## Ajouter une ligne de facture

Cliquez sur **l'icône**![](../../static/img/Contacts_2_iconeajout.png) et choisir l'option désirée.

Ne pas oublier que vous pouvez changer ensuite l'ordre des lignes à l'aide des flèches se situant à droite du portail.

![](../../static/img/Facturation_12.png)

### Depuis un dossier

    Sélectionnez un dossier : certaines informations seront recopiées automatiquement, comme la description et le numéro de commande.

    ![](../../static/img/Facturation_15.png)


    Remplir la quantité et tout autre information manquante.
    Cliquez sur Enregistrer et la ligne sera ajoutée.

    ![](../../static/img/Facturation_16.png)

### Depuis un produit

    Sélectionnez un produit et remplir les informations manquantes (quantité, prix) et cliquez sur Enregistrer.

![](../../static/img/Facturation_18.png)

    Une ligne va se créer.
    Pour éditer vos produits standards facturation, veuillez consulter la section [Paramètres](../parametres/systeme.md#produits-standards-à-facturer).

### Depuis un GL

    Sélectionnez un compte GL et remplir les informations (description, quantité, prix) et cliquez sur Enregistrer.

![](../../static/img/Facturation_17.png)

    Une ligne contenant le compte GL va se créer.
    Pour éditer vos comptes GL, veuillez consulter la section [Paramètres](../parametres/systeme.md#comptes-gl).

### Ligne de texte

    Une ligne vierge va se créer.

    Remplir les informations (description, quantité et prix), puis Enregistrer.
    Vous pouvez ajouter d'autres lignes de texte directement dans cette fenêtre, en cliquant sur **l'icône**![](../../static/img/Contacts_2_iconeajout.png)

    ![](../../static/img/Facturation_14.png)

## Messages

Le message au bas de la facture provient de vos [paramètres Système](../parametres/systeme.md#messages-sur-formulaires).

![](../../static/img/Facturation_11.png)

---

## Actions diverses

#### En mode consultation

- Produire facture finale : la facture proforma sera convertie en facture finale et transmise à votre logiciel comptable par l'API.

- Visualiser

- Envoyer par [courriel](../fonctionnalites-generales/courriels.md)

- Imprimer
- Créditer : si le bouton est grisé, c'est que la facture finale n'a pas encore été faite et envoyée dans le système comptable (elle est encore en proforma).

- Supprimer : si le bouton est grisé, impossible de faire la suppression.

![](../../static/img/Facturation_12.png)

---

## Vidéo démo du module

[https://www.youtube.com/watch?v=7EsPkFZrBQw](https://www.youtube.com/watch?v=7EsPkFZrBQw)
