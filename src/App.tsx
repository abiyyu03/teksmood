import { Route, Routes } from 'react-router'
import './index.css'
import Home from './pages/Home'
import FormPage from './pages/FormPage'
import EmotionPage from './pages/EmotionPage'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fill" element={<FormPage />} />
            <Route path="/emotion" element={<EmotionPage />} />
        </Routes>
    )
}

export default App
