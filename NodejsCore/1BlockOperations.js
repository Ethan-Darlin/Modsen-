const fs = require('fs');
const path = require('path');

const inputFilePath = path.join(__dirname, 'input.txt');
const outputFilePath = path.join(__dirname, 'output.txt');

// Блокирующее чтение и запись
try {
    const data = fs.readFileSync(inputFilePath, 'utf8');
    fs.writeFileSync(outputFilePath, data);
    console.log('Блокирующее чтение и запись завершено.');
} catch (err) {
    console.error('Ошибка:', err);
}
//


const inputFilePath1 = path.join(__dirname, 'input.txt');
const outputFilePath1 = path.join(__dirname, 'output.txt');

// Неблокирующее чтение и запись
const readStream = fs.createReadStream(inputFilePath1, 'utf8');
const writeStream = fs.createWriteStream(outputFilePath1);

readStream.on('data', (chunk) => {
    writeStream.write(chunk);
});

readStream.on('end', () => {
    writeStream.end();
    console.log('Неблокирующее чтение и запись завершено.');
});

readStream.on('error', (err) => {
    console.error('Ошибка при чтении:', err);
});

writeStream.on('error', (err) => {
    console.error('Ошибка при записи:', err);
});