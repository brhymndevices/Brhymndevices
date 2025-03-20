import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Products from "./pages/Products";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => (
    <Router>
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow flex justify-center items-center mt-[10%] mb-[10%]">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
            <Footer />
        </div>
    </Router>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;