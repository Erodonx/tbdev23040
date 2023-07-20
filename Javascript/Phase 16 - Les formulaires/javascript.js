var filtresoc = new RegExp("^[A-Za-z0-9]+$");
var filtre = new RegExp("^[A-Za-z]+$");
var filtrecp = new RegExp("^[0-9]{5}$");
var filtremail= new RegExp("^[A-Za-z0-9.-]+@[A-Za-z0-9.-]{2,}.[A-Za-z]{2,4}$");



function checkForm (f) {
    
    if (f.elements['societe'].value=='')
    {
        window.alert('Veuillez remplir le champ de '+ f.elements['societe'].name + ' s\'il vous plaît');
        return false;
    }
    if (filtresoc.test(f.elements['societe'].value)==false)
    {
        window.alert('Vous avez mal saisi le nom de votre société.');
        return false;
    }
    if (f.elements['contacter'].value=='')
    {
        window.alert('Veuillez remplir le champ de la personne à contacter s\'il vous plaît');
        return false;
    }
    if (filtre.test(f.elements['contacter'].value)==false)
    {
        window.alert('Veuillez saisir un prénom, pour définir la personne à contacter.');
        return false;
    }
    if (f.elements['code'].value=='')
    {
        window.alert('Vous devez remplir le code postal !');
        return false;
    }
    if (filtrecp.test(f.elements['code'].value)==false)
    {
        window.alert('un code postal se compose de 5 chiffres.');
        return false;
    }
    if (f.elements['ville'].value=='')
    {
        window.alert('Veuillez saisir le nom de la ville');
        return false;
    }
    if (filtre.test(f.elements['ville'].value)==false)
    {
        window.alert('Vous avez mal saisi le nom de la ville');
        return false;
    }
    if(f.elements['mail'].value=='')
    {
        window.alert('L\'adresse mail est vide');
        return false;
    }
    if (filtremail.test(f.elements['mail'].value)==false)
    {
        window.alert('Vous avez mal saisi l\'adresse mail.');
        return false;
    }
}

/* */