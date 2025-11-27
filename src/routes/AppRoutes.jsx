import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import SectionPage from "../pages/SectionPage"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/section' element={<SectionPage />} /> 
            </Routes>
        </BrowserRouter>
    )
}