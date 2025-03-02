const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'test'); // Укажите вашу директорию
const extensionToDelete = '.txt';

// Функция для удаления файлов с указанным расширением
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.error('Ошибка при чтении директории:', err);
    }

    files.forEach(file => {
        if (path.extname(file) === extensionToDelete) {
            const filePath = path.join(directoryPath, file);
            fs.unlink(filePath, (err) => {
                if (err) {
                    return console.error('Ошибка при удалении файла:', err);
                }
                console.log(`Удалён файл: ${file}`);
            });
        }
    });

    // После завершения удаления выводим оставшиеся файлы
    fs.readdir(directoryPath, (err, remainingFiles) => {
        if (err) {
            return console.error('Ошибка при чтении директории:', err);
        }
        console.log('Оставшиеся файлы:', remainingFiles);
    });
});