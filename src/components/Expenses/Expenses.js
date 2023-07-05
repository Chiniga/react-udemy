import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = props => {
    return (
        <Card className='expenses'>
            {props?.expenseItems?.map(expense =>
                <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} filteredYear={props.filteredYear} />
            )}
        </Card>
    )
}

export default Expenses;