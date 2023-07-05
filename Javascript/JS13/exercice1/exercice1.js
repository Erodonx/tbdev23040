   alert("Coucou !");
   console.log("Ah que Coucou !");
   document.write(" Coucou beuh !");

   function customAlert(Custom)
   {
    Custom=document.getElementById('text').innerHTML;
    console.log(Custom);
    this.alert();
   }
   customAlert('ab');

   /*function CustomAlert(){
    this.alert = function(html){
        dialogboxhead=html;

    }
   }*/