import './style/App.css'
import Home from './pages/Home/Home'
import Todos from './pages/Todos/components/Todos'
import { Route, Routes } from 'react-router-dom'
import Navbar from './layouts/Navbar'

function App() {

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </>
  )
}

export default App