var nombre=window.prompt("Saisir l'année de naissance");
var date = new Date();
var annee = date.getFullYear();
while(isNaN(nombre)||(nombre<=1900)||(nombre>=annee)) {
    nombre=window.prompt('Saisie incorrecte veuillez recommencer');
    nombre=+nombre;
}
var age=annee-nombre;
window.alert("Vous avez "+age +" ans");