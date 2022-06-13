import React from 'react'
import './CSS/App.css';
import Navbar from './Components/Navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './Views/Home';
import Cart from './Views/Cart';
import About from './Views/About';
import Signup from './Views/signup';
import Heroimg from './Components/HeroImg';

function App() {
  return (
    <React.Fragment>
    <Navbar/>
    <Heroimg/>
    <Routes>
      <Route children path = "/" element ={<Home/>}></Route>
      <Route children path = "/cart" element ={<Cart/>}></Route>
      <Route children path = "/about" element ={<About/>}></Route>
      <Route children path = "/signup" element ={<Signup/>}></Route>
    </Routes>
    </React.Fragment>
  );
}

export default App;
