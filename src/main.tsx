import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ExpenseForm from './components/addExpense/ExpenseForm'
import SideMenu from './components/SideMenu'
import MyHeader from './components/commons/header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyHeader />
    <SideMenu />
    <ExpenseForm />
  </StrictMode>,
)
