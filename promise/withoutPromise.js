let book = { name: 'MyBook' };
StartReading(book,
  //resolve() for StartReading
  () => {
    console.log('����� ����� ������ ' + book.name);
 
    StopReadingBook(book,
      //resolve() for StopReadingBook
      () => {
        console.log('���� ������');

        ContinuteReadingBook(book,
          //resolve() for ContinuteReadingBook
          () => console.log(`��������� ������ �����: ${book.name}`),
          //reject() for ContinuteReadingBook
          () => Console.log('Error stop read')
        );
      },

      //reject() for StopReadingBook
      () => Console.log('Error stop read')
    );
  },
  //reject() for StartReading
  () => console.log('�������� �����-��')
);


function StartReading(book, resolve, reject) {
  setTimeout(() => {
    console.log('��������� �������');
    if (Math.random() > 0)
      resolve();
    else 
      reject();
  }, 1000);
}

function StopReadingBook(book, resolve, reject) {
  setTimeout(() => {
    console.log('��������� ������ ����� : ' + book.name);    
    if (Math.random() > 0)
      resolve();
    else 
      reject();
  }, 1000);
}

function ContinuteReadingBook(book, resolve, reject) {
 setTimeout(() => {
  console.log('������� ���������� ������ ����� : ' + book.name); 
    if (Math.random() > 0)
      resolve();
    else 
      reject();
  }, 1000);
}


