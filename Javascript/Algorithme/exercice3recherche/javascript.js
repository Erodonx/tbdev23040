var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var prenom;
function rechercheTab(p)
{
    if (tab.indexOf(p)!=-1)
    {
        for (i = tab.indexOf(p); i < tab.length; i++)
        {
         if (i < (tab.length-1))
         {
        tab[i]=tab[i+1];
        }else{
            tab[(tab.length-1)]="";
        }
        /*tab[tab.indexOf(p)]=tab[tab.length];
        temp = tab[tab.length];
        tab[tab.length]="";*/
        }
    }else{
        window.alert('Erreur, prénom saisi n\'est pas dans le tableau');
    }

}
console.log(tab);
do{
prenom=window.prompt('Saisir le prénom, saisir \'stop\' pour arrêter la boucle.');
if(prenom!='stop'){
rechercheTab(prenom);
console.log(tab);
}
} while (prenom != 'stop')