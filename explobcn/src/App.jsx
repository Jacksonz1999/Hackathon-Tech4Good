
import Homepage from "./Pages/Homepage/Homepage"
import Errorpage from "./Pages/Errorpage/Errorpage"
import { Routes,Route } from "react-router-dom"
function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path ="*" element={<Errorpage/>} />
    </Routes>
    </>
  )
}

export default App
