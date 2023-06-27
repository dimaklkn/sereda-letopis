import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
//import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
