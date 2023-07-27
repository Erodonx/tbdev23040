var nombre=window.prompt("Saisir l'année de naissance");
var date = new Date();
var annee = date.getFullYear();
while(isNaN(nombre)||(nombre<=1900)||(nombre>=annee)) {
    nombre=window.prompt('Saisie incorrecte veuillez recommencer');
    nombre=+nombre;
}
var age=annee-nombre;
if (age>=18)
{
  window.alert("Vous avez "+age +" ans et vous êtes majeur");
}
else{
    window.alert("Vous avez "+age +" ans et vous êtes mineur");
}