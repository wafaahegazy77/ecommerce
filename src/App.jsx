//plugins
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// components

import Home from './pages/Home/Home'
import { Route, Routes, useParams } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Navbar from './components/navbar/Navbar'

function App() {
    return (
        <>
            <ScrollToTop />

            <Navbar />

            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/products/:id' element={<ProductDetails/>} />
            </Routes>

            

            
        </>
    )
}

export default App
