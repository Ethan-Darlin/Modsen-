type MyPartial<T> = {
    [K in keyof T]?: T[K];
  };
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
//Функция с типом возвращаемого значения never
//Вот пример функции, которая бесконечно выполняется
function infiniteLoop(): never {
    while (true) {

    }
  }
// выбрасывает исключение:
function throwError(): never {
    throw new Error("This function always throws an error.");
  }
  