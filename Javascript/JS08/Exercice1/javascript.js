window.alert("On va utiliser un tableau pour stocker les prénoms");
var nombre=0;
var tableau=[];
var prenom=window.prompt("Saisissez un prénom");
while (isNaN(prenom)==false)
{
    prenom=window.prompt("Saisir a nouveau le prénom");
}
nombre=1;
while ((prenom.length)!=0){
    tableau.push(prenom);
    prenom=window.prompt(nombre);
    nombre=+nombre+1;
    while (isNaN(prenom)==false)
    {
        prenom=window.prompt("Saisir a nouveau le "+nombre+" prénom");
    } 
}
for (var i in tableau) 
{
 console.log(tableau[i]);
}


