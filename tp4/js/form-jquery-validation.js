$(document ).ready(function() {

  console.log("Salut");

  $("#name").keyup(function(){
    $("#currlengthName").text($("#name").val().length + " car.");
  });

  $("#firstname").keyup(function(){
    $("#currlengthFirstname").text($("#firstname").val().length + " car.");
  });


  $("#gps").on("click",function(){
    getLocation();
  });

  var list = contactStore.getList();

  $("#add").on("click",function(){
 
    if($("#name").val().length>1 &&
       $("#firstname").val().length>4 &&
       $("#birth").val().length>4 &&
       $("#adresse").val().length>4 &&
       $("#mail").val().length>4){

       document.querySelector("table tbody").innerHTML = "";
   
       contactStore.add($("#name").val(), $("#firstname").val(), $("#birth").val(), $("#adresse").val(), $("#mail").val());  

       for(var index in list){
         document.querySelector("table tbody").innerHTML +=
         "<tr><td>" + list[index].name + "</td><td>" 
         + list[index].firstname + "</td><td>" 
         + list[index].date + "</td><td>" 
         + '<a href="https://maps.google.com/?q=' + list[index].adress+ '">' + list[index].adress + '</a></td><td>' 
         + '<a href="mailto:' + list[index].mail + '">' + list[index].mail + '</a></td></tr>'
       }  
       $(".modal-title").text("Confirmation"); 
       $(".modal-body").text("Contact ajouté");
       $("#myModal").modal("show");
   }

    else if($("#name").val().length==0 ||
       $("#firstname").val().length==0 ||
       $("#birth").val().length==0 |
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
