import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import Footer from "./components/footer";
import Service1 from "./components/pages/Service1";
import Service2 from "./components/pages/Service2";
import Service3 from "./components/pages/Service3";
import Service4 from "./components/pages/Service4";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";


function App() {
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='sign-up' exact Component={SignUp}/>
        <Route path='/About' exact Component = {About}/>
        <Route path='/Contact' exact Component = {Contact}/>
        <Route path = '/Service1' exact Component={Service1}/>
        <Route path = '/Service2' exact Component={Service2}/>
        <Route path = '/Service3' exact Component={Service3}/>
        <Route path = '/Service4' exact Component={Service4}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

