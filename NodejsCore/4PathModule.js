const path = require('path');

if (process.argv.length < 3) {
    console.error('Пожалуйста, укажите путь к файлу в качестве аргумента.');
    process.exit(1);
}


const filePath = process.argv[2];
const directoryName = path.dirname(filePath);
const fileExtension = path.extname(filePath);
console.log(`Имя директории: ${directoryName}`);
console.log(`Расширение файла: ${fileExtension}`);

//node .\4PathModule.js /test/1.txt