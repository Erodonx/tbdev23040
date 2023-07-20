var tableau=[];
var nombre=window.prompt("Saisissez un nombre");
while (isNaN(nombre)==true)
{
    nombre=window.prompt("Saisir a nouveau le nombre");
}
index=1;
while (index!=nombre){
    tableau.push(index);
    index=+index+1;
}
document.write("Les entiers inférieurs au nombre saisi sont : ");
for (var i in tableau) 
{
 if ((tableau[i])!=(index-1)){
 document.write(tableau[i] + ", ");
 }
 else{
 document.write(tableau[i]);  
 }
}



