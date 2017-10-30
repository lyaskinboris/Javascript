function StartReading(book) {
  let startReadingABook = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Книгу начал читать ' + book.name);      
      if (Math.random() > 0)
        resolve(book);
      else
        reject();
    }, 1000);
  });
  return startReadingABook;
}

let book = { name: 'MyBook' };
StartReading(book)
  .then((book) => {
    setTimeout(() => {
      console.log('Остановка чтения книги : ' + book.name);      
      if (Math.random() > 0)
        console.log('Стоп читать');
    }, 1000);
    return book;
  })
  .then((book) => {
    setTimeout(() => {
      console.log('Пытаюсь продолжить читать книгу : ' + book.name);      
      if (Math.random() > 0)
        console.log('Продолжаю читать книгу: ' + book.name);
    }, 1000);
  })
  .catch((error) => console.log(error.message));