import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import Events from './components/pages/Events'
import CreateEvents from './components/pages/CreateEvents'
import MyEvents from './components/pages/MyEvents'
import Contact from './components/pages/Contact'
import Event from './components/pages/Event'

//Layouts
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';

function App() {
  return (
    
    <Router>

        <Navbar/>

        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Events/>}/>
            <Route path="/create_events" element={<CreateEvents/>}/>
            <Route path="/myevents" element={<MyEvents/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/event/:id" element={<Event/>}/>
          </Routes>
        </Container>

        <Footer/>

    </Router>

  );
}

export default App;
