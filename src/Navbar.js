import React from 'react';
import { Link } from 'react-router-dom';
import reactl from './kk.jpg';
import "./App.css";
const Navbar = () => {
  return (
    <div class ="nav">
      <img src={reactl}alt="logo"/>
      <div class = "navbar">
      <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to ="/Hireme">Hireme</Link>
        </div>
    </div>
  )
}
export default Navbar;