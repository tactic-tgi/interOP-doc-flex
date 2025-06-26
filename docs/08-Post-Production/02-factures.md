# Factures

* * *

  

## Survol

  

Le module Facturation permet de produire des factures de vente selon la mise en forme souhaitée en rappelant le numéro d’un dossier, ce qui affiche automatiquement le nom du travail, la quantité commandée et le prix unitaire. 

L’intégration avec votre logiciel comptable par notre passerelle de connexion \[interOP • Comptabilité\] permet par la suite de transférer automatiquement ces factures.

  

Ouverture du module en [mode liste](../03-Fonctionnalités%20générales/02-navigation.md).

Par défaut, le [filtre](../03-Fonctionnalités%20générales/02-navigation.md#filtres-et-tris) est à statut : Proforma - En préparation + Proforma - Envoyée + Finale - Prête pour envoi.

![](https://t9017115504.p.clickup-attachments.com/t9017115504/daad9dd4-95cc-4be8-ae74-19bdde58f844/Screenshot%202024-11-18%20at%2012.07.30%E2%80%AFPM.png)

  

**En mode** [**consultation**](../03-Fonctionnalités%20générales/02-navigation.md#mode-consultation)

![](https://t9017115504.p.clickup-attachments.com/t9017115504/d4a5730a-b5b9-4705-b049-ace158edc6ec/image.png)

  

#### Préfixe du numéro de facture

![](https://t9017115504.p.clickup-attachments.com/t9017115504/63d24641-2ec5-4d0a-aaed-759887152d5c/Screenshot%202024-11-18%20at%2012.15.23%E2%80%AFPM.png)

**PF** : Indique qu'il s'agit d'une facture pro forma. Elle sert principalement à informer l'acheteur des coûts estimés avant la transaction finale. Ceci n'est pas une facture finale.

  
  

* * *

  

### Création d'une facture

  

Cliquez sur le bouton **Créer une facture**

![](https://t9017115504.p.clickup-attachments.com/t9017115504/809a5e8b-d0fd-4b0e-b15c-efb28c01c3a1/Screenshot%202024-11-18%20at%2012.11.25%E2%80%AFPM.png)

*   Depuis un dossier
    
    Sélectionnez un client
    
    ![](https://t9017115504.p.clickup-attachments.com/t9017115504/4ef2aefa-ff43-4b01-964a-d35ed3531604/image.png)
    
    Sélectionnez un dossier
    
    ![](https://t9017115504.p.clickup-attachments.com/t9017115504/8ceccbb3-0e8f-4ce4-be97-d4a5f10d2257/image.png)
    
    Sélectionnez un compte GL ou un code de produit.
    
      
    
    La facture sera créée automatiquement.
    
    La **Qté facturée est** la quantité totale du dossier, à laquelle on soustrait les quantités qui pourraient avoir déjà été facturées pour ce dossier. Assurez-vous de la remplir si elle ne l'est pas déjà.
    
    ![](https://t9017115504.p.clickup-attachments.com/t9017115504/fba4c2c4-5d41-4f8e-b000-636b0b1cd7b3/image.png)
    
      
    
    Assurez vous que le code de taxes est bien rempli.
    
    ![](https://t9017115504.p.clickup-attachments.com/t9017115504/a225b97e-52f3-4ff3-9ef7-806fceb1c200/image.png)
    
      
    
    Selon votre logiciel comptable, déterminez un compte GL par ligne, s'il n'est pas déjà rempli ( préalablement défini dans le [dossier](https://app.clickup.com/9017115504/v/dc/8cqcgvg-21377/8cqcgvg-17397))
    
    ![](https://t9017115504.p.clickup-attachments.com/t9017115504/9371bad7-01d9-454f-9795-04c832e3168e/image.png)
    
      
    
*   Nouvelle facture
    
    Sélectionner un client![](https://t9017115504.p.clickup-attachments.com/t9017115504/5eda7d36-ede0-438e-992b-f849714da3e7/image.png)
    
      
    
    La facture sera créée automatiquement.
    
    ![](https://t9017115504.p.clickup-attachments.com/t9017115504/090b250e-f667-4125-8803-9e32d5ea42a7/image.png)
    
      
    
    Assurez vous de remplir le code de taxes.
    
    ![](https://t9017115504.p.clickup-attachments.com/t9017115504/a2ca7af9-dc2b-4461-8edc-81c55ba88f60/image.png)
    
      
    

  

Le message au bas de la facture provient de vos [paramètres Système](https://app.clickup.com/9017115504/v/dc/8cqcgvg-21377/8cqcgvg-17537?block=block-1cf26f44-af27-4b1a-bd06-618cfe27de25).

![](https://t9017115504.p.clickup-attachments.com/t9017115504/6551a03d-34d3-449e-ba6a-a50e5a6c93b4/Screenshot%202024-12-13%20at%203.23.40%E2%80%AFPM.png)

  

#### Ajouter une ligne de facture

  

Cliquez sur **Ajouter +**

![](https://t9017115504.p.clickup-attachments.com/t9017115504/2b8670c6-fccb-4e69-8f27-a6a4b34cbffc/Screenshot%202024-11-26%20at%202.50.26%E2%80%AFPM.png)

  

*   Depuis un dossier
    
    Sélectionnez un dossier.![](https://t9017115504.p.clickup-attachments.com/t9017115504/5bae8caa-5a95-4b56-bbf2-7dca87a97d9f/image.png)
    
      
    
    Remplir les [informations](https://app.clickup.com/9017115504/v/dc/8cqcgvg-21377/8cqcgvg-17257?block=block-aeef2813-739d-4f73-8be3-fad739556f61) manquantes.
    
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
    
      
    
      
    

  

#### **Divers**

Indique que ce dossier se retrouve sur d'autres factures.

![](https://t9017115504.p.clickup-attachments.com/t9017115504/aaecb335-b482-48db-8940-d378dd328180/Screenshot%202024-11-26%20at%202.54.43%E2%80%AFPM.png)

![](https://t9017115504.p.clickup-attachments.com/t9017115504/9a2ac033-5397-4003-9e89-e9c697a649bb/Screenshot%202024-11-26%20at%203.00.18%E2%80%AFPM.png)

  

* * *

  

### Actions diverses

#### [](https://app.clickup.com/9017115504/v/dc/8cqcgvg-21377/8cqcgvg-17257?block=block-dfe6c8ce-fe79-4b29-bee3-9695d2ea4ab7)

  

#### En mode consultation

*   Visualiser
*   Supprimer
    
    Si le bouton est grisé, impossible de faire la suppression.
    
*   Créditer
*   Produire facture finale
    
    la facture proforma sera convertie en facture finale et transmise à votre logiciel comptable par l'API.
    
*   Envoyer par [courriel](https://app.clickup.com/9017115504/v/dc/8cqcgvg-21377/8cqcgvg-21017?block=block-68df9872-7997-4c13-a153-8a3a0c4b2a1f)
*   Imprimer

  

* * *

  

## Vidéo démo du module

[https://www.youtube.com/watch?v=7EsPkFZrBQw](https://www.youtube.com/watch?v=7EsPkFZrBQw)