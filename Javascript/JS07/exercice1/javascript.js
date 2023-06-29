var nombre=window.prompt('Saisir le nombre');
while(isNaN(nombre)==true){
    nombre=window.prompt('Saisie incorrecte veuillez recommencer');
    nombre=+nombre;
}
if (nombre%2==0){
    window.alert("le nombre "+nombre+ " est pair");
}
else{
    window.alert("le nombre "+nombre+" est impair");
}