import { useState } from "react";
import Card from '../UI/Card';
import ExpensesList from './ExpenseList';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import './Expenses.css'


const Expenses = props => {
    const [year, setFilteredYear] = useState('')
    const filteredExpenses = props?.expenseItems?.filter(exp => exp.date.getFullYear() === +year)

    const filterChangeHandler = filterValue => {
      setFilteredYear(filterValue)
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter onFilterChange={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenseItems={filteredExpenses} />
        </Card>
    )
}

export default Expenses;