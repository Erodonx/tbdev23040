var filtre = new RegExp("^[a-z]{1}$");
var memoire='';
var memoiresaisie='';
var essai=0;
var mot1,mot2,pendu1,pendu2;
var motpendu=window.prompt('Saisir le mot');
function penducache(pdumot){
 let textbox=document.getElementById('textbox');
 textbox.innerHTML+='<br>';
 for (i=0;i<pdumot.length;i++)
 {
    textbox.innerHTML+=pdumot[i]+' ';
 }
}
function verif() {
    let btn=document.getElementById('textBox1');
    let val=btn.value;
      if (filtre.test(val)==false){
        window.alert('il faut saisir une lettre. recommencez.');
        btn.value='';
    }else{
    if (memoiresaisie.indexOf(val)==-1)
    {
    memoiresaisie+=val;
    if (motpendu.indexOf(val)==-1)
    {
         essai++;
    }
    if (essai<6){
    
        for (i=0;i<motpendu.length;i++)
        {
            if (motpendu.indexOf(val)!=-1){
                memoire=motpendu[motpendu.indexOf(val)];
                console.log(memoire);
                if (motpendu.indexOf(val)==0)
                {
                    penduaffichage=penduaffichage.substring(1,penduaffichage.length);
                    penduaffichage=memoire+penduaffichage;
                    console.log(penduaffichage);
                    motpendu=motpendu.substring(1,motpendu.length)
                    motpendu='_'+motpendu;
                }else if(motpendu.indexOf(val)==motpendu.length)
                {
                    penduaffichage=penduaffichage.substring(0,penduaffichage.length-1);
                    penduaffichage=penduaffichage+memoire;
                    motpendu=motpendu.substring(0,motpendu.length)+'_';
                }else {
                    mot1=motpendu.substring(0,motpendu.indexOf(val));
                    mot2=motpendu.substring(motpendu.indexOf(val)+1,motpendu.length);
                    pendu1=penduaffichage.substring(0,motpendu.indexOf(val));
                    pendu2=penduaffichage.substring(motpendu.indexOf(val)+1,motpendu.length);
                    penduaffichage=pendu1+memoire+pendu2;
                    motpendu=mot1+'_'+mot2;
                }
                memoire='';
                console.log(motpendu);
                console.log(motpendu.indexOf(val));
                console.log(penduaffichage);
        }
        }
        penducache(penduaffichage);
        document.getElementById('textbox').innerHTML+= '| Il vous reste ' + (6-essai) + ' tentatives.';


    }

if (penduaffichage.indexOf('_')==-1)
{
    document.getElementById('button1').style.display="none";
    document.getElementById('textBox1').style.display="none";
    document.getElementById('textbox').innerHTML+='<br> VOUS AVEZ RÉUSSI !';
} 
}
    else if(essai==6)
{
 document.getElementById('button1').style.display="none";
    document.getElementById('textBox1').style.display="none";
    document.getElementById('textbox').innerHTML+='<br> VOUS AVEZ PERDU !';   
}
else if (memoiresaisie.indexOf(val)!=-1)
{
 window.alert('Vous avez déjà saisi cette lettre \nRécapitulatif des saisies : '+memoiresaisie);
}

}
}
var penduaffichage='';
for (i=0; i<motpendu.length;i++)
{
    console.log(motpendu[i]);
    if (motpendu[i]!='\''&&motpendu[i]!='-'){
        penduaffichage+='_';
    }else
    {
        if(motpendu[i]=='\'')
        {
         penduaffichage+='\'';
         console.log(penduaffichage);
         console.log(i);
        }else
        {
            penduaffichage+='-';
               console.log(penduaffichage);
         console.log(i);
        }
    }
}
console.log(motpendu + ' || ' + penduaffichage);
penducache(penduaffichage);

