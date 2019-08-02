//Declarações X Expressões
//1)
//Declarei uma função
function Soma(num1,num2){
  return num1+num2;
}
//Declarei uma expressão
var x = function(num1,num2){
  return num1+num2;
};
//note que a expressão leva ; no final

//Uma declaração de função pode ser hoisted ou içada
//isto quer dizer que podemos definir a função antes de declará-la
//Exemplo
var result = Soma(6,7)
function Soma(num1,num2){
  return num1+num2;
}
//funciona normalmente mesmo pondo var result no final
//Declaração de uma expressão não funciona
//Exemplo abaixo

//Declarei uma expressão
var result = Soma(6,7)//erro
var Soma = function(num1,num2){
  return num1+num2;
};
function sayHi(){
  console.log("sayHai")
}
sayHay()//print sayHay
var sayHay2 = sayHay;
sayHay2()//print sayHay2
var person = {
  this.name:name,
  this.address:address,
  soma:funtion(){
    return this.name;
  }

};//object declared
var person = {
  name: "Nicholas",
  adress: "Rua-B",
  //test: a[],
  sayName:function(){
    console.log(person.name)
    }
}
//utilização dos métodos this,call e apply
//var item = Object.keys(person); enumera os objetos
var item = Object.keys(person);
//Objectos literais var person{pair:value}
//Posso utilizar functions var person{pair:function(){}}
//iterando/enumerando entre os objetos
for(item in person){
    console.log("::: " + item)
}
//const
//object literal
//issues when you need to define a new Object
//so we need to create a constructor for that
const circle = {
  radius:1, //members or properties
  location: {
    x:1,
    y:1
  },
  draw:function(){//method here
    console.log('draw')
  }
};
circle.draw()//method here
//the same code but using a constructor
//Factory function is the first way to create 1 object
function createCircle(){
  return {
    radius, //members or properties
    draw: function(){//method here
      console.log('draw');
    }
  };
}
const circle = createCircle(1)
//The second one is constructor
function Circle(radius){
  this.radius = radius;
  this.draw = function(){
    console.log('draw')
  }}
//package tern.js no atom
  const another = new Circle(1)
