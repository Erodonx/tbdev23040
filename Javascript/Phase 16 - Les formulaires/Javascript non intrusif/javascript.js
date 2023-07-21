var filtresoc = new RegExp("^[A-Za-z0-9]+$");
var filtre = new RegExp("^[A-Za-z]+$");
var filtrecp = new RegExp("^[0-9]{5}$");
var filtremail= new RegExp("^[A-Za-z0-9.-]+@[A-Za-z0-9.-]{2,}.[A-Za-z]{2,4}$");
const form=document.getElementById('form1');
form.addEventListener('submit', (e) =>{
        let erreur = false;
    
    if (form.elements['societe'].value=='')
    {
        window.alert('Veuillez remplir le champ de '+ form.elements['societe'].name + ' s\'il vous plaît');
        e.preventDefault();
        erreur=true;
    }
    if (filtresoc.test(form.elements['societe'].value)==false&&erreur==false)
    {
        window.alert('Vous avez mal saisi le nom de votre société.');
        e.preventDefault();
        erreur=true;
    }
    if (form.elements['contacter'].value==''&&erreur==false)
    {
        window.alert('Veuillez remplir le champ de la personne à contacter s\'il vous plaît');
        e.preventDefault();
        erreur=true;
    }
    if (filtre.test(form.elements['contacter'].value)==false&&erreur==false)
    {
        window.alert('Veuillez saisir un prénom, pour définir la personne à contacter.');
        e.preventDefault();
        erreur=true;
    }
    if (form.elements['code'].value==''&&erreur==false)
    {
        window.alert('Vous devez remplir le code postal !');
         e.preventDefault();
         erreur=true;
    }
    if (filtrecp.test(form.elements['code'].value)==false&&erreur==false)
    {
        window.alert('un code postal se compose de 5 chiffres.');
        e.preventDefault();
        erreur=true;
    }
    if (form.elements['ville'].value==''&&erreur==false)
    {
        window.alert('Veuillez saisir le nom de la ville');
         e.preventDefault();
         erreur=true;
    }
    if (filtre.test(form.elements['ville'].value)==false&&erreur==false)
    {
        window.alert('Vous avez mal saisi le nom de la ville');
         e.preventDefault();
         erreur=true;
    }
    if(form.elements['mail'].value==''&&erreur==false)
    {
        window.alert('L\'adresse mail est vide');
        e.preventDefault();
        erreur=true;
    }
    if (filtremail.test(form.elements['mail'].value)==false&&erreur==false)
    {
        window.alert('Vous avez mal saisi l\'adresse mail.');
        e.preventDefault();
        erreur=true;
    }
});

/* */