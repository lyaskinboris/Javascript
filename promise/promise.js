function StartReading(book) {
  let startReadingABook = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('����� ����� ������ ' + book.name);      
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
      console.log('��������� ������ ����� : ' + book.name);      
      if (Math.random() > 0)
        console.log('���� ������');
    }, 1000);
    return book;
  })
  .then((book) => {
    setTimeout(() => {
      console.log('������� ���������� ������ ����� : ' + book.name);      
      if (Math.random() > 0)
        console.log('��������� ������ �����: ' + book.name);
    }, 1000);
  })
  .catch((error) => console.log(error.message));