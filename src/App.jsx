
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './components/Headers';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import CartDetails from './components/CartDetails';
function App() {
  

  return (
   <>
  <Headers></Headers>
 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart-details' element={<CartDetails/>}/>
    </Routes>
 
  
   </>
  )
}

export default App
