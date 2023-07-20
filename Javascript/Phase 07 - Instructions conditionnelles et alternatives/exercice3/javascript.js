var nombre1=window.prompt("Saisir le premier nombre");
var nombre2=window.prompt("Saisir le deuxième nombre");
while  ((isNaN(nombre1) || (isNaN(nombre2)))) {
    if (isNaN(nombre1)){
        nombre1=window.prompt('Saisie incorrecte veuillez recommencer');
        nombre1=+nombre1;  
    }
    if (isNaN(nombre2)){
        nombre2=window.prompt('Saisie incorrecte veuillez recommencer');
        nombre2=+nombre2;

    }
}
var operateur=window.prompt("Saisissez votre opérateur de calcul");
var calcul=0;

if (operateur=='+')
{
 /*nombre1=+nombre1;
 nombre2=+nombre2;*/
 calcul=(+nombre1)+(+nombre2);
 window.alert(calcul);
}
else if (operateur=='-'){
    calcul=nombre1-nombre2;
    window.alert(calcul);
}
else if (operateur=='*'){
    calcul=nombre1*nombre2;
    window.alert(calcul);
}
else if (operateur=='/'){
    if ((nombre1==0) ||(nombre2==0)){
        window.alert('on ne peux pas diviser par 0 !');
    }
    else {
        calcul=nombre1/nombre2;
        window.alert(calcul);
    }  
}
else{
    window.alert("erreur de saisie... sur l'opérateur");
}