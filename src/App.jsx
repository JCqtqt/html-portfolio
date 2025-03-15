import { Route, Routes } from 'react-router-dom'
import './App.css'
import HeaderPage from './components/HeaderPage'
import AboutMe from './components/AboutMe'
import Layout from './Layout'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HeaderPage />} />
        <Route path="/aboutme" element={<AboutMe />}/>
      </Route>
    </Routes>
    
  )
}

export default App
