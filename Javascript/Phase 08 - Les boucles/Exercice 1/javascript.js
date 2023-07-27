var nombre=1;
var tableau=[];
var prenom;

do{
    do
    {
     prenom=window.prompt("Saisir le "+nombre+" prénom");
     if (isNaN(prenom)==false&&prenom.length!=0)
     {
      window.alert('Erreur de saisie.');
     }
    } while (isNaN(prenom)==false&&prenom.length!=0)
    if(prenom.length!=0)
    {
    tableau.push(prenom);
    nombre+=1;
    }
    }while ((prenom.length)!=0)
for (i=0;i<tableau.length;i++)
{
 console.log(tableau[i]);
}
console.log(tableau);
console.log('nombre de prénom '+ tableau.length);


