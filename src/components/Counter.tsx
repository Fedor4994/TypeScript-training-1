import { useState } from "react";

const Counter = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const addNumber = () => {
    const number = Number(prompt("Че добавить?"));
    if (!isNaN(number)) {
      setNumbers((prevNumbers) => [...prevNumbers, number]);
    } else {
      alert("its not a number");
    }
  };

  const removeNumber = () => {
    const number = Number(prompt("Че исключить?"));

    setNumbers((prevNumbers) => prevNumbers.filter((num) => num !== number));
  };
  return (
    <div>
      <button onClick={addNumber}>Add element</button>
      {numbers.length === 0 ? (
        <span>Come on add element</span>
      ) : (
        <span>{numbers.join(", ")}</span>
      )}

      <button onClick={removeNumber}>Remove elements</button>
    </div>
  );
};

export default Counter;
