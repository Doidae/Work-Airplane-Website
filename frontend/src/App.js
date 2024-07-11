// import logo from './logo.svg';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import NavBar from './components/Navbar'
import ContactUs from './pages/ContactUs';
import About from './pages/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/about' element={<About/>}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
