function increaseByTenPercent(numbers) {
    if (!Array.isArray(numbers)) {
        throw new Error("Входной параметр должен быть числом.");
    }
    return numbers.map(num => {
        if (typeof num !== 'number') {
            throw new Error("Все элементы должны быть числами.");
        }
        return num + (num * 0.1); 
    });
}
const originalArray = [100, 200, 300];
const updatedArray = increaseByTenPercent(originalArray);

console.log(updatedArray); // [110, 220, 330]