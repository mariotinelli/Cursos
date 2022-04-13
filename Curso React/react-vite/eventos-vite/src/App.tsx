import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import  Events  from './components/pages/Events/Events'
import  Contact  from './components/pages/Contact/Contact'
import  Company  from './components/pages/Company/Company'
import Navbar from './components/layout/Navbar/Navbar'
import Footer from './components/layout/Footer/Footer'

function App() {


  return (
    <Router>
      <Navbar/>

        <Routes>

          <Route path='/' element={<Events/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/company' element={<Company/>}/>

        </Routes>

      <Footer/>
    </Router>
  )
}

export default App
