import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './Components/SignupPage';
import Navbar from './Components/NavBar';
import Login from './Components/Login';
import Home from './Components/Home';
import TamilNaduDishes from './Components/TamilNadu/Cakes';
import KeralaDishes from './Components/Kerela/KeralaDishes';
import AndhraPradeshDishes from './Components/AndhraPradesh/AndhraPradeshDishes'; 
import KarnatakaDishes from './Components/Karnataka/KarnatakaDishes';
import RajasthanDishes from './Components/Rajasthan/RajasthanDishes';
import GujaratDishes from './Components/Gujarat/GujaratDishes';
import DefaultHome from './Components/DefaultHome';
import About from './Components/About';
import Contact from './Components/Contact';
import Favourites from './Components/Favourites';
import RecipePage from './Components/RecipePage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<DefaultHome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/tamilnadu-dishes" element={<TamilNaduDishes />} />
        <Route path="/kerala-dishes" element={<KeralaDishes />} />
        <Route path="/andhrapradesh-dishes" element={<AndhraPradeshDishes />} /> 
        <Route path="/karnataka-dishes" element={<KarnatakaDishes />} /> 
        <Route path="/rajasthan-dishes" element={<RajasthanDishes />} />
        <Route path="/gujarat-dishes" element={<GujaratDishes />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/Favourites" element={<Favourites />} /> 
        <Route path="/RecipePage" element={<RecipePage />} /> 
        
        </Routes>
    </Router>
  );
};

export default App;
