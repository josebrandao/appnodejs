function book(title,pages,isbn){//{1}}
  this.title = title;
  this.pages = page;
  this.isbn = isbn;
}
Book.prototype.printTitle = function(){
    console.log(this.title)
}
