// import './App.css'
import { Routes, Route } from 'react-router-dom'
import Projects from './pages/projects/Projects'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Projects />} />
        </Routes>
    )
}

export default App
