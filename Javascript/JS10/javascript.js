function createTab(n){
    var tableau=[];
    for (i=0 ; i<n ; i++)
    {   
        tableau[i]=window.prompt('Saisissez la ' + (i+1) + ' valeur du tableau');
    }
    return tableau;
}
nombre=window.prompt('Combien de cases souhaitez vous mettre dans le tableau');
tab=createTab(nombre);
console.log(tab);