import Header from "./components/Header"

import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Chat from "./Pages/Chat"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"

function App() {

  return (
  <main>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
    </Routes>
    
    </main>
  )
}

export default App
