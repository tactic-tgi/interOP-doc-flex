---
id: produits
slug: /achats/produits
title: Produits
---

---

## Survol {#survol}

Le module Produits permet de consigner toute l’information pertinente pour chaque papier ou autre substrat standard utilisé dans vos mandats. Ces données alimenteront les modules d’estimation et d’achats, ainsi que les réceptions et consommations.

Ouverture du module en [mode liste.](../fonctionnalites-generales/navigation.md#mode-liste)

Par défaut, le [filtre](../fonctionnalites-generales/navigation.md#filtres-tris) est à Actif.
Pour choisir un type, vous pouvez ajuster votre filtre ou bien utiliser la barre de recherche en haut pour trouver un papier spécifique, par exemple.

![](/img/Produits_01.png)

![](/img/Produits_02.png)

Fiche en mode [**consultation**](../fonctionnalites-generales/navigation.md#mode-consultation).

![](/img/Produits_03.png)

Chaque produit doit être associé à l'un des 7 types suivants : Emballage, Enveloppe, Film, Général, Grand format, Papier, Reliure documents.

---

## Nouveau produit {#nouveau-produit}

Cliquez sur **Créer un produit**, en haut à droite du mode liste.

- Sélectionner un type de produit

![](/img/Produits_04.png)

- Sélectionner une catégorie

  Les catégories sont définies dans vos [standards.](../parametres/standards.md#matieres-categories)

  Par exemple ici, après avoir sélectionné le type Papier, nous avons plusieurs catégories de ce type et il suffit d'en choisir une pour poursuivre la création.

  ![](/img/Produits_10.png)

Finaliser l'entrée des données de votre produit, en lui donnant une description, un format, etc.
Les couleurs et finis sont définis dans vos [standards.](../parametres/standards.md#couleurs)

Il est primordial que tous les champs marqués d'une [étoile](../fonctionnalites-generales/champs.md#champs-obligatoires) soient remplis, car ils sont obligatoires. Contrairement aux fenêtres d'édition, vous ne serez pas bloqués si vous ne le faites pas, mais vous devez savoir que cela aura un impact négatif dans un autre module.

    ![](/img/Produits_05.png)

Pour préciser le nom que vous voudrez donner à la soumission (client) et au dossier de production (interne), cliquer sur le nom en haut pour faire ouvrir une fenêtre d'édition.

    ![](/img/Produits_06.png)

Chaque produit doit avoir au moins un fournisseur de base avec un prix coûtant et son unité d'achat.
Vous devez identifier quel fournisseur sera celui par défaut et qui servira à bâtir le prix vendant pour la soumission.

La devise utilisée est en lien avec le fournisseur, au besoin, vous rendrez dans le module Fournisseurs pour l'ajuster.
![](/img/Produits_07.png)

      ![](/img/Produits_11.png)

Pour ajouter ou éditer un prix d'un fournisseur, cliquez sur la ligne pour ouvrir la fenêtre d'édition.
![](/img/Produits_editionPrixFournisseur.png)

### Choix d'une unité (coûtant / vendant) et facteur de conversion {#unite}

Que ce soit pour le coûtant (prix de votre fournisseur) ou le vendant (prix de la soumission), vous pouvez sélectionner des unités qui sont pertinentes à un type de produit.
Par exemple, un papier numérique n'aura pas les choix de pouces carrés, mais plutôt le choix "Mille", au "100 lbs" ou à l'unité.
Inversement, une boîte d'emballage aura seulement un choix "Unité".

Le facteur de conversion sert à calculer le prix unitaire. Par exemple, si vous commandez par boîte de 100 items, mais que vous vendez votre item en unité, il faudra alors inscrire 100 dans le facteur de conversion pour que le prix se divise par la bonne quantité.

Une note apparaitra si une conversion automatique est possible et à ce moment, vous n'aurez pas besoin d'inscrire le facteur, car le système calculera le bon prix unitaire.

      ![](/img/Produits_Unite_1.png)

### Modifier un produit {#modifier}

Simplement modifier les informations directement dans la fiche du produit.

Aucune sauvegarde n'est nécessaire.

### Vêtements {#vetements}

Puisque la définition d'un produit Vêtements est un peu particulière, nous avons prévu une section pour ce type.

- Vous pouvez définir un prix par grandeur dans les fournisseurs.

  - Les grandeurs sont les suivantes : OS (one size), S, M, L, XL, 2XL, 3XL et 4XL
  - Vous pouvez également copier-coller l'URL de votre produit sur le site web de votre fournisseur.
    ![](/img/Vetements_01a.png)

- Il est possible d'attribuer un modèle aux vêtements (homme, femme, enfants, unisexe).
  ![](/img/Vetements_02.png)
  ![](/img/Vetements_06.png)

- Ces modèles peuvent être gérés dans les [Standards](../parametres/standards.md#modeles)
  ![](/img/Vetements_Modeles_01.png)

- Les prix coûtant et vendant sont affichés dans des nouveaux "popover", étant donné la possibilité d'en avoir plusieurs.
  ![](/img/Vetements_04.png)
  ![](/img/Vetements_05.png)

- Dans la liste virtuelle, s'il y a plusieurs prix différents par grandeur, le prix le plus élevé sera affiché.
  ![](/img/Vetements_08.png)

---

## Historique de commande {#historique}

Permet de consulter l'historique de commande par produit.

Cliquez sur une ligne pour consulter la commande.

    ![](/img/Produits_08.png)

---

## Actions diverses {#acions}

#### En mode consultation

- Modifier le code de produit

  Suivre les étapes à l'écran

  Souvent cette étape sera réservée à certains utilisateurs seulement.

- Rendre actif/inactif

  Inactif : le produit apparaitra grisé dans la liste

- Supprimer

  Si le produit a été utilisé dans le système, la fiche ne pourra être supprimée, rendre plutôt le produit **Inactif**.

- Dupliquer
- Valider prix

  Cliquez pour inscrire la date du jour comme validation. L'information se retrouve dans le coin inférieur droit de la fiche du produit ou dans la colonne date validation en mode liste.

      ![](/img/Produits_09.png)

---

## Autres {#autres}

### Majoration {#matieres-parametres}

À définir seulement si vous souhaitez un pourcentage fixe et différent du standard de base.

Sinon, le pourcentage par défaut sera celui saisi dans vos [standards](../parametres/standards.md#matieres-parametres), au moment de la soumission.

### Modification de prix {#modifications-prix}

Permet de modifier le prix sur plusieurs produits en même temps ou individuellement.

Consultez cette [section](../achats/gestion-prix.md) pour plus d'informations.

---

## Vidéo démo du module {#video}

[https://www.youtube.com/watch?v=O6KTExyDvww&t=4s](https://www.youtube.com/watch?v=O6KTExyDvww&t=4s)
