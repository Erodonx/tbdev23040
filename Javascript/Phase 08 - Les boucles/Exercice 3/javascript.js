var tableau=[];
var nombre=window.prompt("Saisissez un nombre");
var index=0;
var somme=0;
var moyenne;
while (isNaN(nombre)==true)
{
    nombre=window.prompt("Saisir a nouveau le nombre");
}
while (nombre!=0){
    tableau.push(nombre);
    index=index+1;
    nombre=window.prompt(index);

    if (nombre!=0){
        while (isNaN(nombre)==true)
        {
        nombre=window.prompt("Saisir a nouveau le nombre");
        }
    }
}
document.write("La somme des nombres saisi est : ");
for (var i in tableau) 
{
 somme=somme+(+tableau[i]);

}
document.write(somme + "\n");
moyenne=somme/index;
document.write("\n La moyenne vaut "+ moyenne);




