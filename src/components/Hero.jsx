import React, { useState } from 'react';


function Hero() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const addExpense = () => {
    const newExpense = {
      id: expenses.length,
      description,
      amount: parseFloat(amount),
      date,
    };
    setExpenses([...expenses, newExpense]);
  

    localStorage.setItem("expenses", JSON.stringify([...expenses, newExpense]));
  };
  


 
  const calculateTotal = () => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses"));
  
    if (storedExpenses && Array.isArray(storedExpenses)) {
      return storedExpenses.reduce((total, expense) => total + expense.amount, 0);
    } else {
      return 0;
    }
  };
  

  
  

  return (
    <div className="min-h-screen color color flex flex-col">
      <div className=" p-4">
        <h1 className=" text-6xl font-custom mt-7 font-bold text-center  color-text">Expense Tracker</h1>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-grow sm:w-full  flex justify-center items-center">
        <div className="p-4  sm:w-3/4 md:w-3/5 lg:w-1/2 xl:w-3/5">
          <h2 className="text-4xl font-custom font-semibold mb-4 color-text">Add Expense</h2>
          <div className="mb-4">
            <label htmlFor="description" className="block text-2xl font-custom font-semibold color-text">Description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border bg-gray-200 rounded w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-2xl font-custom font-semibold color-text">Amount:</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border bg-gray-200 rounded w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-2xl font-custom font-semibold color-text">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border bg-gray-200 rounded w-full p-2"
            />
          </div>
          <button onClick={addExpense} className="btn-color p-2 font-custom rounded text-black w-full hover-bg-blue-600">
            Add Expense
          </button>
        </div>
          </div>

          <div className="heading sm:w-full lg:pr-12 text-center pt-12  pr-0  ">
            <h1 className=' font-custom heading-big-3'>Optimized way</h1>
            <h1 className=' font-custom heading-big-3'>To manage <span className='expenses'> EXPENSES</span></h1>
            <div className=" m-8 ml-15 mt-24 flex flex-col gap-8  text-center">
        <h2 className="text-xl font-custom heading-big2 font-semibold color-text">Total Expenses:</h2>
        <p className="color-text lg:pl-0 pl-1  heading-big-3 text-xl">{calculateTotal()}Rs/-</p>
      </div>
          </div>
          </div>
         
            {/* <div className=' flex flex-col-reverse sm:flex-row xl:flex items-center justify-center'> */}
      <div className="p-4  mt-4 text-center ">
        <h2 className="text-5xl font-semibold mb-4 color-text">Expense List</h2>
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id} className=" p-2 font-custom text-xl text rounded mb-2 list-color">
              <strong>{expense.description}</strong> Spend {expense.amount}Rs on {expense.date}
            </li>
          ))}
        </ul>
      </div>
      
      </div>
     
  );
}

export default Hero;
