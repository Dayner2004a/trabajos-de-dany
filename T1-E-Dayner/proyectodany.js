const _private = new WeakMap();

class Book {
  
  constructor(title, author, price) {
   
    _private.set(this, {
      title: title,
      author: author,
      price: price
    });
  }


  getTitle() {
    return _private.get(this).title;
  }

  getAuthor() {
    return _private.get(this).author;
  }

  getPrice() {
    return _private.get(this).price;
  }

  
  setTitle(newTitle) {
    _private.get(this).title = newTitle;
  }

  setAuthor(newAuthor) {
    _private.get(this).author = newAuthor;
  }

  setPrice(newPrice) {
    _private.get(this).price = newPrice;
  }

  // Método para mostrar información del libro
  printDetails() {
    console.log(
      `Title: ${this.getTitle()}, Author: ${this.getAuthor()}, Price: ${this.getPrice()}`
    );
  }
}