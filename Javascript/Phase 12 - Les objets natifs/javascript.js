var tab= new Array();
var somme=0;
var moyenne;
function createTab(){
    var tableau = new Array();
    var valeur;
    do 
    { 
        do {
        valeur=window.prompt('valeur du tableau');
        
        }while (isNaN(valeur)==true||valeur=='');
        tableau.push(valeur);
    if (tableau[tableau.length-1]!=0)
    {
    window.alert(tableau);
    }
    } while (tableau[(tableau.length-1)] != 0 );
    tableau.pop();
    return tableau;
}
window.alert('Effectuez la saisie des valeurs dans le tableau. Mettez un 0 pour terminer la saisie');
tab = createTab();
console.log(tab.length);

for (i=0;i<tab.length;i++)
    {
        somme=somme + (+tab[i]);
    }
moyenne=somme/(tab.length);
console.log(tab);
console.log('longueur :'+tab.length);
console.log('somme :'+somme);
console.log('moyenne :'+moyenne);
document.write('['+tab+']<br>'+'longueur : '+tab.length+'<br>'+'somme : '+somme+'<br>'+'moyenne : '+moyenne);