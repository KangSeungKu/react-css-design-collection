import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import CardsPage from './pages/CardsPage'
import NavPage from './pages/NavPage'

function App() {

  return (
    <>
      <Router basename='react-css-design-collection'>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/navs" element={<NavPage />} />
          <Route path="/cards" element={<CardsPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
