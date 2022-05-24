import React from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { actions } from '../reducers/cartReducer';

const MovieCard = ({movie, add=false, remove=false}) => {
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(actions.addToCart(movie));
    }
    const handleRemove = () => {
        dispatch(actions.removeFromCart(movie));
    }
  
    const image_path = "https://image.tmdb.org/t/p/w500"
    const backUrl = '/'

    const newTo = { 
        pathname: `/movie/${movie.id}`,
        backUrl: backUrl
      };
    return (
        <div className="Cardmovie">
        <Link to={newTo} className='linkStyle'>
        <div className="moviediv">
            {movie.poster_path ? <img className='movieimg' src={`${image_path}${movie.poster_path}`} alt="" width="100%" height="auto"/> 
             : null}
            <h4 className="movietitletext" >{movie.title}</h4>
        </div>
        </Link>
            <div className="center">
                 <button className="addButton" hidden={!add} onClick={ handleAdd }>buy</button>
                 <button className="removeButton" hidden={!remove} onClick={ handleRemove }>Remove</button>

            </div>
            
        </div>
    );
}
export default MovieCard
