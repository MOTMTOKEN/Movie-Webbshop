import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Search from './pages/Search';
import Nav from './pages/Nav';
import Checkout from './pages/Checkout';
import Mymovies from './pages/Mymovies';
import Detailview from './pages/Detailview';

import {setWithExpiry, getWithExpiry, ALL_MOVIES_STORAGE_KEY} from './util/storage'

export default function App() {
  const [movies, setMovies] = useState([])
  const [debug, setDebug] = useState(false)
  
  const API_URL =  "https://api.themoviedb.org/3"
  const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3?api_key=a7cddb88437f9455b593798fbb4a34fa',
  })
  const apiLocal = axios.create({
    baseURL: 'static/asset'
  })

  async function fetchMovies() {
    try {
      if(debug){
        const res = await apiLocal.get('movies.json').then(res => res)
        setMovies(res.data)
      }else{
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page=`)
        setMovies(response.data.results)
      }
    }catch(err){
      console.log('Failed getting data: '+ err)
    } 
  }

  useEffect(() => {
    const storedMovies = getWithExpiry(ALL_MOVIES_STORAGE_KEY)
    if (storedMovies){ 
      console.log("Have data in localstorage, using it!")
      setMovies(storedMovies)
    } else {
      console.log("No data, go fetch it")
      fetchMovies()
    }
  }, [])

  useEffect(() => {
    setWithExpiry(ALL_MOVIES_STORAGE_KEY, movies, 30000) //TTL 30 sec
  }, [movies])
 

  return (
    <Router>
      <div className='App'>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home movies={movies}/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/movies" element={<Mymovies/>} />
          <Route path="/movie/:id" element={<Detailview/>} />
        </Routes>
      </div>
    </Router>
  );
}
