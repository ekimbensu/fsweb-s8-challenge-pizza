import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import OrderForm from './components/OrderForm'
import Success from './components/Success'

export default function App() {
  const [page, setPage] = useState("home")

  return (
    <div>
      {page === "home" && <Home formGit={() => setPage("form")} />}
      {page === "form" && <OrderForm successGit={() => setPage("success")} />}
      {page === "success" && <Success />}
    </div>
  )
}
