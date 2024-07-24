import './index.css'
import Navbar from "./components/Navbar/Navbar"
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'


function App() {
  
  return (
    <>       
       
  <div className='app'>
  <Navbar/>
<Routes>
<Route path='/' element={<Home/>}/>

</Routes>
  </div>
    </>
  )
}

export default App
