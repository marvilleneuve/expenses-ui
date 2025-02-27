
import { ToastContainer, toast } from 'react-toastify';




interface NewExpense {
    amount: number;
    category: number;
    date: string;
    description: string;
    name: string;
    user_id: number;
}


async function submitForm(event) {
console.log(event)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            name: event.name,
            description: event.description,
            categoryId: event.categoryId,
            amount: event.cost,
            userId: 1,
            date: event.date
    
        })
    };

    const response = await fetch('http://localhost:8080/expenses-tracker/expenses/add', requestOptions);
    const data = await response.json()
    console.log(data)

}

export default submitForm