
import Homepage from "./Pages/Homepage/Homepage"
import Errorpage from "./Pages/Errorpage/Errorpage"
import { Routes,Route } from "react-router-dom"
import Login from './pages/login/Login.jsx'
 import SignUp from './pages/signup/SignUp'

import './App.css'
// import Homepage from './Pages/WelcomePage'
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path ="*" element={<Errorpage/>} />
    </Routes>

      {/* <Homepage /> */}

      {/* <Login/> */}
      {/* <SignUp/> */}

    </>
  )
}

export default App
