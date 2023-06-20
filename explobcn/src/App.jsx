import './App.css'
import WelcomePage from './Pages/WelcomePage'
import Login from './Pages/Login'
import { Route, Routes } from 'react-router-dom';
function App() {

  return (
    <div>
       <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/homepage" element={<Homepage/>} />
        <Route path ="*" element={<Errorpage/>} />
       </Routes>
    </div>
  )
}

export default App
