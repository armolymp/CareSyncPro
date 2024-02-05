import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Screens/Layout";
import Home from "./Screens/Home";
import Doctors from "./Screens/Doctors";
import Patients from "./Screens/Patients";
import About from "./Screens/About";



function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route path="/Home" element={<Home />} />
                  <Route path="Doctors" element={<Doctors />} />
                  <Route path="Patients" element={<Patients />} />
                  <Route path="About" element={<About />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
