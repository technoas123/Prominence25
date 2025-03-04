import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import Home from "./pages/Home";
import EventsPage from "./pages/EventsPage";
import EventDetails from "./pages/EventDetails";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUS";
import AboutUs from "./pages/AboutUS";

function App(){
  return (
    <Router>
      <ParticlesBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/contact" element={<ContactUs />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;