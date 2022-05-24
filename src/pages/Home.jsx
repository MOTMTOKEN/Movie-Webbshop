import React from "react";
import MovieCard from "../components/MovieCard";
import Next from '../images/next.png';
import Back from '../images/back.png';
import FirstPage from '../images/first-page.png';



export default function Home({movies}) {

  const rendermovies = () => (
    movies.map(movie => (
      <MovieCard
      add={true}
      key={movie.id}
      movie={movie}
      />
    ))
  )

  return (
    
      <div className="background">
      <div className="container">
        {rendermovies()}
      </div>
      <div className="navPage">
      <img src="" alt="" />
      

      </div>
     </div>
     
     

   
    
  )
}
