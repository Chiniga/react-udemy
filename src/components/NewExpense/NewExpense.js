import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false)
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    
    setShowForm(false)
    props.onAddExpense(expenseData)
  };

  const showFormHandler = () => {
    setShowForm(true)
  }

  const hideFormHandler = () => {
    setShowForm(false)
  }

  return (
    <div className="new-expense">
      { !showForm && <button onClick={showFormHandler}>Add New Expense</button> }
      { showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onHideForm={hideFormHandler} /> }
    </div>
  );
};

export default NewExpense;
