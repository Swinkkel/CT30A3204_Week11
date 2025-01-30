import './App.css'
import './components/Header'
import Header from './components/Header'
import FrontPage from './components/FrontPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {useJokes} from './hooks/useJokes'

function App() {
  const jokesHook = useJokes();
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<FrontPage saveJoke={jokesHook.saveJoke} />} />
          <Route path='/saved' element={<FrontPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
