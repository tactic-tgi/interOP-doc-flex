---
id: soumissions
slug: /estimation/soumissions
title: Soumissions
---

---

## Survol {#survol}

Parfait pour l’estimation facile et complète du coût d’un travail (main-d’œuvre, matériaux et sous-traitance) et la transmission des propositions aux clients.

Les paramètres de calcul sont entièrement personnalisables afin de refléter vos méthodes de calcul existantes.

Ouverture du module en [mode liste](../fonctionnalites-generales/navigation.md#mode-liste)

Par défaut, le [filtre](../fonctionnalites-generales/navigation.md#filtres-tris) est à statut : En calcul + Envoyée + Imprimée.

![](/img/Soumissions_01.png)

### Statut {#statut}

En mode [consultation](../fonctionnalites-generales/navigation.md#mode-consultation), le statut d'une soumission est indiqué dans le coin supérieur droit.

- En calcul

  Toujours en cours, pas encore envoyé au client ou lancé en production.

- Envoyée

  Soumission envoyée au client par courriel.

- Lancée

  Soumission lancée en production.

- [Modèle](../estimation/soumissions.md#types)

---

N'oubliez pas que tous les temps, coûts etc. proviennent de vos [Standards](../parametres/standards.md).

### Créer une soumission {#creation}

Cliquez sur **Créer une soumission** et choisissez un type.

N'oubliez pas de remplir tous les [champs obligatoires](../fonctionnalites-generales/champs.md#champs-obligatoires).
Si des champs sont manquants, vous verrez un message lorsque vous sortirez de la soumission en cours.
Vous pourrez cliquer sur Corriger pour voir les champs en surbrillance (contour rouge). Voir section [Composantes](../estimation/soumissions.md#infos-supplementaires).

### Types de soumission {#types}

- Régulière
- Modèle

  Sert de modèle de base duquel repartir pour créer une nouvelle soumission (dupliquer), permet de sauver du temps et d'avoir des soumissions uniformes. Les items d'une soumission modèle ne peuvent être ni révisés ni servir pour la création d'un dossier.


### Numérotation {#numerotation}

Comme dans la plupart des modules, vous avez accès à définir la numérotation de vos soumissions ainsi que de vos modèles (Numéro alternatif de série).
Veuillez vous rendre dans les [Paramètres Système](../parametres/systeme.md#numerotations) pour les modifier. 


## Informations de base {#infos-base}

La portion du **haut** contient les informations de base de la soumission.

### Vendu à

![](/img/Soumissions_04.png)

### Facturé à

![](/img/Soumissions_05.png)

### Divers

![](/img/Soumissions_06.png)

Si la soumission sur laquelle ont se trouve est le résultat d'une duplication, vous pouvez naviguer vers la soumission originale en cliquant sur `Duplicata` et ensuite, sur la ligne de la soumission. 

![](/img/Soumission_duplicata.gif)

#### Pour changer le client

Cliquez sur la **loupe** ![](/img/Soumissions_loupe.png) pour faire une recherche et sélectionnez un client.

![](/img/Soumissions_07.png)

Si le client est manquant, veuillez aller le créer dans le module [Clients](../contacts/clients.md#creation).

#### Pour éditer le contact

Cliquez sur le **crayon.**

![](/img/Soumissions_08.png)

Les changements apportés lors de l'édition du contact seront appliqués dans le système au complet.

![](/img/Soumissions_09.png)

La portion du **bas à gauche** contient des informations relatives au projet.

![](/img/Soumissions_10.png)

### Notes générales {#notes-generales}

Cette section de notes est propre à la soumission et ne sera pas transférée au dossier de production.

#### Ajouter une note

Cliquez sur **l'icône**![](/img/Contacts_2_iconeajout.png)

![](/img/Soumissions_11.png)

Pour consulter, modifier, supprimer une note ou insérer et consulter des pièces jointes, vous référez à cette [section](../fonctionnalites-generales/notes.md#notes-actions).

### Notes de production {#notes-production}

Des cases de notes sont disponibles pour chaque section de la soumission (Prépresse, Infographie, Impression, Support) et seront associées au dossier de production correspondant.
![](/img/Soumissions_Notes03.png)

Cliquer sur cet icône pour faire afficher la case de notes.

Aucune note : icône grisé

![](/img/Soumissions_Notes01.png)

Contient des notes : icône en couleur

![](/img/Soumissions_Notes02.png)

---

## Items {#items}

Une soumission doit contenir au minimum un item.

Consultez la section [Actions diverses](#actions) pour découvrir les actions possibles pour un item (duplication, révision, etc).

Cliquez sur la ligne d'un des items pour consulter sa fiche, apporter des modifications et le supprimer.

#### Masquer un item de la proposition

Cliquez sur l'oeil pour que le l'item soit masqué de la proposition client; il deviendra alors rouge. Re-cliquez dessus pour faire afficher l'item sur la proposition.

![](/img/Soumissions_12.png)

Fonctionnalité **⤵️**

Maintenez \[ CTRL sur PC ou Command sur Mac\] + cliquez sur l'oeil pour faire afficher seulement cet item. Tous les autres seront masqués, et ce, peu importe si l'item sur lequel on clique était masqué ou non avant le clic.

#### Dossier lié

Si l'icône dossier est visible, c'est qu'un dossier de production a été ouvert pour cet item. Cliquez dessus pour l'afficher.

![](/img/Soumissions_13.png)

### Créer un item {#creation-item}

Cliquez sur l'icône ![](/img/Contacts_2_iconeajout.png)

![](/img/Soumissions_14.png)

#### Nouveau

Sélectionnez un item.

![](/img/Soumissions_15.png)

Inscrivez vos quantités.

![](/img/Soumissions_16.png)

Remplissez les informations de la [composante.](../estimation/soumissions.md#composantes)

#### Depuis un modèle

Créer un item depuis un [modèle existant](../estimation/soumissions.md#types) viendra créer automatiquement l'item et ses [composantes](../estimation/soumissions.md#composantes)
. Modifiez au besoin les informations.

![](/img/Soumissions_17.png)

### Quantité(s) {#quantites}

Il est possible de modifier une quantité déjà existante ou d'en ajouter de nouvelles en cliquant sur le ![](/img/Contacts_2_iconeajout.png)

![](/img/Soumissions_18.png)

---

## Composantes {#composantes}

Chaque item doit contenir au minimum 1 composante.

Ce sont la ou les composantes qui composent l'item lié.

À tout moment il est possible de **Supprimer**, **Dupliquer** une composante, en passant par le menu Actions. L'enregistrement des données se fait de façon automatique, dès que vous sortez d'une case.

![](/img/Soumissions_19.png)

### Informations supplémentaires {#infos-supplementaires}

- Informations communes versus informations modifiables (selon quantité)

  **Communes ➝** Informations de base communes peu importe la quantité.

  Exemple onglet Prépresse
  ![](/img/Soumissions_21.png)

  **Modifiables ➝** Certaines informations sont modifiables selon la quantité. On peut les modifier dans les onglets où les options de quantités sont visibles dans le haut.

  Exemple onglet Support & Impression
  ![](/img/Soumissions_22.png)

- Valider une composante en la quittant

  Bien que l'enregistrement des données se fassent automatiquement, dès que vous sortez d'une case, une validation a été mise en place lorsque vous quittez la fenêtre de la composante.

  Pour sortir, vous pouvez utiliser les petites inscriptions en haut, pour reculer aux items ou bien reculer à la soumission. Si vous utilisez la flèche du haut, vous reculez d'un écran à la fois, jusqu'à pouvoir revenir à la liste des soumissions.

  ![](/img/Soumissions_23.png)

  Si la composante est incomplète ou s'il y a des incongruités, vous aurez ce message d'erreur.
  ![](/img/Soumissions_02.png)

  **Corriger :** vous devez corriger l'information encadrée en rouge. N'oubliez pas de remplir tous les [champs obligatoires](../fonctionnalites-generales/champs.md#champs-obligatoires).

  ![](/img/Soumissions_03.png)

  **Sortir** : il est possible de sortir de l'enregistrement sans le corriger. Par contre, il ne sera pas possible de se rendre au Sommaire et d'envoyer la soumission au client tant qu'il ne sera pas corrigé.

  Cet icone indique que la ligne contient des informations erronées et/ou des [champs obligatoires](../fonctionnalites-generales/champs.md#champs-obligatoires) non remplis.

  ![](/img/triangle_rouge.png)

  ![](/img/Soumissions_24.png)

### Informations de base {#infos-bases}

Remplir les informations.

Selon le procédé d'impression choisit, les champs [obligatoires](../fonctionnalites-generales/champs.md#champs-obligatoires) sont différents.

- Exemple des informations de base d'un dépliant

  ![](/img/Soumissions_20.png)

### Dessin d'imposition {#dessin}

Cliquez sur le **crayon** situé à côté du champ **Ups** pour afficher le dessin d'imposition.

![](/img/Soumissions_25.png)

Les valeurs des marges et du **bleed** peuvent être modifiées selon vos besoins. En cas d’ajustements, cliquez sur **Utiliser Ups et Bleed du dessin** pour valider les modifications.

![](/img/Soumissions_26.png)

Le bouton avec les deux flèches permet de pivoter l'item pour valider l'optimisation de son format, dans la grandeur de feuille d'impression que vous avez pour votre composante.

![](/img/Soumissions_27.png)

### Prépresse {#prepresse}

La portion **Infographie** permet d'ajouter du temps additionnel pour le traitement des fichiers.

Exemple ➝ Du graphisme, de la mise en page, de la calibration de couleurs etc.

![](/img/Soumissions_28.png)

- Il est possible d'avoir plusieurs épreuves par composante.

  Cliquez sur **l'icône**![](/img/Contacts_2_iconeajout.png)
  ![](/img/Soumissions_29.png)

  
  Le prix vendant unitaire et les frais de départ proviennent des [standards des épreuves](../parametres/standards.md#epreuves), mais vous pouvez également figer un montant manuellement.
  ![](/img/Soumissions_30_epreuves.png)


### Plaques {#plaques}

Section disponible seulement lorsque le procédé d'impression utilise des plaques. Sinon, l'onglet sera masqué et l'information "plaques/blanchets" sera masquée au sommaire.

![](/img/Soumissions_30.png)

### Support & Impression {#impression}

Cette section contient tous les détails relatifs au support à imprimer et l'équipement d'impression.

#### Support à imprimer

![](/img/Soumissions_31.png)

#### Impression

![](/img/Soumissions_32.png)

Pour voir le détail des clics (impression numérique), appuyez sur le petit crayon. 

![](/img/Soumission_impression_clics.gif)

### Opérations et emballages {#operations-emballages}

Ici les opérations et l'emballage sont propres à une composante.

![](/img/Soumissions_33.png)

#### Opérations

La procédure pour ajouter une nouvelle opération est la même que pour les [opérations globales](../estimation/soumissions.md#operations-globales).

Une seule différence est visible : l'encadré informatif **Composante visée**.

- Interne

  ![](/img/Soumissions_34.png)

- Externe

  ![](/img/Soumissions_35.png)

- **Notion pour la coupe** : Omettre couteau avant ou après auto.

  ![](/img/Soumissions_36.png)

:::note
  Le système évalue systématiquement la nécessité de **couteau avant et/ou après** impression et créera une opération automatiquement. Dans certains cas, il est possible que vous n'en ayez pas besoin, dans ces cas précis cochez la case. Cela évite un recalcul constant.

  Exemple ➝ la coupe peut ne pas être nécessaire pour le numérique ou si le travail est découpé.

  L'opération de coupe avant se créera toujours au début de la liste, puisqu'elle doit être faite avant l'impression. 

:::

#### Emballages

La procédure pour ajouter un nouvel emballage est la même que pour les [emballages globaux](../estimation/soumissions.md#emballages-globaux).

---

## Opérations globales {#operations-globales}

Ici les opérations sont globales pour l'item.

![](/img/Soumissions_37.png)

Pour ajouter une nouvelle opération, cliquez sur **l'icône**![](/img/Contacts_2_iconeajout.png)

![](/img/Soumissions_38.png)

Vous pouvez choisir d'activer le calcul pour toutes les quantités ou juste pour certaines (exemple : au-delà de 500 dépliants, vous voulez faire plutôt une demande de prix à un fournisseur externe en sous-traitance, vous allez donc désactiver la quantité de 1000 dans l'exemple ci-dessous).

![](/img/Soumissions_Opinterne_qteactive.gif)


### Interne {#interne}

Sélectionnez une famille d'opération. Ici on choisit **Pliage sur plieuse**.

![](/img/Soumissions_39.png)

Sélectionnez une opération. Ici on choisit **Pliage 6 pages accordéon.**

![](/img/Soumissions_40.png)

Remplir les informations dans l'écran.

![](/img/Soumissions_41.png)

- Externe

  Sélectionnez une famille d'opération. Ici on choisit **Reliure Externe**.
  ![](/img/Soumissions_42.png)

  Sélectionnez une opération. Ici on choisit **Broché à cheval**.

  ![](/img/Soumissions_43.png)

  Remplir les informations dans l'écran, en choisissant le fournisseur.
  ![](/img/Soumissions_44.png)

  Pour créer ou ajouter une demande de sous-traitance , cliquez sur le bouton Actions

  ![](/img/Soumissions_45.png)

  **Créer une demande** : vous référez à cette [section](./sous-traitances.md)

  Pour lier l'opération à une demande déjà existante, cliquez sur **Lier une demande** et sélectionnez la dans la liste.

Pour modifier et/ou supprimer une opération globale, cliquez sur sa ligne pour l'ouvrir et pour le supprimer, appuyer sur Supprimer dans le menu Actions.

---

## Emballages globaux {#emballages-globaux}

Ici l'emballage est global pour l'item.

![](/img/Soumissions_46.png)

- Ajouter un emballage

  Cliquez sur **l'icône** ![](/img/Contacts_2_iconeajout.png), sélectionnez un produit\* et remplir les informations dans la nouvelle fenêtre.

  ![](/img/Soumissions_47.png)

Pour modifier et/ou supprimer un emballage, cliquez sur sa ligne pour l'ouvrir et pour le supprimer, appuyer sur Supprimer dans le menu Actions.

![](/img/Soumissions_48.png)

---

## Transports & Livraisons {#transports}

![](/img/Soumissions_49.png)

- Ajouter une livraison

  Cliquez sur **l'icône** ![](/img/Contacts_2_iconeajout.png), sélectionnez une région, puis le transporteur et remplir les informations dans la nouvelle fenêtre.

  ![](/img/Soumissions_50.png)

  ![](/img/Soumissions_51.png)

  :::tip
  Pour que votre menu soit plus complet et facile d'utilisation, rendez-vous dans les standards de transport pour ajouter une courte note et mieux identifier votre prix par transporteur. Suivre ce [lien](../parametres/standards.md#transport) pour plus de détails. 
  ![](/img/Standards_transporteur_03.png)
  :::

  ![](/img/Soumissions_52.png)

Pour modifier et/ou supprimer un transport, cliquez sur sa ligne pour l'ouvrir et pour le supprimer, appuyer sur Supprimer dans le menu Actions.



---

## Sommaire & Proposition {#sommaire-proposition}

Nous y accédons directement dans un item, en haut à droite. Permet de valider les coûts dans un sommaire entièrement web, ainsi que de réviser votre proposition client avant de l'envoyer par courriel.

![](/img/Soumissions_54.png)

#### Sommaire des coûts

Il est possible d'activer / désactiver des quantités pour ne plus les voir dans le sommaire en cliquant sur les quantités.
![](/img/Soumissions_53.png)

Chaque sous-section est fermée à l'ouverture du sommaire, mais elles peuvent toutes être ouvertes en cliquant sur les lignes respectives (Pré-presse, impression, opérations internes, opérations externes, logistique et totaux).

![](/img/Soumissions_55.png)

:::note
Si aucun procédé n'utilise des Plaques/blanchets ou des Encres, ces lignes seront masquées.
:::

Pour modifier les différentes valeurs qui auront un effet sur votre prix vendant, cliquez sur le bouton Éditer.
![](/img/Soumissions_56.png)


- Modifications

  - Majoration, Escompte et Frais d'ouverture peuvent être définis dans les [standards par défaut](../parametres/standards.md#matieres-parametres), mais peuvent aussi être propre à un client.
  - Commission peut être définit par défaut dans les [standards](../parametres/standards.md#matieres-parametres), mais peut aussi être propre à un [représentant](../parametres/utilisateurs.md#creation).

    ![](/img/Soumissions_Sommaire3.png)


#### Proposition client

Cliquez sur l'onglet **Proposition Client.**

Révisez et modifiez aux besoin les informations.
Le texte se génère de façon automatique une première fois. Pour ajuster du texte, cliquez dans la boîte, il deviendra orangé. Vous pouvez alors changer des termes ou ajouter des mots. 

![](/img/Soumissions_SommaireProp.png)


:::warning

Si vous supprimez tout le texte, la case sera alors vidée et le texte original ne sera pas reporté.

:::
 

![](/img/Proposition_texteManuel_1.png)
![](/img/Proposition_texteManuel_2.png)

#### Quantités et prix

Cliquez sur l'onglet **Quantités et prix** pour visualiser les prix par quantités et les unités utilisées (prix unitaire ou au mille)

Vous pouvez masquer des options de quantité à votre client, simplement en cliquant sur le petit oeil au bout de la ligne. 
![](/img/Proposition_masque.png)


Cliquez sur le bouton Actions en haut à droite pour **Envoyer** la proposition au client par [courriel](../fonctionnalites-generales/courriels.md) ou retourner à votre soumission par la flèche en haut à gauche.
![](/img/Proposition_envoi_retour.png)

:::note

Pour visualiser la proposition dans son ensemble (dans votre navigateur), avant de l'envoyer à votre client, retournez dans votre soumission et utilisez le bouton Actions puis "Visualiser la proposition". 

:::


---

## Actions diverses {#actions}

#### En mode consultation, fenêtre de la Soumission

- Dupliquer

Si vous avez plusieurs items sur une soumission, une fenêtre ouvrira pour sélectionner ceux que vous voulez dupliquer. 
Si un seul item existe, il sera automatiquement dupliqué. 

![](/img/Soumissions_dupliquer.png)

- Supprimer

  Si le bouton est grisé, impossible de faire la suppression.

- Déclarer comme perdue

  En mode liste, la ligne de soumission sera grisée. Il est possible de réactiver une soumission perdue.

- Visualiser ou Imprimer
  Ceci ouvrira la proposition dans un nouvel onglet de votre navigateur. Vous pourrez ainsi la télécharger ou l'imprimer.
  ![](/img/Soumissions_57.png)

  Si la soumission contient plusieurs items, la proposition client les affichera tous.

- [Courriel](../fonctionnalites-generales/courriels.md)
- Déclarer comme modèle

  N'importe quelle soumission peut être utilisée afin d'en faire un [modèle.](../estimation/soumissions.md#types)

  ![](/img/Soumissions_59.png)

#### Par item

- Dupliquer
- Réviser

  Si le bouton est grisé, impossible de faire l'action.

- Supprimer

  Si le bouton est grisé, impossible de faire la suppression.

- Créer dossier

  Permet de créer un [dossier](../production/dossiers.md) de production pour un item.

  Si le bouton est grisé, impossible de faire l'action.

  ![](/img/Soumissions_58.png)

---

## Vidéo démo du module {#video}

[https://www.youtube.com/watch?v=Pa3W76IVRNU](https://www.youtube.com/watch?v=Pa3W76IVRNU)
