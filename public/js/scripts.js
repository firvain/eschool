 jQuery(document).ready(function($) {
   if (getCookie('zoom') === "1") {
     $("[name='textChange']").bootstrapSwitch('state', true);
   } else {
     $("[name='textChange']").bootstrapSwitch('state', false);
   }
   if (getCookie('grayscale') === "1") {
     $("[name='grayscale']").bootstrapSwitch('state', true);
   } else {
     $("[name='grayscale']").bootstrapSwitch('state', false);
   }
   if (getCookie('highcontrast') === "1") {
     $("[name='highContrast']").bootstrapSwitch('state', true);
   } else {
     $("[name='highContrast']").bootstrapSwitch('state', false);
   }
   if ($("[name='textChange']").bootstrapSwitch('state') === true) {
     $('body').addClass('zoom');
   } else {
     $('body').removeClass('zoom');
   }
   if ($("[name='grayscale']").bootstrapSwitch('state') === true) {
     grayscale($('body'));
   } else {
     grayscale.reset();
   }
   if ($("[name='highContrast']").bootstrapSwitch('state') === true) {
     grayscale($('body'));
     $('body').addClass('highContrast');
   } else if ($("[name='highContrast']").bootstrapSwitch('state') === false & $("[name='grayscale']").bootstrapSwitch('state') === true) {
     $('body').removeClass('highContrast');
   } else if($("[name='highContrast']").bootstrapSwitch('state') === false & $("[name='grayscale']").bootstrapSwitch('state') === false){
     grayscale.reset();
       $('body').removeClass('highContrast');
   }
   $('input[name="textChange"]').on('switchChange.bootstrapSwitch', function(event, state) {
     if (state === true) {
       $('body').addClass('zoom');
       setCookie('zoom', 1, 365);
     } else {
       $('body').removeClass('zoom');
       document.cookie = "zoom=;expires=Thu, 01 Jan 1970 00:00:00 UTC";
     }
   });
   $('input[name="grayscale"]').on('switchChange.bootstrapSwitch', function(event, state) {
     if (state === true) {
       grayscale($('body'));
       setCookie('grayscale', 1, 365);
     } else {
       grayscale.reset();
       document.cookie = "grayscale=;expires=Thu, 01 Jan 1970 00:00:00 UTC";
     }
   });
   $('input[name="highContrast"]').on('switchChange.bootstrapSwitch', function(event, state) {
     if (state === true) {
       grayscale($('body'));
       $('body').addClass('highContrast');
       setCookie('highcontrast', 1, 365);
     } else {
       grayscale.reset();
       $('body').removeClass('highContrast');
       document.cookie = "highcontrast=;expires=Thu, 01 Jan 1970 00:00:00 UTC";
     }
   });
 });

 function setCookie(c_name, value, exdays) {
   var exdate = new Date();
   exdate.setDate(exdate.getDate() + exdays);
   var c_value = escape(value) + ((exdays === null) ? "" : "; expires=" + exdate.toUTCString());
   document.cookie = c_name + "=" + c_value;
 }

 function getCookie(cname) {
   var name = cname + "=";
   var ca = document.cookie.split(';');
   for (var i = 0; i < ca.length; i++) {
     var c = ca[i];
     while (c.charAt(0) == ' ') c = c.substring(1);
     if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
   }
   return "";
 }
  var amountScrolled = 300;
  $(window).scroll(function() {
    if ($(window).scrollTop() > amountScrolled) {
      $('a.back-to-top').fadeIn('slow');
    } else {
      $('a.back-to-top').fadeOut('slow');
    }
  });