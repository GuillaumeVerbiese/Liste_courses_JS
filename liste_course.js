function init() {
    
    const formElement = document.querySelector('#shop-item-form');
    formElement.addEventListener('submit', handleFormSubmit);

}

function handleFormSubmit(event) {

    // Avec la fonction preventDefault, on bloque le comportement par défaut de l'événement (ici charger la page de l'attribut action du formulaire).
    event.preventDefault();

    // On sélectionne l'input dans lequel on a écrit le produit à ajouter à la liste
    const inputElement = document.querySelector('#shop-item-input');
    // On récupère la valeur contenue dedans avec ".value"
    const inputValue = inputElement.value;

    // On crée un nouvel élément LI
    const newLiElement = document.createElement('li');

    // On remplit le nouvel LI avec le contenu récupéré depuis le champ
    newLiElement.textContent = inputValue;

    // On sélectionne la liste (élément OL)
    const listElement = document.querySelector('#shop-items');

    // On insère le nouvel LI dans la page (dans l'élément OL)
    listElement.append(newLiElement);

    // On vide le champ en mettant une valeur vide dedans
    inputElement.value = "";

}

// On pose un écouteur sur la page pour lancer notre code seulement quand elle est totalement chargée.
document.addEventListener('DOMContentLoaded', init);

