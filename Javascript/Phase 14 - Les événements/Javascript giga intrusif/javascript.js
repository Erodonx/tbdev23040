var nombreMagique=Math.random()* (101 - 1) + 1;
var joueur = new Array();
var j;
var stockbas=0;
var stockhaut=100
nombreMagique=Math.round(nombreMagique);
console.log(nombreMagique);
var i,k,n =0;
function nombreJ(a){
    for (k=0; k<a; k++)
    {
         j=window.prompt('Saisissez le nom du ' + (k+1) + ' joueur');
         joueur.push(j);
        
    }
}
function tourJoueur(a){
    document.getElementById('textBox1').value='';
    window.alert('c\'est au tour du joueur : ' + joueur[a]);
}
do{
var a=window.prompt('Saisissez le nombre de joueurs');
var nbreMancheTot=window.prompt('Saisissez le nombre de manche');
if(isNaN(a)==true||isNaN(nbreMancheTot)==true||a==''||nbreMancheTot==''){
window.alert('Erreur, saisie incorrecte veuillez réitérer.');
}

}while (isNaN(a)==true||isNaN(nbreMancheTot)==true||a==''||nbreMancheTot=='')
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
window.alert('la partie va bientôt commencer...');
tourJoueur(k);
function verif(){
    let btn=document.getElementById('textBox1');
    let test=document.getElementById('tests');
    let val = btn.value;
    if (isNaN(val)==false)
    {
    console.log(val);
    val=+val;
    if (val<nombreMagique)
    {
        if (stockbas<(val+1))
        {
            stockbas=(val+1);
        }
        test.innerHTML+=('<br> Le nombre saisi vaut ' + val + ' il est plus petit que le nombre magique. [' +stockbas + ' ; '+stockhaut+ '] <br>');
    }else if (val>nombreMagique){
        if (stockhaut>(val+1))
        {
            stockhaut=(val-1);
        }
        test.innerHTML+=('<br> Le nombre saisi vaut ' + val + ' il est plus grand que le nombre magique. [' +stockbas + ' ; '+stockhaut+ '] <br>');
    }else{
        test.innerHTML+='<br> BRAVO à ' + joueur[k] + ' le nombre saisi est égal au nombre magique ! ' + nombreMagique;
        stockbas=0;
        stockhaut=100;
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
    document.getElementById('button1').style.display="none";
    document.getElementById('textBox1').style.display="none";
    document.getElementById('label1').style.display="none";
    }
    console.log(scoreJ);
    }else{
        window.alert('SAISIR UN NOMBRE PUTAIN');
        tourJoueur(k);
    }
}