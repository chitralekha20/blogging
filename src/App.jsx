import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Profile from './pages/Profile'
import Items from './pages/Items'

function App() {
  

  return (
    <BrowserRouter>
    {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Profile/>}/>
        <Route path='/profile' element={<Items/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
