function produit (a,b)
{
    var produit = a*b;
    return produit;

}
function afficheImg(imagelien){
    var imagej = document.createElement("img");
    imagej.src=imagelien;
    document.body.appendChild(imagej);
}
var x,y,res ;
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

res=produit(x,y);
var carre=produit(x,x);
console.log(res);
afficheImg('papillon.jpg');
document.write ('<br>le carré vaut '+carre);
document.write ('<br>le produit vaut '+res);


//ZERGUD
