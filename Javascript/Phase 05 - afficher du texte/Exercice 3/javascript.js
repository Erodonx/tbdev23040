var tempC=window.prompt("Saisissez la température en degré C°");
while (isNaN(tempC)==true)
{
    window.alert("Une température c'est un nombre. Veuillez modifier votre saisie");
    tempC=window.prompt("Saisissez la température en degré C°");
}
var tempF=((tempC*9/5)+ 32);
window.alert("la température en degré Fahrenheit est de " + tempF);