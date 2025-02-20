import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/home/Home"
import Layout from "./layout/Layout"
import Teams from "./pages/teams/Teams"
import Calendar from "./pages/calendar/Calendar"
import AboutUs from "./pages/about-us/AboutUs"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
