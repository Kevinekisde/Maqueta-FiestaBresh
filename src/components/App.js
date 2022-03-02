import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer.js";
import Fechas from './sections/Fechas.js'
import Events from "./sections/Events.js"
import Images from "./sections/Images.js"
import About from "./sections/About.js"
import Home from "./sections/Home.js"
import s from './styles/App.module.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {

    return (
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
            <Route path='/fechas' element= {<Fechas/>} />
            <Route path="/events" element= {<Events/>}/>
            <Route path="/imagenes/:id" element= {<Images/>}/>
        </Routes>
        </BrowserRouter>
        <Footer/>
        </>
    )
}

export default App;
