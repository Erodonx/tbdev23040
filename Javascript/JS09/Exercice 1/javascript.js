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

console.log(res);

afficheImg('https://img.freepik.com/photos-premium/pomme-pourrie-moisissure-fond-blanc_280340-1428.jpg');
afficheImg('/Evaluation/CSS/JARDITOU/assets/img/jarditou_logo.jpg');
//ZERGUD
