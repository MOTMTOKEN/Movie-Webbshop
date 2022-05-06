import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Error from './pages/Error';
import Action from './components/Action';
import './App.css';
import Comedy from './components/Comedy';
import MovieGenre from './components/MovieGenre';
import Animation from './components/Animation';
import Documentry from './components/Documentry';
import Drama from './components/Drama';
import Family from './components/Family';
import Crime from './components/Crime';
import Fantasy from './components/Fantasy';
import History from './components/History';
import Horror from './components/Horror';
import Music from './components/Music';
import Mystery from './components/Mystery';
import Si_fi from './components/Si_fi';
import Tv_movie from './components/Tv_movie';
import Thriller from './components/Thriller';
import War from './components/War';
import Western from './components/Western';

const linkStyle = {
  textDecoration: 'none', 
  padding: '10px', 
  fontWeight:'bold',
  color: 'black'
};
//123456

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
      <h1>Action </h1>
      <MovieGenre genreNumber="12"/>

      
     
     
      
      
      
    </Router>
  );
}
/*
<h1>Comedy </h1>
      <Comedy/>
      <h1>Adventure </h1>




     




      <h1>Animation </h1>
      <Animation/>
      <h1>Documentry </h1>
      <Documentry/>
      <h1>Drama </h1>
      <Drama/>
      <h1>Family </h1>
      <Family/>
      <h1>Crime </h1>
      <Crime/>
      <h1>Fantasy </h1>
      <Fantasy/>
      <h1>History </h1>
      <History/>
      <h1>Horror </h1>
      <Horror/>
      <h1>Music </h1>
      <Music/>
      <h1>Mystery </h1>
      <Mystery/>
      <h1>Siencs Fiction</h1>
      <Si_fi/>
      <h1>Tv Movie </h1>
      <Tv_movie/>
      <h1>Thriller </h1>
      <Thriller/>
      <h1>War </h1>
      <War/>
      

      <h1>Western </h1>
      <Western/>
      */
