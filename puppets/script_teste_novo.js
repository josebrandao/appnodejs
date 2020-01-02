<script type="application/javascript">
	var myVerif = setInterval(backgroSmart, 2000);
        var verifCount = 0;	 
//Waiting to execute
function backgroSmart(){
		 //Here I get the iframe
		 var ys =document.querySelector("#sas_70907>#img_23079208");
if(ys != null){
		 //a test console log retrieving the element
		 console.log(ys);
		 //cw means -> change width, should ocupy all width space
		 var cw = ys.width = "500";
		 //a test console log retrieving the change I - Width
		 console.log(cw);
		 //ch mean change height, in case, should be auto, or responsive here
		 var ch = ys.height = "250";
		 //a test console log retrieving the change II - Height
		 console.log(ch);
		//to ensure that is going to work was necessary to delay the function execution
console.log("Ya lo encontramos y concluimos");
clearInterval(myVerif);
}
else{
verifCount++;
if(verifCount >= 200){
clearInterval(myVerif);
console.log("Acabo el número de intentos");
}
console.log("Verificamos de nuevo");
}
}
</script>