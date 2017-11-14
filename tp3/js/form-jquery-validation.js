$(document ).ready(function() {

  $("#submit").on("click",function(){
    
    if($("#nom").val().length>1 &&
       $("#prenom").val().length>4 &&
       $("#datepicker").val().length>4 &&
       $("#adresse").val().length>4 &&
       $("#mail").val().length>4){

       $(".modal-title").text("Bienvenue " + $("#prenom").val());
       $(".modal-body").html('Vous êtes né le ' + $("#datepicker").val() + '<img src="https://maps.googleapis.com/maps/api/staticmap?center=' + $("#adresse").val() + ',CA&zoom=13&size=400x400&"/><br> et vous habitez <a href="http://maps.google.com/maps?q=' + $("#adresse").val() + '">'+ $("#adresse").val() + '</a>');
       $("#myModal").modal("show");
    }

    else if($("#nom").val().length==0 ||
       $("#prenom").val().length==0 ||
       $("#datepicker").val().length==0 |
       $("#adresse").val().length==0 ||
       $("#mail").val().length==0){
    
       $("#myModal").modal("show");
    }

    else {
		 $(".modal-body").text("Pas assez de caractère");
       $("#myModal").modal("show");
    }
  });
});