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
    <div className="min-h-screen color color flex flex-col">
      <div className=" p-4">
        <h1 className="text-2xl heading-big2 mt-7 font-bold text-center  color-text">Expense Tracker</h1>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-grow sm:w-full flex justify-center items-center">
        <div className="p-4 sm:w-3/4 md:w-3/5 lg:w-1/2 xl:w-3/5">
          <h2 className="text-4xl font-semibold mb-4 color-text">Add Expense</h2>
          <div className="mb-4">
            <label htmlFor="description" className="block text-2xl font-semibold color-text">Description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border bg-gray-200 rounded w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-2xl font-semibold color-text">Amount:</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border bg-gray-200 rounded w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-2xl font-semibold color-text">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border bg-gray-200 rounded w-full p-2"
            />
          </div>
          <button onClick={addExpense} className="btn-color p-2 rounded text-black w-full hover-bg-blue-600">
            Add Expense
          </button>
        </div>
          </div>

          <div className="heading sm:w-full lg:pr-12 text-center pt-12  pr-0  ">
            <h1 className='heading-big'>OPTIMIZE WAY </h1>
            <h1 className='heading-big'>TO MANAGE EXPENSES</h1>
            <div className=" m-8 ml-16 mt-16 flex  text-center">
        <h2 className="text-xl heading-big2 font-semibold color-text">Total Expenses:</h2>
        <p className="color-text lg:pl-4 pl-1 heading-big2 text-xl">{calculateTotal()}Rs</p>
      </div>
          </div>
          </div>
         
            {/* <div className=' flex flex-col-reverse sm:flex-row xl:flex items-center justify-center'> */}
      <div className="p-4 mt-14 text-center ">
        <h2 className="text-4xl font-semibold mb-4 color-text">Expense List</h2>
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id} className=" p-2 text-xl rounded mb-2 list-color">
              <strong>{expense.description}</strong> Spend {expense.amount} Rs on {expense.date}
            </li>
          ))}
        </ul>
      </div>
      
      </div>
     
  );
}

export default Hero;
