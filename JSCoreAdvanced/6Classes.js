class People {
    constructor(имя, возраст, страна) {
        this.имя = имя;
        this.возраст = возраст;
        this.страна = страна;
    }
    check() {
        console.log(`Имя: ${this.имя}, Возраст: ${this.возраст}, Страна: ${this.страна}`);
    }
}
const people1 = new People("Чикатило", 30, "Россия");
const people2 = new People("Мария", 25, "Россия");
people1.check();
people2.check();