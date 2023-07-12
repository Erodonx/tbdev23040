var nombre;

function TableMultiplication(nombre){
    var temp ;

    for (i=1; i<=10; i++)
    {
        temp = nombre *i;
        document.write(i + ' x ' + nombre + " = " + temp + "<br>");
    }


}
document.write('<h1>TABLE DE MULTIPLICATION</h1>');
do{
    nombre=window.prompt('Saisissez un nombre compris entre 1 et 9');
}while (isNaN(nombre)==true || (nombre<1) || (nombre>9))

TableMultiplication(nombre);

Document.clear();