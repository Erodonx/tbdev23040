var filtre = new RegExp("^[A-Za-z]+$");
var filtrecp = new RegExp("^[0-9]{5}$");
var filtremail= new RegExp("^[A-Za-z0-9.-]+@[A-Za-z0-9.-]{2,}.[A-Za-z]{2,4}$");



function checkForm (f) {
    
    if (f.elements['nom'].value=='')
    {
        window.alert('Veuillez remplir le champ de '+ f.elements['nom'].name + ' s\'il vous plaît');
        return false;
    }
    if (filtre.test(f.elements['nom'].value)==false)
    {
        window.alert('Vous avez mal saisi le '+f.elements['nom'].name);
        return false;
    }
        if (f.elements['prenom'].value=='')
    {
        window.alert('Veuillez remplir le champ de '+ f.elements['prenom'].name + ' s\'il vous plaît');
        return false;
    }
    if (filtre.test(f.elements['prenom'].value)==false)
    {
        window.alert('Vous avez mal saisi le '+f.elements['prenom'].name);
        return false;
    }
    if (f.elements['sexe'].value=='')
    {
        window.alert('Veuillez selectionner votre sexe');
        return false;
    }
    if (f.elements['date'].value=='')
    {
     window.alert('Veuillez renseigner votre date de naissance s\'il vous plait');
     return false;
    }
    if (f.elements['codepostal'].value=='')
    {
        window.alert('Vous devez remplir le code postal !');
        return false;
    }
    if (filtrecp.test(f.elements['codepostal'].value)==false)
    {
        window.alert('un code postal se compose de 5 chiffres.');
        return false;
    }
    if(f.elements['email'].value=='')
    {
        window.alert('L\'adresse mail est vide');
        return false;
    }
    if (filtremail.test(f.elements['email'].value)==false)
    {
        window.alert('Vous avez mal saisi l\'adresse mail.');
        return false;
    }
    if(f.elements['sujet'].value=='')
    {
     window.alert ('Veuillez selectionner un sujet');
     return false;
    }
    if (f.elements['question'].value=='')
    {
        window.alert('Veuillez saisir votre question SVP');
        return false;
    }
    if (f.elements['accepter'].checked==false)
    {
        window.alert('veuillez cocher la case pour confirmer.');
        return false;
    }
}
