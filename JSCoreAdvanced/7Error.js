class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function checkInteger(num) {
    if (!Number.isInteger(num)) {
        throw new CustomError("Ошибка: Введенное значение не является целым числом.");
    }
    console.log("Введенное значение является целым числом:", num);
}
try {
    checkInteger(10); //  не вызовет ошибку
    checkInteger(10.5); // вызовет ошибку
} catch (error) {
    console.error(error.name + ": " + error.message);
}