import Counter from "./components/Counter";

function App() {
  class Key {
    private signature: number = Math.random();
    getSignature() {
      return this.signature;
    }
  }
  class Person {
    constructor(private key: Key) {}
    getKey() {
      return this.key;
    }
  }
  abstract class House {
    protected door: "opened" | "closed" = "opened";
    protected tenats: Person[] = [];
    protected key: Key;
    constructor(key: Key) {
      this.key = key;
    }
    public abstract openDoor(key: Key): void;
    public comeIn(person: Person) {
      if (this.door === "opened") {
        this.tenats.push(person);
        console.log("welcome to the home");
      } else {
        console.log("door is closed, try to open first");
      }
    }
  }

  class MyHouse extends House {
    public openDoor(key: Key) {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = "opened";
      } else {
        this.door = "closed";
      }
    }
  }

  const key = new Key();
  const otmichka = new Key();

  const person = new Person(key);
  const terorist = new Person(otmichka);

  const myHouse = new MyHouse(key);

  myHouse.openDoor(person.getKey());
  myHouse.comeIn(person);
  myHouse.openDoor(terorist.getKey());
  myHouse.comeIn(terorist);

  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
