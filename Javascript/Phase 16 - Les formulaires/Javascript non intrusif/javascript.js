var filtresoc = new RegExp("^[A-Za-z0-9]+$");
var filtre = new RegExp("^[A-Za-z]+$");
var filtrecp = new RegExp("^[0-9]{5}$");
var filtremail= new RegExp("^[A-Za-z0-9.-]+@[A-Za-z0-9.-]{2,}.[A-Za-z]{2,4}$");
var form=document.getElementById('form1');
var societe=document.getElementById('societeE');
var contact=document.getElementById('contactE');
var code=document.getElementById('codeE');
var ville=document.getElementById('villeE');
var mail=document.getElementById('mailE');
form.querySelector('#idSubForm1').onclick = function(e) {
    societe.innerHTML='';
    contact.innerHTML='';
    code.innerHTML='';
    ville.innerHTML='';
    mail.innerHTML='';
    
    if (form.elements['societe'].value=='')
    {
        societe.innerHTML='Veuillez renseigner la société.';
        e.preventDefault();
    }else if (filtresoc.test(form.elements['societe'].value)==false)
    {
        societe.innerHTML='Vous avez mal rempli le champ société.';
        e.preventDefault();
    }
    if (form.elements['contacter'].value=='')
    {
        contact.innerHTML='Veuillez renseigner la personne à contacter.';
        e.preventDefault();
    }else if (filtre.test(form.elements['contacter'].value)==false)
    {
        contact.innerHTML='Vous avez mal rempli le champ de la personne à contacter.';
        e.preventDefault();
    }
    if (form.elements['code'].value=='')
    {
        code.innerHTML='Veuillez renseigner le code postal';
         e.preventDefault();
    }else if (filtrecp.test(form.elements['code'].value)==false)
    {
        code.innerHTML='Le code postal n\'est pas valide.';
        e.preventDefault();
    }
    if (form.elements['ville'].value=='')
    {
        ville.innerHTML='Veuillez renseigner la ville.';
         e.preventDefault();
    }else if (filtre.test(form.elements['ville'].value)==false)
    {
        ville.innerHTML='Le nom de la ville n\'est pas valide.';
         e.preventDefault();
    }
    if(form.elements['mail'].value=='')
    {
        mail.innerHTML='Veuillez renseigner l\'adresse mail';
        e.preventDefault();
    }else if (filtremail.test(form.elements['mail'].value)==false)
    {
        mail.innerHTML='Vous avez mal saisi l\'adresse mail.';
        e.preventDefault();
    }
}