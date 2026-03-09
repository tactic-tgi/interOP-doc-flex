---
id: commandes
slug: /achats/commandes
title: Commandes
---

---

## Survol {#survol}

Un outil essentiel pour créer des bons d’achat de sous-traitance ou de matières premières. Pourquoi ne pas imprimer les formulaires ou mieux encore les sauvegarder en format pdf avec envoi automatisé en pièce jointe d’un courriel? En quelques clics, tout est réglé.

![](/img/Commandes_01.png)

Ouverture du module en [mode liste](../fonctionnalites-generales/navigation.md#mode-liste).

Par défaut, le [filtre](../fonctionnalites-generales/navigation.md#filtres-tris) est à statut : En préparation + Envoyée + Reçue partiellement.

![](/img/Commandes_02.png)

---

## Création d'une commande {#creation}

- Cliquez sur **Créer une commande** en haut à droite de la liste, puis choisissez le type : lignes de commande ou bloc de texte. 

  ![](/img/DemandePrix_Commande_15.png)

- Sélectionnez un fournisseur

  ![](/img/Commandes_03.png)

- La création de votre commande se fera automatiquement.

Remplir les informations manquantes dans le haut de la fenêtre.

![](/img/Commandes_04.png)

### Lignes de commande {#lignes}

Utilisé pour entrer des produits à commander comme du papier, de la quincaillerie, etc. 
Chaque ligne a sa quantité, son prix et sa description. 

### Ajouter une ligne de commande {#ajout-ligne}

- Cliquez sur **l'icône**![](/img/Contacts_2_iconeajout.png) et choisir si vous voulez :

![](/img/Commandes_05.png)

- créer une ligne **depuis un produit**

  - sélectionnez un produit en cliquant sur sa ligne
    ![](/img/Commandes_06.png)
  - inscrire une quantité
  - au besoin, sélectionnez un dossier et un compte GL associé
    ![](/img/Commandes_07.png)

- créer une **ligne manuelle** : remplir la description, quantité et autres informations pertinentes au besoin.
  ![](/img/Commandes_09.png)

Ajoutez une note au besoin, dans le bas de la fenêtre de commande. Elle se retrouvera sur le formulaire envoyé au fournisseur.

![](/img/Commandes_10.png)

À noter que vous pouvez également créer une ligne de commande en vous trouvant dans la fenêtre d'édition des lignes de commandes.

![](/img/Commandes_13.png)

### Bloc de texte {#blocs}
Utilisé surtout pour les demandes de sous-traitance, car ça vous permet de saisir une information condensée dans un bloc, qui fera pratiquement votre page entière sur le formulaire imprimé. 

![](/img/DemandePrix_Commande_12.png)

Pour éditer le bloc texte, vous devrez appuyer sur le bouton `Éditer la commande`.

![](/img/DemandePrix_Commande_13.png)

Pour avoir un aperçu du texte sans passer par votre formulaire imprimé, et vous assure ainsi que rien ne sera coupé, vous pouvez appuyer sur la petite icône dans le coin droit (flèches).

![](/img/DemandePrix_Commande_14.png)

Pour plus de détail sur la création d'une commande depuis une demande de sous-traitance, veuillez consulter la [section](../achats/commandes.md#soustraitance) plus bas. 

### [Réquisitions](../achats/requisitions.md) {#requisitions}

Onglet **Lignes de commande**

Cliquer sur la ligne du produit, puis cliquer sur le bouton **Calculatrice** afin de remplir automatiquement les quantités des lignes de commande à partir des réquisitions associées. Si vous ne commandez pas la même unité que celle utilisée pour faire la soumission et la réquisition, entré simplement la quantité et changer l'unité (ex : soumission aux pieds carrés mais achat en rouleau).

![](/img/Commandes_14.png)

Onglet **Réquisitions**

Affiche les réquisitions liées à la commande, lorsque celles-ci ont été utilisées lors de sa création.

![](/img/Commandes_12.png)

---

## Changement du fournisseur {#changement-fournisseur}

Si vous avez des lignes de commandes créées à partir d'un produit existant, vous ne pourrez plus changer le fournisseur (la loupe disparaitra). La raison est que les produits sont toujours liés à un fournisseur.

Pour changer de fournisseur, vous devrez supprimer les lignes et les refaire manuellement.
Au besoin, vous rendre dans le produit en question pour ajouter un second fournisseur en plus de celui qui est choisi par défaut (favori).

![](/img/Produits_07.png)

## Compléter une commande {#completer-commande}

Le statut de la commande restera à "En préparation", le temps que la réception de la marchandise soit faite.

Lorsque le magasiner reçoit les items, il doit se rendre dans un des items et cocher la case "Complet" sur tous les items reçus. Si une ou des réquisitions étaient liées à cette commande, leur statut changera pour **Reçu**.

La commande passera alors au statut **Complétée**.

![](/img/Commande_complet.gif)


## Commande avec produits inactifs {#inactif}

Si une commande contient des produits inactifs, ceux-ci seront grisés, mais n'empêcheront aucune action comme la duplication ou l'envoi d'une commande.

Toutefois, un message d'avertissement sera présent pour avertir l'usager et éviter ainsi des erreurs.

Idéalement, le produit devrait être réactivé par l'acheteur ou le gestionnaire, pour qu'il puisse être utilisé sur une prochaine commande et que son prix soit confirmé. 

![](/img/Commandes_ProduitInactif_01.png)

![](/img/Commandes_ProduitInactif_02.png)


## Commande de sous-traitance {#soustraitance}

Si vous aviez fait une demande de sous-traitance au moment de votre soumission et que vous voulez ensuite créer une commande liée à celle-ci, vous pourrez le faire directement à partir du dossier. Voir cette [section](../production/dossiers.md#soustraitance).

Dans l'icône en haut à droite, vous aurez votre lien vers la demande de sous-traitance et le dossier, vous pourrez donc vous y rendre rapidement et naviguer d'un à l'autre.

![](/img/DemandePrix_lienversSTR.png)



---

## Actions diverses {#actions}

#### En mode [consultation](../fonctionnalites-generales/navigation.md#mode-consultation)

- Modifier le numéro de la commande

  Suivre les étapes à l'écran

- Dupliquer
- Annuler / Réutiliser la commande

  une commande annulée peut être réutilisée.

- Visualiser pdf : un nouvel onglet ouvrira dans votre navigateur, pour visualiser et/ou imprimer et/ou télécharger votre commande.

  ![](/img/Commandes_11.png)

- Imprimer
- Envoyer par courriel

  suivre les instructions de [courriels](../fonctionnalites-generales/courriels.md).

  impossible d'envoyer une commande Annulée par courriel, le bouton sera grisé

---

## Vidéo démo du module {#video}

[https://www.youtube.com/watch?v=UNP2lrJgqVg](https://www.youtube.com/watch?v=UNP2lrJgqVg)
