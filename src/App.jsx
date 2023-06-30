import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/navbar/Navbar'
import Provider from './components/global/Provider'

const App = () => {

  return (
    <BrowserRouter>
      <Provider  />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
