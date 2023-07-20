var tab;
function createTab(n){
    var tableau=[];
    for (i=0 ; i<n ; i++)
    {   
        tableau[i]=window.prompt('Saisissez la ' + (i+1) + ' valeur du tableau');
    }
    return tableau;
}
do
{
nombre=window.prompt('Combien de cases souhaitez vous mettre dans le tableau');
if (isNaN(nombre)==true)
{
    window.alert('Saisie incorrecte. Recommencez');
}
}while (isNaN(nombre)==true)
tab=createTab(nombre);
console.log(tab);
document.write('['+tab+'] : Le tableau');