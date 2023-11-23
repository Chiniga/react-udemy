import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'

const ExpensesList = props => {
    if(props.expenseItems.length === 0) {
        return <h2 className='expenses-list__fallback'>No Expenses Found</h2>
    }

    return <ul className='expenses-list'>
        {props.expenseItems?.map(expense =>
            <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} filteredYear={props.filteredYear} />
        )}
    </ul>
}

export default ExpensesList;