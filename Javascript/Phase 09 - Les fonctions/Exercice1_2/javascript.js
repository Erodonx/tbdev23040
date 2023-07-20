var x,y,res,cube ;
function cubeProduit (a,b)
{
    cube=a*a*a;
    var produit = a*b;
    return produit;

}
function afficheImg(imagelien){
    const element = document.getElementById('papillonuwu');
    element.src = imagelien;
    /*var imagej = document.createElement("img");
    imagej.src=imagelien;
    document.body.appendChild(imagej);*/
}
do{
x=window.prompt('Saisissez un nombre');
if (isNaN(x)==true){
    window.alert('Saisie du premier nombre incorrecte');
}

} while (isNaN(x)==true)

do{
y=window.prompt('Saisissez un deuxième nombre')
if (isNaN(y)==true){
    window.alert('Saisie du deuxième nombre incorrecte');
}

} while (isNaN(y)==true)

res=cubeProduit(x,y);

afficheImg('https://ncode.amorce.org/ressources/Pool/TB_DEV/WEB_Javascript_BASES/images/papillon.jpg');
var montexte= "Le cube vaut " + cube +"\n Le produit de  "+ x + " x " + y + " est égal à "+ res;
console.log(montexte);
document.getElementById("zizou").innerHTML= montexte;

console.log(res);
//ZERGUD
