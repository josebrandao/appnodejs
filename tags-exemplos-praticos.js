function() {
    try {
    //Click Text and Click URL are variables from GTM
        CliqueGal = {{Click Text}} || "";
    //This means OR the variable is set either a VOID string "" to avoid a message error on console    
        CliqueGalUrl = {{Click URL}} || "";
        if (CliqueGalUrl.match("PublishingImages/gal-home/GAL_ATENDIMENTO.jpg")) {
            console.log("a condicao funcionou ")
            CliqueGal = "GAL Menu Superior - Posso ajudar";
        } else if (CliqueGal.match("Olá! Eu sou a Gal, posso ajudar")) {

            CliqueGal = "GAL Carrossel - Posso ajudar";

        } else if (CliqueGal.match("posso ajudar?")) {

            CliqueGal = "GAL Carrossel - Posso ajudar";

        } else if (CliqueGal.match("Iniciar atendimento")) {

            CliqueGal = "GAL Menu Lateral - Iniciar Atendimento";

        }

    } catch (err) {
        console.log(" Ocorreu erro: " + err.message)
    }
    return CliqueGal;
}
//To get the alt atribb using VANILLA JS
var GetCliqueGal = document.querySelector("div:nth-child(1) > a > figure > img");  
   	    Step1 = GetCliqueGal.getAttribute('alt');
