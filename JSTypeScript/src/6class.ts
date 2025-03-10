class Person {
    private name: string;
    constructor(name: string) {
      this.name = name;
    }
    public getName(): string {
      return this.name;
    }
    public setName(newName: string): void {
      this.name = newName;
    }
  }
  const person = new Person("Alice");
  console.log(person.getName()); // Вывод: Alice
  
  person.setName("Bob");
  console.log(person.getName()); // Вывод: Bob
  
  // Примечание: доступ к полю name напрямую вызовет ошибку
  // console.log(person.name); // Ошибка: Property 'name' is private and only accessible within class 'Person'.