import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import OrderForm from './components/OrderForm'
import Success from './components/Success'

export default function App() {
  const [page, setPage] = useState("home")
  const [siparisOzeti, setSiparisOzeti] = useState(null)

  let gösterilecekSayfa

  if (page === "home") {
    gösterilecekSayfa = (
      <Home formGit={() => setPage("form")} />
    )
  }

  if (page === "form") {
    gösterilecekSayfa = (
      <OrderForm
        successGit={(ozet) => {
          setSiparisOzeti(ozet)
          setPage("success")
        }}
      />
    )
  }

  if (page === "success") {
    gösterilecekSayfa = <Success siparisOzeti={siparisOzeti} />
  }

  return (
    <div>
      {gösterilecekSayfa}
    </div>
  )
}