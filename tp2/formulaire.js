function valider(){

	if(document.getElementById("nom").value.length<3
	  || document.getElementById("prenom").value.length<5
	  || document.getElementById("date").value.length<5
	  || document.getElementById("adresse").value.length<5
	  || document.getElementById("mail").value.length<5){

		document.querySelector("#resultat").style.visibility="hidden";
		document.querySelector("#error").style.visibility="visible";
		document.getElementById("error").innerHTML = "Saisir au moins 5 caractères dans chaque champs";
	}

	else{
		document.querySelector("#error").style.visibility="hidden";
		document.querySelector("#resultat").style.visibility="visible";
		document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;
	}
}
