var filtre = new RegExp("^[a-z]{1}$");
var memoire='';
var memoiresaisie='';
var essai=0;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
var mot1,mot2,pendu1,pendu2;
var motpendu=window.prompt('Saisir le mot');
function afficheLettre(memory)
{
    let textbox1=document.getElementById('textbox1');
    textbox1.innerHTML=memory;
}
function penducache(pdumot){
 let textbox=document.getElementById('textbox');
 textbox.innerHTML+='<br>';
 for (i=0;i<pdumot.length;i++)
 {
    if (pdumot[i]!=' ')
    {
    textbox.innerHTML+=pdumot[i]+' ';
    }else
    {
        textbox.innerHTML+='&nbsp'+pdumot[i]+'&nbsp';
    }
 }
}
function draw(){
    if(essai==1)
    {
    ctx.fillStyle= "black";
    ctx.fillRect(250,350,300,5);
    //base 1
    }
    if(essai==2)
    {
    ctx.fillStyle= "black";
    ctx.fillRect(500,50,5,300);
    //poteau 2
    }
    if(essai==3)
    {
    ctx.fillStyle= "black";
    ctx.fillRect(250,50,300,5);
    //barre du desuss 3
    }
    if (essai==4)
    {
    var x=470;
    var y=51;
    ctx.fillStyle= "black";
    do
    {
    ctx.fillRect(x,y,1,5);
    x++;
    y++;
    }while ((x<500)&&(y<81))
    //barre diagonale
    }
    if(essai==5)
    {
    ctx.fillStyle= "black";
    ctx.fillRect(350,50,5,90);
    //fil tête
    }
    if (essai==6)
    {
    ctx.fillStyle = "black";
    ctx.beginPath;
    ctx.arc(352,125,25,0, Math.PI * 2, false);
    ctx.fill();
    //tete
    }
    if(essai==7)
    {
    ctx.fillStyle= "black";
    ctx.fillRect(350,125,5,120);
    //tronc
    }
    if(essai==8)
    {
    ctx.fillStyle= "black";
    ctx.fillRect(290,175,60,5);
    //bras gauche
    }
    if(essai==9)
    {
    ctx.fillStyle= "black";
    ctx.fillRect(350,175,60,5);
    //bras droit
    }
    if(essai==10)
    {
    var x=352;
    var y=241;
    ctx.fillStyle= "black";
    do
    {
    ctx.fillRect(x,y,1,5);
    x--;
    y++;
    }while ((x>322)&&(y<271))
    //jambe gauche
    }
    if(essai==11)
    {
    var x=352;
    var y=241;
    ctx.fillStyle= "black";
    do
    {
    ctx.fillRect(x,y,1,5);
    x++;
    y++;
    }while ((x<382)&&(y<271))
    //jambe droite
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
         draw();
    }
    if (essai<11){
        afficheLettre(memoiresaisie);

    
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
        document.getElementById('textbox').innerHTML+= '| Il vous reste ' + (11-essai) + ' tentatives.';
        btn.value='';


    }else if(essai==11)
{
 document.getElementById('button1').style.display="none";
    document.getElementById('textBox1').style.display="none";
    document.getElementById('textbox').innerHTML+='<br> VOUS AVEZ PERDU !';   
}

if (penduaffichage.indexOf('_')==-1)
{
    document.getElementById('button1').style.display="none";
    document.getElementById('textBox1').style.display="none";
    document.getElementById('textbox').innerHTML+='<br> VOUS AVEZ RÉUSSI !';
} 
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
    if (motpendu[i]!='\''&&motpendu[i]!='-'&&motpendu[i]!=' '){
        penduaffichage+='_';
    }else
    {
        if(motpendu[i]=='\'')
        {
         penduaffichage+='\'';
         console.log(penduaffichage);
         console.log(i);
        }else if (motpendu[i]=='-')
        {
            penduaffichage+='-';
            console.log(penduaffichage);
         console.log(i);
        }else if (motpendu[i]==" ")
        {
            penduaffichage+=" ";
            console.log(penduaffichage);
        }
    }
}
console.log(motpendu + ' || ' + penduaffichage);
penducache(penduaffichage);

