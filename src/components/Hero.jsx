import React, { useState } from 'react';

function ExpenseForm() {
  const [expenseDesc, setExpenseDesc] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");

  return (
    <div className="min-h-screen bg-lightgray flex flex-col">
      <div className="bg-white p-4">
        <h1 className="text-3xl font-bold pl-5 text-black">Expense Tracker App</h1>
      </div>
      <div className="flex-grow flex pl-5">
        <div className="p-4 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
          <h2 className="text-lg font-semibold mb-4 text-black">Record a New Expense</h2>
          <div className="mb-4">
            <label htmlFor="expenseDesc" className="block font-semibold text-black">Expense Description:</label>
            <input
              type="text"
              id="expenseDesc"
              value={expenseDesc}
              onChange={(e) => setExpenseDesc(e.target.value)}
              className="border rounded w-3/4 p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="expenseAmount" className="block font-semibold text-black">Expense Amount:</label>
            <input
              type="number"
              id="expenseAmount"
              value={expenseAmount}
              onChange={(e) => setExpenseAmount(e.target.value)}
              className="border rounded w-3/4 p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="expenseDate" className="block font-semibold text-black">Expense Date:</label>
            <input
              type="date"
              id="expenseDate"
              value={expenseDate}
              onChange={(e) => setExpenseDate(e.target.value)}
              className="border rounded w-3/4 p-2"
            />
          </div>
          <button className="bg-indigo-500 p-3 rounded text-white w-1/2 hover:bg-blue-600">
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExpenseForm;
