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

  // myHouse.openDoor(person.getKey());
  // myHouse.comeIn(person);
  // myHouse.openDoor(terorist.getKey());
  // myHouse.comeIn(terorist);

  function getPromise() {
    return new Promise<Array<string | number>>((resolve) => {
      resolve(["Text", 50]);
    });
  }

  getPromise().then((data) => {
    console.log(data);
  });

  type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
  };

  function compare(
    top: Pick<AllType, "name" | "color">,
    bottom: Pick<AllType, "position" | "weight">
  ): AllType {
    return {
      name: top.name,
      color: top.color,

      position: bottom.position,
      weight: bottom.weight,
    };
  }

  function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }

  interface Props {
    title: string;
  }
  class Component<T extends object> {
    constructor(public props: T) {}
  }

  class Page extends Component<Props> {
    pageInfo() {
      console.log(this.props.title);
    }
  }
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
