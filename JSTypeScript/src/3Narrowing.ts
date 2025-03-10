interface Car {
    brand: string;
    model: string;
    year: number;
  }
  
  function getCar(car: Car | { brand: string }): string {
    // Сужение типа
    if ('model' in car && 'year' in car) {
      // Если объект имеет поля model и year, значит это Car
      return `Car: ${car.brand} ${car.model}, Year: ${car.year}`;
    } else {
      // В противном случае это объект с полем brand
      return `Car brand: ${car.brand}`;
    }
  }
  
  // Примеры использования
  
  const myCar: Car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
  };
  
  const anotherCar = {
    brand: "Honda",
  };
  
  console.log(getCar(myCar));       // Вывод: Car: Toyota Corolla, Year: 2020
  console.log(getCar(anotherCar));  // Вывод: Car brand: Honda