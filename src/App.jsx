//plugins
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// components
import MainNav from "./components/navbar/MainNav"
import TopNav from "./components/navbar/TopNav"
import Home from './pages/Home/Home'
import { Route, Routes, useParams } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
    return (
        <>
            <ScrollToTop />

            <div className="navs_container">
                <TopNav/>
                <MainNav/>
            </div> 

            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/products/:id' element={<ProductDetails/>} />
            </Routes>

            

            
        </>
    )
}

export default App
