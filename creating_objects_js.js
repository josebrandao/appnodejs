//Este é um exemplo de declaração de classe javascript
function book(title,pages,isbn){//{1}}
  this.title = title;
  this.pages = page;
  this.isbn = isbn;
}
//Aqui estamos criando um método
Book.prototype.printTitle = function(){
    console.log(this.title)
}
