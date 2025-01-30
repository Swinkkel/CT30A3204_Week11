import './App.css'
import './components/Header'
import Header from './components/Header'
import FrontPage from './components/FrontPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<FrontPage />} />
          <Route path='/saved' element={<FrontPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
