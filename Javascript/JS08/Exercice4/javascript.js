var nombre1=window.prompt("Saisissez un nombre");
var nombre2=window.prompt("Saisissez un nombre");
var resultat;
while (isNaN(nombre1)==true)
{
    nombre1=window.prompt("Saisir a nouveau le nombre");
}
while (isNaN(nombre2)==true)
{
    nombre2=window.prompt("Saisir a nouveau le nombre");
}
for (var i =1; i <= nombre1 ; i++) 
{
 resultat = i*nombre2;
 console.log(i + " x " +nombre2 + " = " + resultat);

}




