import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(5);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    alert("Hello! Member!");
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handlePress = () => {
    alert("I was clicked");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      "Converting " + amount + " to " + currency
    );
  };

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={increment}>Increment</button>
      <br />

      <button onClick={decrement}>Decrement</button>
      <br />

      <button onClick={sayHello}>Say Hello</button>
      <br />

      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>
      <br />

      <button onClick={handlePress}>Click on me</button>

      <h1 style={{ color: "green" }}>Currency Convertor!!!</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount: </label>
          <input
            type="text"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>

        <div>
          <label>Currency: </label>
          <input
            type="text"
            value={currency}
            onChange={(event) => setCurrency(event.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
