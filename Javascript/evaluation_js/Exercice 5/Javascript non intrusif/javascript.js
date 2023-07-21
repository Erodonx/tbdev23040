var filtre = new RegExp("^[A-Za-z]+$");
var filtrecp = new RegExp("^[0-9]{5}$");
var filtremail= new RegExp("^[A-Za-z0-9.-]+@[A-Za-z0-9.-]{2,}.[A-Za-z]{2,4}$");
const form=document.getElementById('form1');

//document.querySelector('#form1').onsubmit = function(){
//element.addEventListener("submit", checkForm);
form.addEventListener('submit', (e) => {
    let erreur = false;
    if (form.elements['nom'].value ==='' || form.elements['nom']== null)
    {
        window.alert('Vous n\'avez pas rempli le champ nom');
        e.preventDefault();
        erreur=true;
        
    }
    if (filtre.test(form.elements['nom'].value)==false&&erreur==false)
    {
        window.alert('Vous avez mal saisi le '+form.elements['nom'].name);
        e.preventDefault();
        erreur=true;
        
    }
        if (form.elements['prenom'].value==''&&erreur==false)
    {
        window.alert('Veuillez remplir le champ de '+ form.elements['prenom'].name + ' s\'il vous plaît');
        e.preventDefault();
        erreur=true;
    }
    if (filtre.test(form.elements['prenom'].value)==false&&erreur==false)
    {
        window.alert('Vous avez mal saisi le '+form.elements['prenom'].name);
        e.preventDefault();
        erreur=true;
    }
    if (form.elements['sexe'].value==''&&erreur==false)
    {
        window.alert('Veuillez selectionner votre sexe');
        e.preventDefault();
        erreur=true;
    }
    if (form.elements['date'].value==''&&erreur==false)
    {
     window.alert('Veuillez renseigner votre date de naissance s\'il vous plait');
     e.preventDefault();
     erreur=true;
    }
    if (form.elements['codepostal'].value==''&&erreur==false)
    {
        window.alert('Vous devez remplir le code postal !');
        e.preventDefault();
        erreur=true;
    }
    if (filtrecp.test(form.elements['codepostal'].value)==false&&erreur==false)
    {
        window.alert('un code postal se compose de 5 chiffres.');
        e.preventDefault();
        erreur=true;
    }
    if(form.elements['email'].value==''&&erreur==false)
    {
        window.alert('L\'adresse mail est vide');
        e.preventDefault();
        erreur=true;
    }
    if (filtremail.test(form.elements['email'].value)==false&&erreur==false)
    {
        window.alert('Vous avez mal saisi l\'adresse mail.');
        e.preventDefault();
        erreur=true;
    }
    if(form.elements['sujet'].value==''&&erreur==false)
    {
     window.alert ('Veuillez selectionner un sujet');
     e.preventDefault();
     erreur=true;
    }
    if (form.elements['question'].value==''&&erreur==false)
    {
        window.alert('Veuillez saisir votre question SVP');
        e.preventDefault();
        erreur=true;
    }
    if (form.elements['accepter'].checked==false&&erreur==false)
    {
        window.alert('veuillez cocher la case pour confirmer.');
        e.preventDefault();
    }
});
