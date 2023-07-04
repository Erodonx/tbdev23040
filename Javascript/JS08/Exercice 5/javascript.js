var tab = ['a','e','i','o','u','y','A','E','I','O','U','Y'];
var tabCoquin = ['1','2','3','4','5','6','7','8','9','0','@','$','%','*','µ','!','§','/',':',';','.',',','?','£','#','(','-','|','\\','ç','°','[',']','+','=','}','{'];
var chiffre;
var voyelle= 0;
var mot;
var mot1;
var mot2;
do 
{
    mot=window.prompt("Saisir le mot");
    chiffre=false;
     for (var j in tabCoquin)
        {
          if (mot.indexOf(tabCoquin[j])!=-1)
          {
            chiffre=true;
            break;
          }
        }

    if ((isNaN(mot)==false)||chiffre==true) {
        window.alert('UN MOT J\'AI DIT')
    }
} while (isNaN(mot)==false||chiffre==true)
window.alert(mot.length);
for (i=0; i <= mot.length;i++) {
    
    for (var j in tab)
        {
            if ((mot.indexOf(tab[j]))!=-1)
            {
                voyelle=+voyelle+1;
                console.log(voyelle);
                console.log(tab[j]);
                console.log(mot.indexOf(tab[j]));
                if ((mot.indexOf(tab[j]))!=0 && (mot.indexOf(tab[j])!=mot.length))
                {
                  mot1=mot.substring((mot.indexOf(tab[j])+1),(mot.length));
                  console.log(mot1);
                  mot2=mot.substring(0,(mot.indexOf(tab[j])));
                  console.log(mot2);
                  mot=mot2+mot1;
                  console.log(mot);
                }
                else if((mot.indexOf(tab[j]))==0)
                {
                 mot=mot.substring(1,(mot.length));
                 console.log(mot);
                }
                else if((mot.indexOf(tab[j]))==mot.length && mot.indexOf(tab[j])!=0)
                {
                    mot=mot.substring(0,(mot.length));
                    console.log(mot);
                }

            }
        }

}

console.log(voyelle);
window.alert('le nombre de voyelles est de '+voyelle+ ' le nombre de consonnes est de '+ mot.length);



/*var mot1;
var mot2;
var mot3;


    a=mot.indexOf('a','e','i','o','u','y');
    console.log("ici "+a);

    if (a!=-1){
            console.log(mot.indexOf('b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','x','z'));
            while ((mot.indexOf('b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','x','z'))!=-1){
            console.log(a);
            a=mot.indexOf('a','e','i','o','u','y');
            mot1=mot.substring(a,(mot.length))
            //aobab
            console.log(mot1);
            a=mot1.indexOf('b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','x','z');
            console.log(a);
            if ((a!=-1) && (a!=mot1.length)){
                mot2=mot1.substring(0,(a));
                //ao
                console.log(mot2);
                mot3=mot1.substring((a+1),mot.length);
                console.log(mot3);
                //ab
                mot1=mot2+mot3;
                console.log(mot1);
                mot=mot1;
                console.log(mot);
            }
            if (a==(mot1.length)){
                mot=mot1.substring(0,(mot1.length-1));
                console.log("condition2");

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



