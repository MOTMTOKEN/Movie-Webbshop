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
import Next from './images/next.png';
import Back from './images/back.png';
import FirstPage from './images/first-page.png';

import {setWithExpiry, getWithExpiry, ALL_MOVIES_STORAGE_KEY} from './util/storage'

export default function App() {
  const [movies, setMovies] = useState([])
  const [debug, setDebug] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  let loadingPage=false;
  
  const API_URL =  "https://api.themoviedb.org/3"
  const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3?api_key=a7cddb88437f9455b593798fbb4a34fa',
  })
  const apiLocal = axios.create({
    baseURL: 'static/asset'
  })
  //console.log(currentPage)

  async function fetchMovies(page="1") {
    
    try {
      /*
      if(debug){
        const res = await apiLocal.get('movies.json').then(res => res)
        setMovies(res.data)
        console.log('lokalstorage');
        
      }else{
        */
        const data = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page=${page}`);
        const response = await data.json();
        //setMovies(movies.concat(response.results));
        setMovies(response.results);
    }catch(err){
      console.log('Failed getting data: '+ err)
    } 
  }

  useEffect(() => {
    /*
    
    const storedMovies = getWithExpiry(ALL_MOVIES_STORAGE_KEY)
    if (storedMovies){ 
      console.log("Have data in localstorage, using it!")
      setMovies(storedMovies)
    } else {
      */
      
      console.log("No data, go fetch it")
      fetchMovies()
    
    
  }, [])


  useEffect(() => {
    setWithExpiry(ALL_MOVIES_STORAGE_KEY, movies, 30000) //TTL 30 sec
  }, [movies])
  

  return (
    <div>
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
    <div className="navBtn">
          <img className='firstPage' onClick={()=> {setCurrentPage(1)
           let page = 1 ;
           setCurrentPage(page);
         console.log(currentPage);
         fetchMovies(page.toString());
          }} src={FirstPage} alt=''></img>

          <img className='back' onClick={()=> {setCurrentPage(currentPage-1)
        let page = currentPage -1 ;
        setCurrentPage(page);
      console.log(currentPage);
      fetchMovies(page.toString());}} src={Back} alt=''></img>

          <img className='next' onClick={()=> {
            let page = currentPage +1 ;
            setCurrentPage(page);
          console.log(currentPage);
          fetchMovies(page.toString());
          }} src={Next} alt=''></img>
    

         </div>

    </div>
    
  );
}

gi