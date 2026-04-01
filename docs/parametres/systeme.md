---
id: systeme
slug: /parametres/systeme
title: Système
---

---

## Survol {#survol}

Cette section du logiciel vous permet de le personnaliser selon votre entreprise.

Tout changement ici, sera reproduit ailleurs dans le logiciel.


---

## Personnalisation du logiciel {#personnalisation}

### Coordonnées {#coordonnees}

Ajouter ici vos entités commerciales : chaque société a ses propres coordonnées, sa propre adresse, ses logos ainsi qu'une liste visuelle des différents clients et fournisseurs qui lui sont associés.

Vous pouvez créer autant d'entités commerciales que vous souhaitez et en définir une par **défaut**. Ceci fera en sorte qu'à la création d'un client ou fournisseur, c'est cette entité qui lui sera associée.

Si une entité commerciale est associée à un client ou un fournisseur, celle-ci ne pourra pas être supprimée. Elle pourra toutefois être désactivée.

![](/img/Parametres_Systeme_1.png)

Lorsqu'on clique sur une ligne du portail, on ouvre une fenêtre d'édition de l'entité.
Veillez à bien remplir toutes les informations dans les 3 premiers onglets.

![](/img/Parametres_Systeme_1b.png)
![](/img/Parametres_Systeme_1c.png)
![](/img/Parametres_Systeme_1d.png)

Les onglets Clients et fournisseurs vous permettent de voir en un coup d'oeil les clients et fournisseurs associés à cette entité. 
![](/img/Parametres_Systeme_1e.png)
![](/img/Parametres_Systeme_1f.png)

Pour associer une entité commerciale à un client ou un fournisseur, il suffit de se rendre dans sa fenêtre d'édition, onglet "Informations additionnelles", puis de trouver la rubrique "Entité commerciale associée". Suivre ce [lien](../contacts/clients.md#informations-additionnelles) au besoin. 

Lorsqu'une entité commerciale est associée à un client/fournisseur, les formulaires officiels qui seront produit pour celui-ci (soumissions, expéditions et factures) porteront les logos et adresses de l'entité sélectionnée.

![](/img/Parametres_Systeme_1g.png)

### Textes / Modèles de courriels {#courriels}

Gérez ici les différents textes/salutations qui apparaitront par défaut sur la proposition aux clients.

![](/img/Parametres_Systeme_3.png)

Voici la liste des modèles disponibles et utilisés dans le logiciel lors de l'envoi d'un courriel.

![](/img/Parametres_Systeme_3a.png)

Afin d'uniformiser vos envois courriels, veuillez remplir chacun des modèles.

Utilisez les données variables admissibles pour les personnaliser.

**Exemple** : Avis d'expédition

![](/img/Parametres_Systeme_3b.png)

### Messages sur formulaires {#formulaires}

Gérez ici les messages qui apparaitront par défaut sur les formulaires d'envois aux clients.

Vous avez la possibilité, pour chaque message, de les faire afficher sur :

- la proposition de prix au client
- le bon d'expédition
- la facture

![](/img/Parametres_Systeme_4.png)

### Traductions {#traductions}

Ayez la latitude de modifier les termes qui apparaissent sur les différents formulaires envoyés aux clients.

![](/img/Parametres_Systeme_5.png)

### Numérotations {#numerotations}

Personnalisez la numérotation de vos différents modules.

Le Numéro alternatif de série sert à définir la séquence de vos factures finales, puis vos modèles de soumissions.

![](/img/Parametres_Systeme_6.png)

### Valeurs par défaut {#defauts}

Définir les valeurs par défaut de votre système.

![](/img/Parametres_Systeme_7.png)

### Listes de valeurs modifiables {#listes-valeurs}

Ces listes peuvent être modifiées. Elles apparaissent comme menu déroulant dans différents modules.

![](/img/Parametres_Systeme_8.png)

### Gestion des pays, provinces et devises {#pays-provinces}

Pour rendre **actif** un Pays, une Province ou une Devise cliquez sur le bouton au bout de la ligne.

![](/img/Parametres_Systeme_9.png)

---

## Comptabilité {#comptabilite}

Cette section permet la configuration selon votre logiciel de comptabilité.

### Devises {#devises}

Le bouton **Synchroniser avec Passerelle** récupère les taux en vigueur pour la journée. Ces taux sont actualisés une fois par jour via la passerelle. Ainsi, même si vous cliquez plusieurs fois sur le bouton de mise à jour, les taux resteront inchangés jusqu'au jour suivant.

Taux de base et supplément d'achat

Le taux de base représente le taux "réel" des devises.

Afin de se protéger contre les fluctuations, il est possible d'ajouter un supplément au taux d'achat. Par exemple, si le taux est de 1,5, vous pouvez ajouter 0,05 pour obtenir un taux d'achat de 1,55. Cela permet d'absorber une variation de 5% sans impacter le prix prévu.

Paramètres modifiables

- Le supplément appliqué au taux d'achat
- Le suffixe de la devise

![](/img/Parametres_Systeme_10.png)

### Taxes {#taxes}

Dans cette section, déterminez les éléments suivants :

- Numéro TPS / TVQ
- Groupes de taxes

![](/img/Parametres_Systeme_11.png)

### Paiements & Crédits {#paiements}

Dans cette section, déterminez les éléments suivants :

- Termes de paiements
- Modes de paiements
- Types de marge de crédit
- Montant de la marge par défaut
- Devises - unité monétaire

![](/img/Parametres_Systeme_12.png)

### Comptes {#comptes}

Inscrivez la liste de vos comptes GL (Revenus et Dépenses).

![](/img/Parametres_Systeme_13.png)

### Factures {#factures}

Cochez la case pour faire apparaitre le numéro de dossier sur vos formulaires de facturation. 

Également, à cet endroit, vous pourrez définir vos frais extra que vous voudrez utiliser au dossier, avant la facturation finale.

À noter qu'il est obligatoire de saisir un **compte GL ou Produits** pour que le frais soit correctement utilisable au dossier de production. 
S'il n'est pas rempli, l'utilisateur aura un message d'erreur au moment de l'ajouter au dossier.

Par contre, le prix unitaire est facultatif. 

![](/img/Facturation_NoDossier_02.png)
![](/img/Facturation_NoDossier_02b.png)



### Produits standards à facturer {#produits-facturation}

Section à compléter si vous travaillez avec des produits dans votre système comptable.

À noter que certains systèmes comptables permettent d'aller chercher directement les produits dans celui-ci (par exemple : Quickbooks). À ce moment, le bouton pour ajouter un nouveau produit ne sera pas présent, vous aurez plutôt une synchronisation à faire. 

![](/img/Parametres_Systeme_14.png)

---
## Expédition {#expeditions-param}

### Paramètres {#expeditions-parametres}

Choisir ici l'unité de mesure habituelle de vos colis (information utilisée sur étiquettes d'expédition) et inscrivez l'adresse courriel de votre département d'expédition. 
Elle servira lors de l'envoi de confirmation de livraison par courriel ou bien pour passer des commandes à votre transporteur (si abonnement APIs Expédition).

![](/img/Parametres_Systeme_15_param.png)


### Transporteurs {#transporteurs}

Gestion de vos différents transporteurs. 

Lorsque ceux-ci sont liés à l'Api Expédition, vous ne pourrez pas supprimer le transporteur, mais vous pourrez le désactiver pour l'exclure de vos menus. 
Vous pouvez ajouter des transporteurs en utilisant **l'icône** ![](/img/Contacts_2_iconeajout.png) en haut à droite.

![](/img/Parametres_Systeme_15.png)

## Applications connectées {#applications}

### Apis Expédition (Abonnement requis) {#apis-expedition}

Nous pouvons connecter interOP à de nombreux services d’estimation des coûts de transport. Purolator, Flagship ou Shippo, choisissez ce qui vous convient le mieux. 

Avec l’une ou l’autre de ces intégrations directement dans interOP, vous pouvez obtenir des tarifs, demander des cueillettes et produire des étiquettes d’expédition chez les transporteurs offerts par ces services sans devoir quitter votre progiciel de gestion interOP. C’est une grande économie de temps qui permet de rentabiliser très vite ces connexions.

Pour informations : 
[https://tactic-tgi.com](https://tactic-tgi.com)
☎️ 1 800 960-4542
📧 [info@tactic-tgi.com](mailto:info@tactic-tgi.com)

![](/img/Parametres_Systeme_ApiEXP_2.png)

Dans cette fenêtre, vous pourrez choisir le format d'impression par défaut des étiquettes de votre transporteur (requis pour Shippo). 
![](/img/Parametres_Systeme_ApiEXP_1.png)


### Printnode {#printnode}

Système de gestion des imprimantes. Lié à votre compte Printnode, choisissez votre ordinateur et sur quelle imprimante vous voudrez imprimer par défaut.

![](/img/Parametres_Systeme_16.png)

### Calendrier Dayback (Abonnement requis) {#dayback}

Vous devez avoir activé le module pour avoir accès au calendrier Dayback. Voir section [calendrier](../production/calendrier.md) pour plus d'information.

Dans cette section, vous pourrez contrôler les statuts d'opérations qui se trouvent dans le calendrier.

![](/img/Parametres_Systeme_17_DB.png)
