function createTab(){
    var tableau = new Array();
    var valeur;
    do 
    { 
        do {
        valeur=window.prompt('valeur du tableau');
        
        }while (isNaN(valeur)==true);
        tableau.push(valeur);

    } while (tableau[(tableau.length-1)] != 0 );
    tableau.pop();
    return tableau;
}
var somme=0;
var moyenne;
var tab = createTab();
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