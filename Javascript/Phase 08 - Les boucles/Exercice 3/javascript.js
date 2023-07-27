var tableau=[];
var nombre;
var index=1;
var somme=0;
var moyenne;
do {
     do 
    {
    nombre=window.prompt("Saisir la valeur "+index);
    if (isNaN(nombre)==true)//vaut = est égal a
    {
     window.alert('Erreur de saisie');
    }
    }while (isNaN(nombre)==true)
    if (nombre!=0){
    tableau.push(nombre);
    index=index+1;
    }
} while (nombre!=0)
document.write("La somme des nombres saisi est : ");
for (var i in tableau) 
{
 somme+=Number(tableau[i]);

}
document.write(somme + "\n");
moyenne=somme/tableau.length;
document.write("\n La moyenne vaut "+ moyenne);




