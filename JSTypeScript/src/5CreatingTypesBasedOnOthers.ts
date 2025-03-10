// Функция для сортировки массива
function sortArray<T>(arr: T[]): T[] {
    return arr.slice().sort(); // Сортировка с созданием копии массива
  }
  
  // Примеры использования
  const numberArray = [5, 3, 8, 1, 4];
  const sortedNumbers = sortArray(numberArray);
  console.log(sortedNumbers); // Вывод: [1, 3, 4, 5, 8]
  
  const stringArray = ["banana", "apple", "orange"];
  const sortedStrings = sortArray(stringArray);
  console.log(sortedStrings); // Вывод: ["apple", "banana", "orange"]
  
  // Условные типы
  type ConditionalType<T extends boolean> = T extends true ? string : number;
  
  // Примеры использования
  type TrueType = ConditionalType<true>;  // string
  type FalseType = ConditionalType<false>; // number
  
  // Функция для получения ключей объекта
  function getObjectKeys<T extends object>(obj: T): Array<keyof T> {
    return Object.keys(obj) as Array<keyof T>;
  }
  
  // Примеры использования
  const exampleObject = {
    name: "Alice",
    age: 30,
    isActive: true,
  };
  
  const keys = getObjectKeys(exampleObject);
  console.log(keys); // Вывод: ["name", "age", "isActive"]