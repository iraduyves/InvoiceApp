import { Route, Router, Routes } from "react-router-dom"
import Siderbar from "./Components/SideBar/SideBar"
import Home from "./Home"
import "./App.css"
import Invoices from "./Invoices"

function App() {
  return (
   <main>
    <Siderbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/invoice" element={<Invoices/>} />
      <Route path="*" element={<div>NOt Found</div>} />
     
    </Routes>
    hhhhhhh
    
   </main>
  )
}

export default App