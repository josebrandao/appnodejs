function validaDevice() {
  var width = window.innerWidth,
      screenType;
  if (width <= 520) {
      screenType = "mobile";
  } else if (width <= 820) {
      screenType = "tablet";
  } else {
      screenType = "desktop";
  }
  
  return screenType;
}
console.log(validaDevice())

function addStyle(styles) {
  /* Create style document */
  var css = document.createElement('style');
  css.type = 'text/css';
  if (css.styleSheet)
      css.styleSheet.cssText = styles;
  else
      css.appendChild(document.createTextNode(styles));
  /* Append style to the tag name */
  document.getElementsByTagName("head")[0].appendChild(css);
}
/* Set the style */
var styles = '@media (max-width:768px){.s-car-info{overflow-y:hidden}}@media (min-width:769px){.c-navigation__list{overflow-x:hidden;height:550px}.c-navigation__list::-webkit-scrollbar{background:rgba(0,0,0,.7);border-radius:15px;width:5px}.c-navigation__list::-webkit-scrollbar-thumb{background:#fe072f;border-radius:15px}}.s-car-info__navigation{max-width:210px}.s-car-info__detail-wrapper{display:inline-block;position:relative;max-width:590px;margin-right:15px}';
/* Function call */
/*if is differente of mobile and table apply the internal scrolls*/
if (validaDevice() != "mobile" && "tablet") {
  
 window.onload = function() {
     addStyle(styles)
  };
} else if (validaDevice() == "mobile" && "tablet") {
  //  block of code to be executed if the condition1 is false and condition2 is true
  /*if is mobile just change the style related to font-size*/
var styles = '.c-navigation__car-complementary{bottom: 0;}.c-navigation__button-car{padding-top:100px !important;}.c-navigation__car-name{top:calc(100% - 40px);}';
window.onload = function() {
   addStyle(styles)
};
var txt1 = document.getElementsByClassName("c-navigation__car-complementary");
for(i=0;i<=txt1.length;i++){
  var aux1 = txt1[i].innerHTML;
  var a = aux1.split(" ");
  var x=[a.slice(0, 2), "<br>", a.slice(2)].join(" ")
  var x = x.replace(",", " ");
  var x1 = x.replace(",", " ");
  var x2 = x1.replace(",", " ");
  var x3 = x2.replace(",", " ");
  txt1[i].innerHTML = x3;
}
}
