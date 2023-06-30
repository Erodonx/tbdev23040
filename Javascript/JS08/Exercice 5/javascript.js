var tableau=[];
var mot=window.prompt("Saisissez un mot");
var nombre=0;
var mot2;
var stock;

while (isNaN(mot)==false)
{
    mot=window.prompt("Saisir a nouveau le mot");
}
for (var i=0; i< (mot.length); i++) {
    //console.log(mot.length);   
    a=mot.indexOf('a','e','i','o','u','y');
    if (a!=-1){
            mot=mot.substring(a,(mot.length-1))
            //aobab
            a=mot.indexOf('b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','x','z');
            if (a!=-1){
                mot2=mot.substring(0,(a-1));
                //ao
            }


    }

}
    
    
    
    /*while (a!=-1){
        mot2=mot.substring(nombre,mot.indexOf('a','e','i','o','u','y'));
        console.log(mot2);
        console.log(a);
        a=mot2.indexOf('a','e','i','o','u','y');
        if (a ==-1)
        {
         mot2=stock;
         a=1;
        }
        else{
            stock=mot2;
        }
            
    }


//console.log(nombre);
}
// J'AI COMPRIS.
    /*console.log(mot.substring(i,1));
    console.log(mot);
    console.log(mot);
}
console.log("le nombre de voyelles est "+ nombre);
/*var index=0;
var somme=0;
var moyenne;*/
/*while (nombre!=0){
    tableau.push(nombre);
    index=index+1;
    nombre=window.prompt(index);

    if (nombre!=0){
        while (isNaN(nombre)==true)
        {
        nombre=window.prompt("Saisir a nouveau le nombre");
        }
    }
}
document.write("La somme des nombres saisi est : ");
for (var i in tableau) 
{
 somme=somme+(+tableau[i]);

}
document.write(somme + "\n");
moyenne=somme/index;
document.write("\n La moyenne vaut "+ moyenne);
*/



