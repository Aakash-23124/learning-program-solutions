import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  const conversionRates = {
    USD: 0.012,     // 1 INR = 0.012 USD
    EURO: 0.011,    // 1 INR = 0.011 Euro
    GBP: 0.0095,    // 1 INR = 0.0095 British Pound
    JPY: 1.7        // 1 INR = 1.7 Japanese Yen
  };

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const sayWelcome = () => alert("Welcome!");
  const handleClick = () => alert("Button clicked!");

  const handleSubmit = (e) => {
    e.preventDefault();

    const currencyKey = currency.trim().toUpperCase();

    if (conversionRates[currencyKey]) {
      const rate = conversionRates[currencyKey];
      const converted = amount * rate;
      alert(`Converted Amount: ${converted.toFixed(2)} ${currencyKey}`);
    } else {
      alert("Unsupported currency. Try USD, EURO, GBP, or JPY.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div>{count}</div>
      <button onClick={increment}>Increment</button><br />
      <button onClick={decrement}>Decrement</button><br />
      <button onClick={sayWelcome}>Say welcome</button><br />
      <button onClick={handleClick}>Click on me</button>

      <h1 style={{ color: "green", fontWeight: "bold", marginTop: "40px" }}>
        Currency Convertor!!!
      </h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <strong>Amount (INR): </strong>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </label>
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>
            <strong>Currency: </strong>
            <input
              type="text"
              placeholder="e.g. USD, EURO, GBP"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit" style={{ marginTop: "15px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
