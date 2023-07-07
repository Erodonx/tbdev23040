



function checkForm (f) {
    if ((f.elements['societe'].value==("^[a-z]+$"))
    {
        window.alert('Veuillez remplir le champ de '+ f.elements['societe'].name + ' s\'il vous plaît');
        return false;
    }
    if (f.elements['contacter'].value=='')
    {
        window.alert('Veuillez remplir le champ de la personne à contacter s\'il vous plaît');
        return false;
    }
}