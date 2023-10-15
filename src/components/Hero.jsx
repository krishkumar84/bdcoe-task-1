import React, { useState } from 'react';

function Hero() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const addExpense = () => {
    const newExpense = {
      id: expenses.length ,
      description,
      amount: parseFloat(amount),
      date,
    };
    setExpenses([...expenses, newExpense]);

  };

  const calculateTotal = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };
  

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className=" p-4">
        <h1 className="text-2xl font-bold text-center  text-black">Expense Tracker</h1>
      </div>
      <div className="flex-grow flex justify-center items-center">
        <div className="p-4 sm:w-3/5 md:w-3/5 lg:w-1/2 xl:w-2/5">
          <h2 className="text-xl font-semibold mb-4 text-blue-500">Add Expense</h2>
          <div className="mb-4">
            <label htmlFor="description" className="block font-semibold text-black">Description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block font-semibold text-black">Amount:</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border rounded w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block font-semibold text-black">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border rounded w-full p-2"
            />
          </div>
          <button onClick={addExpense} className="bg-blue-500 p-2 rounded text-white w-full hover-bg-blue-600">
            Add Expense
          </button>
        </div>
          </div>
         
            <div className=' flex flex-col-reverse sm:flex-row xl:flex items-center justify-center'>
      <div className="p-4 text-center ">
        <h2 className="text-xl font-semibold mb-4 text-blue-500">Expense List</h2>
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id} className="border p-2 rounded mb-2 text-black">
              <strong>{expense.description}</strong>  ${expense.amount} on {expense.date}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold text-blue-500">Total Expenses:</h2>
        <p className="text-black text-xl">${calculateTotal()}</p>
      </div>
      </div>
      </div>
  );
}

export default Hero;
