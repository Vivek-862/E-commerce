import Navbar from './components/Navbar'
import Product from './Pages/Product';
import Cart from './Pages/Cart'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import LoginSignup from './Pages/LoginSignup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/men' element={<ShopCategory category="men"/>}/>
      <Route path='/women' element={<ShopCategory category="women"/>}/>
      <Route path='/kids' element={<ShopCategory category="kids"/>}/>
      <Route path="product" element={<Product/>}>
      <Route path=':productId' element={<Product/>} />

      </Route>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/Login' element={<LoginSignup/>} />

    </Routes>




    </BrowserRouter>
     
     
    </>
  )
}

export default App
