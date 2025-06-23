import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Navbar from './components/common/NavBar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import GlobalStyles from './styles/GlobalStyles';
import Projects from './components/common/Projects';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;