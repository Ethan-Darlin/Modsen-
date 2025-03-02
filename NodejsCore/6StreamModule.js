const fs = require('fs');


const sourceFilePath = 'input.txt'; 
const destinationFilePath = 'destination.txt'; 

const readStream = fs.createReadStream(sourceFilePath);

const writeStream = fs.createWriteStream(destinationFilePath);

readStream.pipe(writeStream);

readStream.on('error', (err) => {
    console.error('Ошибка при чтении файла:', err);
});

writeStream.on('finish', () => {
    console.log('Файл успешно скопирован!');
});

writeStream.on('error', (err) => {
    console.error('Ошибка при записи файла:', err);
});