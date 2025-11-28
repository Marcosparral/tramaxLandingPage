import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import SectionPage from "../pages/SectionPage"
import Navbar from "../components/layout/navbar"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/services' element={<SectionPage />} /> 
            </Routes>
        </BrowserRouter>
    )
}