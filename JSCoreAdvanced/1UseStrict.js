"use strict";

function factorial(n) {
    if (n < 0) {
        throw new Error("Использовано отрицательное число!.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Пример использования
console.log(factorial(5)); // 120