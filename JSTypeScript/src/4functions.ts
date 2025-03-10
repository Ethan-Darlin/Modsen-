function combine(a: number, b: string): string;
function combine(a: string, b: number): string;
function combine(a: number | string, b: number | string): string {
  if (typeof a === 'number' && typeof b === 'string') {
    return a + b; 
  } else if (typeof a === 'string' && typeof b === 'number') {
    return a + b; 
  } else {
    throw new Error('Arguments must be of different types (one number and one string).');
  }
}

// Примеры использования
const result1 = combine(5, " apples");        // Возвращает "5 apples"
const result2 = combine("The number is ", 10); // Возвращает "The number is 10"

console.log(result1); // Вывод: 5 apples
console.log(result2); // Вывод: The number is 10

// Пример с ошибкой
// console.log(combine(5, 10)); // Вызывает ошибку