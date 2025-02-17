// Пример возвращающей Promise
function asyncOperation(value, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Операция завершена: ${value}`);
            resolve(value);
        }, delay);
    });
}

// серии асинхронных операций последовательно
function executeAsyncSeries(operations) {
    return operations.reduce((promise, operation) => {
        return promise.then(() => asyncOperation(operation.value, operation.delay));
    }, Promise.resolve());
}

// Пример использования
const operations = [
    { value: "Операция 1", delay: 1000 }, // 1 секунда
    { value: "Операция 2", delay: 1500 }, // 1.5 секунды
    { value: "Операция 3", delay: 500 }    // 0.5 секунды
];

executeAsyncSeries(operations)
    .then(() => {
        console.log("Все операции выполнены!");
    })
    .catch((error) => {
        console.error("Произошла ошибка:", error);
    });