import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = props => {
    const filteredExpenses = props?.expenseItems?.filter(exp => exp.date.getFullYear() === +props.filteredYear)
    return (
        <Card className='expenses'>
            {filteredExpenses?.map(expense =>
                <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} filteredYear={props.filteredYear} />
            )}
        </Card>
    )
}

export default Expenses;