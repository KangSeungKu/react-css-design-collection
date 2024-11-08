import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import CardsPage from './pages/CardsPage'
import NavPage from './pages/NavPage'
import ButtonsPage from './pages/ButtonsPage'
import BannersPage from './pages/BannersPage'

function App() {

  return (
    <>
      <Router basename='react-css-design-collection'>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/navs" element={<NavPage />} />
          <Route path="/banners" element={<BannersPage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/buttons" element={<ButtonsPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
