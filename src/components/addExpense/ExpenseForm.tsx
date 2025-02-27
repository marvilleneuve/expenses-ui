import { TextField, Button } from "@mui/material"
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AttachMoney, EditNote, Add, MoreVert } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';


import React, { useState } from "react";
import submitForm from "../../services/ExpenseFormService";


const initialValues = {
        name: "",
        description: "",
        categoryId: null,
        cost: null,
        userId: 1,
        date: DatePicker
}


function ExpenseForm() {

    const [values, setValues] = useState(initialValues)

    const handleInput = (event) => {
        const{ name, value } = event.target
        // console.log(name + " : " + value)
        setValues({
            ...values, [name]: value
        })
    }

      const handleSubmit = async (event) => {
        event.preventDefault();
        submitForm(values)
      }
      
    return (
        <>
            <form onSubmit={handleSubmit} className='pt-20 pb-20 pl-40 pr-40 ml-20 space-y-4 inline-block border-1 border-amber-100 rounded-2xl align-middle content-center'>
                <div class="block">
                    <div style={{ display: "inline-block" }}>

                        <h3>Name</h3>
                        <Add />
                        <TextField id="name" label="Expense name" variant="standard" value={values.name} onChange={handleInput} name="name" placeholder="Coffee" />
                    </div>
                    <div class="inline-block">
                        <h3>Description</h3>
                        <EditNote />
                        <TextField id="description" label="Expense description" variant="standard" onChange={handleInput} value={values.description} name="description" placeholder="Large coffee"/>
                    </div>
                </div>
                <div class="block">
                    <div style={{ display: "inline-block" }}>
                        <h3>Category</h3>
                        <MoreVert />
                        <TextField id="category" label="Expense category" variant="standard" onChange={handleInput} value={values.categoryId} name="categoryId" placeholder="1"/>
                    </div>
                    <div style={{ display: "inline-block" }}>
                        <AttachMoney />
                        <TextField id="cost" label="Expense cost" variant="standard" onChange={handleInput} value={values.cost} name="cost" placeholder="50"/>
                    </div>
                </div>
                <div class="block pt-5 pb-5">
                    <h3>Date</h3>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker name="date" onChange={values => handleInput({ target: {name: 'date', value: values} })}/>
                    </LocalizationProvider>
                </div>
                <div>
                    <Button variant="contained" color="success" type="submit">
                        Success
                    </Button>
                </div>
                <div>
                </div>
            </form>
        </>
    )
}



export default ExpenseForm