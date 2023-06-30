var tableau=[];
var mot=window.prompt("Saisissez un mot");
var nombre=0;
var mot1;
var mot2;
var mot3;
var stock;

while (isNaN(mot)==false)
{
    mot=window.prompt("Saisir a nouveau le mot");
}   
    a=mot.indexOf('a','e','i','o','u','y');
    console.log(a);
    if (a!=-1){
            while ((mot.indexOf('b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','x','z'))!=-1){

            mot1=mot.substring(a,(mot.length))
            //aobab
            console.log(mot1);
            a=mot1.indexOf('b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','x','z');
            console.log(a);
            if ((a!=-1) && (a!=mot1.length)){
                mot2=mot1.substring(0,(a));
                //ao
                console.log(mot2);
                mot3=mot1.substring((a),mot.length);
                console.log(mot3);
                //ab
                mot1=mot2+mot3;
                console.log(mot1);
                mot=mot1;
            }
            if (a==(mot1.length)){
                mot=mot1.substring(0,(mot1.length-1))

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



