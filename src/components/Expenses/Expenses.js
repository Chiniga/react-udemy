import Card from '../UI/Card';
import ExpensesList from './ExpenseList';
import './Expenses.css'

const Expenses = props => {
    const filteredExpenses = props?.expenseItems?.filter(exp => exp.date.getFullYear() === +props.filteredYear)

    return (
        <Card className='expenses'>
            <ExpensesList expenseItems={filteredExpenses} />
        </Card>
    )
}

export default Expenses;