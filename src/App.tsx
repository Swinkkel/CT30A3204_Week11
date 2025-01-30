import './App.css'
import './components/Header'
import Header from './components/Header'
import FrontPage from './components/FrontPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {useJokes} from './hooks/useJokes'
import SavedPage from './components/SavedPage'

function App() {
  const jokesHook = useJokes();
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<FrontPage saveJoke={jokesHook.saveJoke} />} />
          <Route path='/saved' element={<SavedPage savedJokes={jokesHook.savedJokes} deleteJoke={jokesHook.deleteJoke} />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
