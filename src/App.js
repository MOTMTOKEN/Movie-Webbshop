import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Error from './pages/Error';
import Action from './components/Action';
import './App.css';
import Comedy from './components/Comedy';





const linkStyle = {
  textDecoration: 'none', 
  padding: '10px', 
  fontWeight:'bold',
  color: 'black'
};

export default function App() {
  return (
    <Router>
      <nav style={{ marginBottom: '20px'}}>
        <Link to="/" style={linkStyle}>Home</Link >
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      <Action/>

      <Comedy/>
      
    </Router>
  );
}
