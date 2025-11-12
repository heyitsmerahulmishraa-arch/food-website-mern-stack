import {Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import Topbar from "./components/Topbar"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <Topbar/>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
