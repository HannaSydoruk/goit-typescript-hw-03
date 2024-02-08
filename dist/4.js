class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(door, key) {
        this.door = door;
        this.key = key;
    }
    comeIn(person) {
        if (this.door) {
            this.tenants.push(person);
        }
    }
}
class MyHouse extends House {
    constructor(key) {
        super(false, key);
    }
    openDoor(key) {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
        }
    }
}
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);
export {};
//# sourceMappingURL=4.js.map