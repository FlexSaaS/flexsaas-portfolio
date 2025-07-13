import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Navbar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";
import Projects from "./components/common/Projects";
import { DatabaseProvider } from "./db/DatabaseContext";
import { FirebaseDB } from "./db/FirebaseDB";
import WhatsAppButton from "./components/common/WhatsAppButton";
import ScrollToTopButton from "./components/common/ScrollToTop";

const db = new FirebaseDB();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DatabaseProvider value={db}>
        <Router>
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>
          <Footer />
        </Router>
        <WhatsAppButton />
        <ScrollToTopButton />
      </DatabaseProvider>
    </ThemeProvider>
  );
}

export default App;
