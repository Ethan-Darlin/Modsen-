const http = require('http');
const url = require('url');

let items = []; // Массив для хранения элементов
let currentId = 1; // Уникальный идентификатор для новых элементов

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const method = req.method;

    // Эндпоинт для получения списка элементов
    if (method === 'GET' && parsedUrl.pathname === '/items') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(items));

    // Эндпоинт для получения элемента по идентификатору
    } else if (method === 'GET' && parsedUrl.pathname.startsWith('/items/')) {
        const id = parseInt(parsedUrl.pathname.split('/')[2], 10);
        const item = items.find(i => i.id === id);

        if (item) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(item));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Item not found' }));
        }

    // Эндпоинт для добавления нового элемента
    } else if (method === 'POST' && parsedUrl.pathname === '/items') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const newItem = JSON.parse(body);
            newItem.id = currentId++;
            items.push(newItem);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(newItem));
        });

    // Эндпоинт для обновления существующего элемента
    } else if (method === 'PUT' && parsedUrl.pathname.startsWith('/items/')) {
        const id = parseInt(parsedUrl.pathname.split('/')[2], 10);
        const itemIndex = items.findIndex(i => i.id === id);

        if (itemIndex !== -1) {
            let body = '';

            req.on('data', chunk => {
                body += chunk.toString();
            });

            req.on('end', () => {
                const updatedItem = JSON.parse(body);
                items[itemIndex] = { ...items[itemIndex], ...updatedItem };
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(items[itemIndex]));
            });
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Item not found' }));
        }

    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Not Found' }));
    }
});

// Запуск сервера
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
//http://localhost:3000/items
//http://localhost:3000/items/1
//POST http://localhost:3000/items -H "Content-Type: application/json" -d '{"name": "Item 1"}'