// Begin OPTIONS

// ONLY USE lowercase FOR ALL OPTIONS


var clickaway	= "yes"		// USE CLICK OFF MENU SCRIPT | yes | no |
var viewer 	= "same"	// PRODUCT VIEWER OPTIONS: | new | same | New browser or same



// COPYRIGHT 2017 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law
// YOU DO NOT NEED TO EDIT BELOW THIS LINE




// JQUERY CLICK MENU SCRIPT TOGGLE

function toggleDiv(divId) {
   $("#"+divId).toggle("fast");
}




// CLOSE MENU IF CLICKED AWAY FROM

   if (clickaway == "yes") {

$(document).click(function(event) {
    if(!$(event.target).closest('#menu-sub').length) {
      if(!$(event.target).closest('#menu-top').length) {
        if($('#menu-sub').is(":visible")) {
            $('#menu-sub').hide();
       }
     }
   }
 });
}




// PRODUCTS IMAGE VIEW CODE

function ViewImage(data) {
   if (viewer == "new") {
    windowHandle = window.open('product-viewer.htm' + '?' + data,'windowName');
}
else if (viewer == "same") {
    window.location = ('product-viewer.htm' + '?' + data);
}
}
