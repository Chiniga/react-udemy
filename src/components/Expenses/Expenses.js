import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = props => {
    const filteredExpenses = props?.expenseItems?.filter(exp => exp.date.getFullYear() === +props.filteredYear)
    let expContent = <p>No Expenses Found</p>

    if(filteredExpenses.length > 0) {
        expContent = filteredExpenses.map(expense =>
            <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} filteredYear={props.filteredYear} />
        )
    }
    return (
        <Card className='expenses'>
            {expContent}
        </Card>
    )
}

export default Expenses;