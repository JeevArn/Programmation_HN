function date_heure() {
	var now = new Date();
	var annee = now.getFullYear();
	var mois = ('0'+now.getMonth()+1).slice(-2);
	var jour = ('0'+now.getDate()).slice(-2);
	var heure = ('0'+now.getHours()).slice(-2);
	var minute = ('0'+now.getMinutes()).slice(-2);
	var seconde = ('0'+now.getSeconds()).slice(-2);
 	document.getElementById("holder1").innerHTML = "Nous sommes le "+jour+"/"+mois+"/"+annee+" et il est "+heure+"h "+minute+"min "+seconde+"s.";
 	document.getElementById("btn2").style.display= "inline";
 }

function maj() {
	let text = document.getElementById("holder1").innerHTML;
	document.getElementById("holder1").innerHTML = text.toUpperCase();
}


 