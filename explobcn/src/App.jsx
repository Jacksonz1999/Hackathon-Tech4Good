import Homepage from "./Pages/Homepage/Homepage"
import Errorpage from "./Pages/Errorpage/Errorpage"
import { Routes,Route } from "react-router-dom"
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import './App.css'
import WelcomePage from './Pages/WelcomePage/WelcomePage'
function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path ="*" element={<Errorpage/>} />
        <Route path ="./signup" element={<SignUp />} />
       </Routes>
    </div>
  )
}

export default App
