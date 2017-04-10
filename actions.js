///////////////////////////////////////////////////
///// Funzioni per il form di iscrizione
//////////////////////////////////////////////////

function selectName(formField,fieldLabel)
{
	var result = true;
	
	if ((formField.value == "") || (formField.value == "undefined"))
	{
		alert('Il campo "' + fieldLabel +'" è obbligatorio.');
		formField.focus();
		result = false;
	}
	
	return result;
}

function selectSurname(formField, fieldLabel)
{
    var result = true;
    if ((formField.value == "") || (formField.value == "undefined")) 
    {
        alert('Il campo "' + fieldLabel +'" è obbligatorio.');
        formField.focus();
        result = false;
    }
    return result;
}

function selectEmail(formField)
{
    var result = true;
    var email_reg_exp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-]{2,})+\.)+([a-zA-Z0-9]{2,})+$/;

    if (!email_reg_exp.test(formField.value) || (formField.value == "") || (formField.value == "undefined")) 
    {
        alert("Inserire un indirizzo email corretto: nome@dominio.nnn");
        formField.select();
        return false;
    }
    return result;
}


function passwordIns(formField, fieldLabel)
{
    var result = true;
    if(formField.value == "")
        {
            alert('Il campo "'+ fieldLabel +'" è obbligatorio.')
            formField.focus();
            result = false;
        }
     return result;
}

function controlPsw(formField)
{
    var result = true;
    var password = document.form1.password.value;
    
    if(formField.value == "")
    {
        alert("Il campo deve contenere la conferma della password inserita.")
        formField.focus();
        result = false;
    }
    
    else if (formField.value != password) 
    {
        alert("La password confermata è diversa da quella scelta, controllare.");
        formField.value = "";
        formField.focus();
        result = false;
    }
    return result;
}

function birthDate(formField)
{
    var result = true;
    
    if (formField.value.substring(2,3) != "/" || formField.value.substring(5,6) != "/" || isNaN(formField.value.substring(0,2)) || isNaN(formField.value.substring(3,5)) || isNaN(formField.value.substring(6,10))) 
    {
        alert("Inserire nascita in formato GG/MM/AAAA");
        formField.value = "";
        formField.focus();
        return false;
    } 
    else if (formField.value.substring(0,2) > 31)
    { 
        alert("Impossibile utilizzare un valore superiore a 31 per i giorni");
        formField.value = "";
        formField.select();
        return false;
    } 
    else if (formField.value.substring(3,5) > 12) 
    {
        alert("Impossibile utilizzare un valore superiore a 12 per i mesi");
        formField.value = "";
        formField.focus();
        return false;    
    }
    else if (formField.value.substring(6,10) > 1999) 
    {
        alert("Devi essere maggiorenne per usufruire del nostro servizio.");
        formField.value = "";
        formField.focus();
        return false;
    }
    return result;
}

function selectCity(formField, fieldLabel)
{
    var result = true;
    
    if ((formField.value == "") || (formField.value == "undefined"))
    {
        alert("Il campo '"+ fieldLabel +"' è obbligatorio.");
        formField.focus();
        result = false;
    }
    return result;
}

function selectCar(formField, fieldLabel)
{
    var result = true;
    
    if((formField.value == "") || (formField.value == "undefined"))
    {
        alert("Il campo '"+ fieldLabel +"' è obbligatorio.");
        formField.focus();
        result = false;
    }
    return result;
}

function selectTarga(formField)  
{
    var result = true;
    var targa_reg_exp = /^([A-Z])+\-(([001-999]{2,})+\-)+([A-Z]{2,})+$/;

    if (!targa_reg_exp.test(formField.value) || (formField.value == "") || (formField.value == "undefined")) 
    {
        alert("Inserire il Numero della Targa: AA-000-BB");
        formField.focus();
        return false;
    }
    return result;
}


function validateForm(x)
{
	if (!selectName(x.name,"Nome"))
		return false;
    
    if (!selectSurname(x.surname,"Cognome"))
        return false;
    
    if (!birthDate(x.date))
        return false;
    
    if (!selectCar(x.car, "Marca dell'auto"))
        return false;
    
    if (!selectTarga(x.targa))
        return false;
    
	if (!selectEmail(x.email))
		return false;
    
    if (!passwordIns(x.password, "Password"))
        return false;
    
    if (!controlPsw(x.conferma))
        return false;

    if (!selectCity(x.citta, "Città"))
        return false;
	
	return true;
}

////////////////////////////////////////////////////////////
// Funzioni per il form di login
/////////////////////////////////////////////////////////////
function loginEmail(formField)
{
    var result = true;
    var email_reg_exp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-]{2,})+\.)+([a-zA-Z0-9]{2,})+$/;

    if (!email_reg_exp.test(formField.value) || (formField.value == "") || (formField.value == "undefined")) 
    {
        alert("Inserire email: nome@dominio.nnn");
        formField.value = "";
        formField.focus();
        return false;
    }
    return result;
}

function loginPassword(formField)
{
    var result = true;
    if(formField.value == "")
        {
            alert('Inserire password.')
            formField.focus();
            result = false;
        }
     return result;
} 

function insertLogin(z)
{
    if (!loginEmail(z.emaillog))
        return false;
    
    if(!loginPassword(z.passwordlog))
        return false;
    
    return true;
}

////////////////////////////////////////////////////////////
// Funzioni proprie della pagina
/////////////////////////////////////////////////////////////
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

/////////////////////////////////////////////
// Funzioni per il Modal
////////////////////////////////////////////
$(document).ready(function(){
    $("#btnInv").click(function(){
        $("#myModal").modal();
    });
});


///////////////////////////////////////////
// Funzione per GoogleMap
//////////////////////////////////////////
 var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 44.4264000, lng: 8.9151900},
          zoom: 16
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Posizione trovata.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

/*function myMap() {
var myCenter = new google.maps.LatLng(44.4264000, 8.9151900);
var mapProp = {center:myCenter, zoom:12, scrollwheel:false, draggable:false, mapTypeId:google.maps.MapTypeId.ROADMAP};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
var marker = new google.maps.Marker({position:myCenter});
marker.setMap(map);
}*/

//////////////////////////////////////
// Funzione per il tooltip delle frecce
//////////////////////////////////////
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

//////////////////////////////////////
// Funzione per cancellare la textarea
//////////////////////////////////////
function Cancel(formField)
{
    formField.value = ""; 
}