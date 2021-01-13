/*La función se ejecuta tan pronto como carga el sitio.*/
window.onload = function() {
  
  var isAnAdult = ReadCookie('isAnAdult');
   if (isAnAdult == null) {
    $.confirm('<img class="logo" src="assets/LOGO_TRIBOS_black.png"></img> <hr> Este sitio en internet está dirigido al uso personal de individuos mayores de edad <br> en países y territorio en que el consumo de bebidas alcohólicas es permitido <br> por las leyes correspondientes'
    ,{
      title:'Terminos y Condiciones.',
      em:'¿Eres mayor de 18 años?',
      callEvent:function(){
        $.alert('Al entrar al sitio usted acepta los términos y condiciones de uso y la política de privacidad. <br> El abuso de alcohol es dañino para la salud.'
        ,{
          title: 'Bienvenido',
          confirmButton:'Entendido',
          callEvent:function(){
            Set_Read_Cookie();
          }
        })
      },
      cancelEvent:function(){
        location.replace("https://www.google.com")
      },
      cancelButton:'No.',
      confirmButton:'Si.',
    },
    )
   };
};

function Set_Read_Cookie() {
      var days = 1; //number of days until they must go through the age checker again.
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
      document.cookie = 'isAnAdult=true;'+expires+"; path=/";
      location.reload();
   };

   function ReadCookie(name) {
     var nameEQ = name + "=";
     var ca = document.cookie.split(';');
     for(var i=0;i < ca.length;i++) {
       var c = ca[i];
       while (c.charAt(0)==' ') c = c.substring(1,c.length);
       if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
     }
     return null;
   };