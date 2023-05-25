import React, { useState } from "react";
import "./taxcalulator.css"; // Import the CSS file for styling

const Home = () => {
  const [income, setIncome] = useState(0);
  const [tax, setTax] = useState(0);

  const taxBrackets = [
    { maxIncome: 600000, rate: 0 },
    { maxIncome: 1200000, rate: 0.985 },
    { maxIncome: 2400000, rate: 0.885 },
    { maxIncome: 3600000, rate: 0.8 },
    { maxIncome: 6000000, rate: 0.75 },
    { maxIncome: 12000000, rate: 0.685 },
    { maxIncome: Infinity, rate: 0.65 }
  ];

  const calculateTax = (income) => {
    const { rate } = taxBrackets.find((bracket) => income <= bracket.maxIncome);
    const calculatedTax = income * rate;
    setTax(calculatedTax);
  };

  const handleIncomeChange = (event) => {
    const newIncome = event.target.value;
    setIncome(newIncome);
    calculateTax(newIncome);
  };

  return (
    <div className="tax-calculator">
      <h1 className="title">Tax Calculator</h1>
      <div className="input-group">
        <label htmlFor="income" className="label">
          Income:
        </label>
        <input
          type="number"
          id="income"
          value={income}
          onChange={handleIncomeChange}
          className="input"
        />
      </div>
      <div className="input-group">
        <label htmlFor="tax" className="label">
          Tax:
        </label>
        <input type="text" id="tax" value={tax} disabled className="input" />
      </div>
    </div>
  );
};

export default Home;
