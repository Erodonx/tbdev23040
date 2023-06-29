var nombre1=window.prompt("Saisissez le premier nombre");
var nombre2=window.prompt("Saisissez le deuxième nombre");
while ((isNaN(nombre1)==true) || (isNaN(nombre2)==true))
{
    window.alert("l'un des deux nombre n'est pas bon OU même les deux ne sont pas bons");
    if (isNaN(nombre1)==true){
        nombre1=window.prompt("Veuillez saisir a nouveau le premier nombre.");
        nombre1=+nombre1;
    }
    if (isNaN(nombre2)==true){
        nombre2=window.prompt("Veuillez saisir a nouveau le deuxième nombre.");
        nombre2=+nombre2;
    }
}
var produit=nombre1*nombre2;
window.alert("le produit des deux nombres est " + produit);