import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/navbar/Navbar'
import SignUp from './components/signup/Sigup'


const App = () => {

  return (
    <BrowserRouter>
      <SignUp/>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
