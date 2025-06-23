import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Navbar from './components/common/NavBar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import GlobalStyles from './styles/GlobalStyles';
// import Home from './pages/Home';
// import Construction from './pages/Construction';
// import Booking from './pages/Booking';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme}/>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/construction" element={<Construction />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;