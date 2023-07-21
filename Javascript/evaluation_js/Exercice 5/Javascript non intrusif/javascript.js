var filtre = new RegExp("^[A-Za-z]+$");
var filtrecp = new RegExp("^[0-9]{5}$");
var filtremail= new RegExp("^[A-Za-z0-9.-]+@[A-Za-z0-9.-]{2,}.[A-Za-z]{2,4}$");
const form=document.getElementById('form1');

//document.querySelector('#form1').onsubmit = function(){
//element.addEventListener("submit", checkForm);
form.addEventListener('submit', (e) => {
    if (form.elements['nom'].value ==='' || form.elements['nom']== null)
    {
        window.alert('Vous n\'avez pas rempli le champ nom');
        e.preventDefault();
        return;
        
    }
    if (filtre.test(form.elements['nom'].value)==false)
    {
        window.alert('Vous avez mal saisi le '+form.elements['nom'].name);
        e.preventDefault();
        return;
        
    }
        if (form.elements['prenom'].value=='')
    {
        window.alert('Veuillez remplir le champ de '+ form.elements['prenom'].name + ' s\'il vous plaît');
        e.preventDefault();
        return;
    }
    if (filtre.test(form.elements['prenom'].value)==false)
    {
        window.alert('Vous avez mal saisi le '+form.elements['prenom'].name);
        e.preventDefault();
        return;
    }
    if (form.elements['sexe'].value=='')
    {
        window.alert('Veuillez selectionner votre sexe');
        e.preventDefault();
        return;
    }
    if (form.elements['date'].value=='')
    {
     window.alert('Veuillez renseigner votre date de naissance s\'il vous plait');
     e.preventDefault();
     return;
    }
    if (form.elements['codepostal'].value=='')
    {
        window.alert('Vous devez remplir le code postal !');
        e.preventDefault();
        return;
    }
    if (filtrecp.test(form.elements['codepostal'].value)==false)
    {
        window.alert('un code postal se compose de 5 chiffres.');
        e.preventDefault();
        return;
    }
    if(form.elements['email'].value=='')
    {
        window.alert('L\'adresse mail est vide');
        e.preventDefault();
        return;
    }
    if (filtremail.test(form.elements['email'].value)==false)
    {
        window.alert('Vous avez mal saisi l\'adresse mail.');
        e.preventDefault();
        return;
    }
    if(form.elements['sujet'].value=='')
    {
     window.alert ('Veuillez selectionner un sujet');
     e.preventDefault();
     return;
    }
    if (form.elements['question'].value=='')
    {
        window.alert('Veuillez saisir votre question SVP');
        e.preventDefault();
        return;
    }
    if (form.elements['accepter'].checked==false)
    {
        window.alert('veuillez cocher la case pour confirmer.');
        e.preventDefault();
        return;
    }
});
