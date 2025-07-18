# Factures

* * *

  

## Survol

  

Le module Facturation permet de produire des factures de vente selon la mise en forme souhaitée en rappelant le numéro d’un dossier, ce qui affiche automatiquement le nom du travail, la quantité commandée et le prix unitaire. 

L’intégration avec votre logiciel comptable par notre passerelle de connexion \[interOP • Comptabilité\] permet par la suite de transférer automatiquement ces factures.

  

Ouverture du module en [mode liste](../03-Fonctionnalités%20générales/02-navigation.md#mode-liste).

Par défaut, le [filtre](../03-Fonctionnalités%20générales/02-navigation.md#filtres-et-tris) est à statut : Proforma - En préparation + Proforma - Envoyée + Finale - Prête pour envoi.

![](../../static/img/Facturation_01.png)

  

**En mode** [**consultation**](../03-Fonctionnalités%20générales/02-navigation.md#mode-consultation)

![](../../static/img/Facturation_02.png)

  

## Préfixe du numéro de facture

![](../../static/img/Facturation_03.png)

**PF** : Indique qu'il s'agit d'une facture pro forma. Elle sert principalement à informer l'acheteur des coûts estimés avant la transaction finale. Ceci n'est pas une facture finale.

  
  

* * *

  

## Création d'une facture

  

- Cliquez sur **Créer une facture** en haut à droite de la liste.


*   Depuis un dossier
    
    Sélectionnez un dossier à facturer. Vous pouvez utiliser le filtre pour isoler un client ou trouver un dossier facilement. 
    
    ![](../../static/img/Facturation_04.png)
        
      
    
    La facture sera créée automatiquement.
    
    La **Qté facturée est** la quantité totale du dossier, à laquelle on soustrait les quantités qui pourraient avoir déjà été facturées pour ce dossier. Assurez-vous de la remplir si elle ne l'est pas déjà, en cliquant sur la ligne pour faire apparaitre la boîte d'édition.

    Également, selon votre logiciel comptable, déterminez un compte GL par ligne, s'il n'est pas déjà rempli ( préalablement défini dans le dossier.
    
    ![](../../static/img/Facturation_05.png)

    ![](../../static/img/Facturation_07.png)
    
      
    
    Assurez vous que le code de taxes est bien rempli.
    
    ![](../../static/img/Facturation_06.png)
         
    
*   Nouvelle facture
    
    Sélectionner un client.

    ![](../../static/img/Facturation_09.png)
    
      
    
    La facture sera créée automatiquement.
    
    ![](../../static/img/Facturation_08.png)
    
      
    
    Assurez vous de remplir le code de taxes.
    
    ![](../../static/img/Facturation_10.png)
    
      
    

  

Le message au bas de la facture provient de vos [paramètres Système](../09-Paramètres/02-parametres.md#messages-sur-formulaires).

![](../../static/img/Facturation_11.png)

  

#### Ajouter une ligne de facture

  

Cliquez sur **l'icône**![](../../static/img/Contacts_2_iconeajout.png)

![](../../static/img/Facturation_12.png)

  

*   Depuis un dossier
    
    Sélectionnez un dossier.![](https://t9017115504.p.clickup-attachments.com/t9017115504/5bae8caa-5a95-4b56-bbf2-7dca87a97d9f/image.png)
    
      
    
    Remplir les informations manquantes.
    
    ![](https://t9017115504.p.clickup-attachments.com/t9017115504/1611f3d8-dd9f-44f2-8aa7-200f52496d26/image.png)
    
      
    
*   Depuis un produit
*   Depuis un GL
    
    Sélectionnez un compte GL.
    
    ![](https://t9017115504.p.clickup-attachments.com/t9017115504/fb08c946-8b07-4493-be99-a8e52b198f5e/image.png)
    
    Une ligne contenant le [compte GL](https://app.clickup.com/9017115504/v/dc/8cqcgvg-21377/8cqcgvg-17497?block=block-cb1b9623-cfa7-487d-bf66-f39a75749123) va se créer.
    
    ![](https://t9017115504.p.clickup-attachments.com/t9017115504/2d27ff90-2731-4f67-8337-2a5f220536dd/image.png)
    
    Remplir les informations.![](https://t9017115504.p.clickup-attachments.com/t9017115504/61c09a16-40d5-486c-8298-0b8998e819a9/image.png)
    
      
    
*   Ligne de texte
    
    Une ligne vierge va se créer.
    
    Remplir les informations.
    
    ![](https://t9017115504.p.clickup-attachments.com/t9017115504/23058ae6-95a8-4b91-b2f1-4d7231e86cb1/image.png)
    
      

  

* * *

  

## Actions diverses


#### En mode consultation

*   Produire facture finale
        la facture proforma sera convertie en facture finale et transmise à votre logiciel comptable par l'API.

*   Visualiser
  
*   Envoyer par [courriel](../03-Fonctionnalités%20générales/01-courriels.md)

*   Imprimer
    
*   Créditer : si le bouton est grisé, c'est que la facture finale n'a pas encore été faite et envoyée dans le système comptable (elle est encore en proforma).


*   Supprimer : si le bouton est grisé, impossible de faire la suppression.

![](../../static/img/Facturation_12.png)
  

* * *

  

## Vidéo démo du module

[https://www.youtube.com/watch?v=7EsPkFZrBQw](https://www.youtube.com/watch?v=7EsPkFZrBQw)