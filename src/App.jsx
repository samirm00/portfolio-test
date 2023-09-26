import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';

import Header from './components/Header';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="work" element={<Work />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default App;
