var nom=window.prompt("Veuillez saisir votre nom");
while (isNaN(nom)==false)
{
    window.alert("Un nom c'est une chaîne de caractères, pas un nombre.");
    nom=window.prompt("Veuillez saisir votre nom");
}
var prenom=window.prompt("Veuillez saisir votre prénom");
while (isNaN(prenom)==false)
{
    window.alert("Un prénom c'est une chaîne de caractères, pas un nombre.");
    prenom=window.prompt("Saisissez votre prénom");
}
window.alert("Votre nom est " + nom + " Votre prénom est " + prenom);