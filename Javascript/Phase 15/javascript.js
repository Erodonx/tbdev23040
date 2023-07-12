var nombreMagique=Math.random()* (101 - 1) + 1;
var joueur = new Array();
var j;
nombreMagique=Math.round(nombreMagique);
console.log(nombreMagique);
var i,k =0;
function nombreJ(a){
    for (k=0; k<a; k++)
    {
         j=window.prompt('Saisissez le nom du ' + (k+1) + ' joueur');
         joueur.push(j);
        
    }
}
function tourJoueur(a){
    window.alert('c\'est au tour du joueur : ' + joueur[a]);
}
var a=window.prompt('Saisissez le nombre de joueurs');
var nbreMancheTot=window.prompt('Saisissez le nombre de manche');
var nbreManche=0;
console.log(scoreJ);
nombreJ(a);
console.log(joueur);

var scoreJ=[].concat(joueur);
for (i=0; i<scoreJ.length; i++)
{
    scoreJ[i]=0;
}
console.log(joueur);
console.log(scoreJ);
k=0;
tourJoueur(k);
function verif(){
    i=0;  
    let btn=document.getElementById('textBox1');
    let test=document.getElementById('tests');
    let val = btn.value;
    i=i+1;
    console.log(val);
    val=+val;
    if (val<nombreMagique)
    {
        test.innerHTML+=('<br> '+ ' Le ' + i + ' chiffre saisi vaut ' + val + ' il est plus petit que le nombre magique. [' +(val+1) + ' ; ?] <br>');
    }else if (val>nombreMagique){
        test.innerHTML+=('<br> '+ ' Le ' + i + ' chiffre saisi vaut ' + val + ' il est plus grand que le nombre magique. [?  ; ' + (val-1)+'] <br>');
    }else{
        test.innerHTML+='<br> BRAVO à ' + joueur[k];
        scoreJ[k]+=(+1);
        nbreManche+=(+1);
        window.alert('bravo car votre nombre ' + val + ' est égal au nombre magique: ' + nombreMagique);
        nombreMagique=Math.random()* (101- 1) + 1;
        nombreMagique=Math.round(nombreMagique);
        if(nbreManche==nbreMancheTot){
            test.innerHTML+='<br> Partie terminée';
        }
    }
    if (k<(joueur.length-1)){
        k=k+1;
    }else{
        k=0;
    }
    if (nbreManche!=nbreMancheTot){
          tourJoueur(k);
    }
    if (nbreManche==nbreMancheTot)
    {
        test.innerHTML+='<h1> Tableau des scores </h1> <br>';
        for(n=0; n<scoreJ.length;n++)
        {
            test.innerHTML+=joueur[n]+ ' : ' + scoreJ[n] +'<br>';
        }
    }
    console.log(scoreJ);
}