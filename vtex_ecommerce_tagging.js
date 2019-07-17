///////////////////////////////////////////////////////////////////////////////////
  ////      VTEX PLUGIN v. 1.1.101.248  comScore Digital Analytix Inline Tag     ////
 ////     Please verify the specifications in the documentation                 ////
////     You should only copy and paste this code on Google Tag Manager        ////
////    Please fill the c2 parameter and the ns_site parameter infomed by     ////
////   Your consultant                                                       ////
////////////////////////////////////////////////////////////////////////////////
// <![CDATA[
function udm_(a){var b="comScore=",c=document,d=c.cookie,e="",f="indexOf",g="substring",h="length",i=2048,j,k="&ns_",l="&",m,n,o,p,q=window,r=q.encodeURIComponent||escape;if(d[f](b)+1)for(o=0,n=d.split(";"),p=n[h];o<p;o++)m=n[o][f](b),m+1&&(e=l+unescape(n[o][g](m+b[h])));a+=k+"_t="+ +(new Date)+k+"c="+(c.characterSet||c.defaultCharset||"")+"&c8="+r(c.title)+e+"&c7="+r(c.URL)+"&c9="+r(c.referrer),a[h]>i&&a[f](l)>0&&(j=a[g](0,i-8).lastIndexOf(l),a=(a[g](0,j)+k+"cut="+r(a[g](j+1)))[g](0,i)),c.images?(m=new Image,q.ns_p||(ns_p=m),m.src=a):c.write("<","p","><",'img src="',a,'" height="1" width="1" alt="*"',"><","/p",">")}
//Bellow were used some regex to validate the parameter name
// Match with Slash
var slh_f = /[\/]/;
//Match with Slash
var slh_m = /[\b\/]/;
//Match with Last slash
var slh_l = /[\/]$/g;
//Match with Blank spaces
var cls = /[\s]/g;
//Match with Point
var dpoint = /\b\./;
//Match with point at end
var epoint = /\.$/g;
//Look for the pathName
var name = location.pathname;
name = name.toLowerCase().replace(slh_f, "");
name = name.toLowerCase().replace(slh_m, ".");
var prod_pag = /\.p$/g;
if(prod_pag.test(name) == true) {
    var name_aux = jQuery("h1.lead:first").text();
    name = jQuery(".breadcrumb").text();

    var cl_nm = /\s/g;
    var cl_guion = /\-jumbocolombia\/\-/g;
    name = name.replace(cl_nm, "-");
    name = name.replace(cl_guion, "").toLowerCase();
    var cl_nm = /\s/g;
    var cl_nm_aux = /_-_/g;
    var exq = /[é]/g;
    var ixq = /[í]/g;
    var oxq = /[ó]/g;
    var uxq = /[ú]/g;
    var nxq = /[ñ]/g;
    name = name.replace(cl_nm, "");
    name = name.replace(slh_f, ".");
    name = name.replace(slh_m, ".");
    name = name.replace(slh_l, ".");
    name = name.replace(epoint, "");
    name_aux = name_aux.replace(cl_nm, "_");
    name_aux = name_aux.replace(cl_nm_aux, ".").toLowerCase();
    name_aux = name_aux.replace(slh_l, "-");
    name_aux = name_aux.replace(slh_m, "-");
    name_aux = name_aux.replace(slh_f, "-");
    name = name + "." + name_aux;
    var axq = /[á]/g;
    name = name.replace(axq, "a");
    name = name.replace(exq, "e");
    name = name.replace(ixq, "i");
    name = name.replace(oxq, "o");
    name = name.replace(nxq, "n");
}
//First step on the shop cart

if(location.pathname == "/checkout/" & location.hash == "#/cart"){
 setTimeout(function(){
    var name_aux = jQuery(".product-name > a").map(function () {
        return $(this).text();

    });

    for(i = 0; i < name_aux.length; i++) {
        name = name_aux[i];
        name = name.toLowerCase();
        name = name.replace(cl_nm, "");
        name = name.replace(slh_f, ".");
        name = name.replace(slh_m, ".");
        name = name.replace(slh_l, ".");
        name = name.replace(epoint, "");
        name = name.replace(cl_nm, "_");
        name = name.replace(slh_l, "-");
        name = name.replace(slh_m, "-");
        name = name.replace(slh_f, " - ");
        name = name.replace(axq, "a");
        name = name.replace(exq, "e");
        name = name.replace(ixq, "i");
        name = name.replace(oxq, "o");
        name = name.replace(nxq, "n");
        udm_('http' + (document.location.href.charAt(4) == 's' ? 's://sb' : '://b') + '.scorecardresearch.com/b?c1=2&c2=[CLIENT_ID_HERE]&ns_site=jumbo&name=' + name + '.carrito-de-compra.paso1');
    }
}, 1000);
}
jQuery("#cart-to-orderform").click(function () {
    //Through the click on the button the step 2 is tagged
    udm_('http' + (document.location.href.charAt(4) == 's' ? 's://sb' : '://b') + '.scorecardresearch.com/b?c1=2&c2=[CLIENT_ID_HERE]&ns_site=jumbo&name=carrito-de-compra.paso2');
});
//Through the click on the button the step 3 is tagged
jQuery("#btn-client-pre-email").click(function () {
    udm_('http' + (document.location.href.charAt(4) == 's' ? 's://sb' : '://b') + '.scorecardresearch.com/b?c1=2&c2=[CLIENT_ID_HERE]&ns_site=jumbo&name=carrito-de-compra.paso3');
});

if(location.pathname == "/checkout/orderPlaced/") {
    name = "pagina.conversion";
}
//Set the main page, Please verify your main page
else if(location.pathname == "/") {
    name = "jumbocolombia.home";
    //If there is only one name after slash complete with ".home" because is a main page
} else if(dpoint.test(name) == false) {
    name = name.toLowerCase() + ".home";
    //Here in used to validate the last statment
} else if(epoint.test(name) == true) {
    name = name.toLowerCase() + "home";
    //If there is a slash "\" replace to "."
} else if(slh_m.test(name) == true) {
    name = name.toLowerCase().replace(slh_m, ".");
    //if the slash was replaced and there is a "." at end with one directory complete with "home"
} else if(epoint.test(name) == true) {
    name = name.toLowerCase() + "home";
    //If in the name there is blank space replace to "_"
} else if(cls.test(name) == true) {
    name = decodeURI(name).replace(cls, "_");
}

//Finally is used to validate a "." at end
//A point at end
var pfinal = /\.$/;
//If there is a point at end replace to ""
if(pfinal.test(name) == true) {
    name = name.replace(pfinal, "");
}
//Final blank spaces
var fibs = /\s/g;
if(fibs.test(name) == true) {
    name = name.replace(fibs, "_");
}
udm_('http' + (document.location.href.charAt(4) == 's' ? 's://sb' : '://b') + '.scorecardresearch.com/b?c1=2&c2=[CLIENT_ID_HERE]&ns_site=jumbo&name=' + name);
// ]]>
<noscript><p><img src="http://b.scorecardresearch.com/p?c1=2&c2=[CLIENT_ID_HERE]&ns_site=jumbo&name=page.name.here" height="1" width="1" alt="*"></p></noscript>
<!-- End Digital Analytix Tag -->
