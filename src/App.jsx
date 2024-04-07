import './App.css'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import FruitUpdatepage from './pages/FruitUpdatePage/FruitUpdatepage'
import Fruitpage from './pages/FruitPage/Fruitpage'
import Home from './pages/Home/Home'
import AddFruitPage from './pages/AddFruit/AddFruitPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>

      {/* Navbar and footer mandatory inside browserRouter */}
       <BrowserRouter>
         <Navbar/>

          <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/add'  element={<AddFruitPage/>}/>
            <Route path='/fruit/:id' element={<Fruitpage/>}/>
            <Route path='/update/:id' element={<FruitUpdatepage/>}/>

          </Routes>
          <Footer/>

       </BrowserRouter>

    </>
  )
}

export default App
