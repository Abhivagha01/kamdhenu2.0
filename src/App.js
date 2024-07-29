import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Global/Header";
import Footer from "./Global/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Event from "./Pages/Event";
import Gallery from "./Pages/Gallery";
import OneDayPicnic from "./Pages/OneDayPicnic";
import VillOnRent from "./Pages/VillOnRent";
import WeddingFunction from "./Pages/WeddingFunction";
import About from "./Pages/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event" element={<Event />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/oneDayPicnic" element={<OneDayPicnic />} />
        <Route path="/VillOnRent" element={<VillOnRent />} />
        <Route path="/weddingFunction" element={<WeddingFunction />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
