import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"

function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
