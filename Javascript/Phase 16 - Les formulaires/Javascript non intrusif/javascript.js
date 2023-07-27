var filtresoc = new RegExp("^[A-Za-z0-9]+$");
var filtre = new RegExp("^[A-Za-z]+$");
var filtrecp = new RegExp("^[0-9]{5}$");
var filtremail= new RegExp("^[A-Za-z0-9.-]+@[A-Za-z0-9.-]{2,}.[A-Za-z]{2,4}$");
var form=document.getElementById('form1');
form.querySelector('#idSubForm1').onclick = function(e) {
    
    if (form.elements['societe'].value=='')
    {
        window.alert('Veuillez remplir le champ de '+ form.elements['societe'].name + ' s\'il vous plaît');
        e.preventDefault();
        return;
    }
    if (filtresoc.test(form.elements['societe'].value)==false)
    {
        window.alert('Vous avez mal saisi le nom de votre société.');
        e.preventDefault();
        return;
    }
    if (form.elements['contacter'].value=='')
    {
        window.alert('Veuillez remplir le champ de la personne à contacter s\'il vous plaît');
        e.preventDefault();
        return;
    }
    if (filtre.test(form.elements['contacter'].value)==false)
    {
        window.alert('Veuillez saisir un prénom, pour définir la personne à contacter.');
        e.preventDefault();
        return;
    }
    if (form.elements['code'].value=='')
    {
        window.alert('Vous devez remplir le code postal !');
         e.preventDefault();
         return;
    }
    if (filtrecp.test(form.elements['code'].value)==false)
    {
        window.alert('un code postal se compose de 5 chiffres.');
        e.preventDefault();
        return;
    }
    if (form.elements['ville'].value=='')
    {
        window.alert('Veuillez saisir le nom de la ville');
         e.preventDefault();
         return;
    }
    if (filtre.test(form.elements['ville'].value)==false)
    {
        window.alert('Vous avez mal saisi le nom de la ville');
         e.preventDefault();
         return;
    }
    if(form.elements['mail'].value=='')
    {
        window.alert('L\'adresse mail est vide');
        e.preventDefault();
        return;
    }
    if (filtremail.test(form.elements['mail'].value==false))
    {
        window.alert('Vous avez mal saisi l\'adresse mail.');
        e.preventDefault();
        return;
    }
}

/* */