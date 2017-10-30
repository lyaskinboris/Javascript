let book = { name: 'MyBook' };
StartReading(book,
  //resolve() for StartReading
  () => {
    console.log('Книгу начал читать ' + book.name);
 
    StopReadingBook(book,
      //resolve() for StopReadingBook
      () => {
        console.log('Стоп читать');

        ContinuteReadingBook(book,
          //resolve() for ContinuteReadingBook
          () => console.log(`Продолжаю читать книгу: ${book.name}`),
          //reject() for ContinuteReadingBook
          () => Console.log('Error stop read')
        );
      },

      //reject() for StopReadingBook
      () => Console.log('Error stop read')
    );
  },
  //reject() for StartReading
  () => console.log('Проблемы какие-то')
);


function StartReading(book, resolve, reject) {
  setTimeout(() => {
    console.log('Обработка запроса');
    if (Math.random() > 0)
      resolve();
    else 
      reject();
  }, 1000);
}

function StopReadingBook(book, resolve, reject) {
  setTimeout(() => {
    console.log('Остановка чтения книги : ' + book.name);    
    if (Math.random() > 0)
      resolve();
    else 
      reject();
  }, 1000);
}

function ContinuteReadingBook(book, resolve, reject) {
 setTimeout(() => {
  console.log('Пытаюсь продолжить читать книгу : ' + book.name); 
    if (Math.random() > 0)
      resolve();
    else 
      reject();
  }, 1000);
}


