// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Import pages
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Resume from "./pages/Resume.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import Contact from "./pages/Contact.tsx";

// Import components
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container d-flex flex-column min-vh-100 w-100">
        <Navbar />
        <div className="flex-grow-1 w-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
