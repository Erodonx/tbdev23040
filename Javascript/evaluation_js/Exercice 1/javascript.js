var age,moy;
var jeune = new Array();
var moyen = new Array();
var vieu = new Array();
var fin = false;

function stockage(a)
{
    if (a<20)
    {
        jeune.push(age);
    }else if (a >= 20 && a <= 40)
    {
        moyen.push(age);
    }else
    {
        vieu.push(age);
        if (a == 100)
        {
            fin = true;
        }
    }

}
function moyenne (j,m,v)
{
    var moyenne = 0;
    var sumj =0;
    var summ = 0;
    var sumv = 0;
    for (i in j)
    {
        sumj+= +j[i];
    }
    console.log(sumj);
    for (i in m)
    {
        summ+= +m[i];
    }
    console.log(summ);
    for (i in v)
    {
        sumv+= +v[i];
    }
    console.log(sumv);
    moyenne = (sumj + summ + sumv) / (j.length + m.length + v.length);
    return moyenne;
}
window.alert('Veuillez saisir l\'âge des différentes personnes.Pour arrêter la saisie veuillez saisir le nombre 100 (centenaire compté)');

do {
    age = window.prompt('Saisir l\'age de la personne');
    if (age<0 || isNaN(age)==true || age>120)
    {
        window.alert('l\'age saisi n\'est pas une valeur correcte... Veuillez recommencer.');
    }else{
        stockage(age);
    }
}while (fin==false)
moy=moyenne(jeune,moyen,vieu);
window.alert('Il y a ' + jeune.length + ' jeune personne(s) de moins de 20 ans ' + moyen.length + ' personne d\'un age compris entre 20 et 40 et ' + vieu.length + ' personne d\'un age strictement supérieur a 40.\nLa moyenne des âges saisi est de ' + moy);
