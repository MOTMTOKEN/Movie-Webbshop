import React from 'react';
import '../App.css';
import {useSelector, useDispatch } from "react-redux";
import MovieCard from "../components/MovieCard";
import {stripPrecision} from '../util/math'
import { actions } from '../reducers/cartReducer';

export default function Checkout() {
    const count = useSelector( state => state.cart.count);
    const movies = useSelector( state => state.cart.movies);

    const dispatch = useDispatch();

    const handlePay = () => {
        dispatch(actions.pay());
    }

    const rendermovies = () => (
        movies.map( element =>
            <MovieCard
                remove={true}
                key={element.id}
                movie={element}/>
                    
      ))

    return (
        <div className='aligncenter'>
            <h1 >
                Total: ({count} x 19.90) {stripPrecision(count*19.90, 2)} SEK
            </h1>
            <div className='checkContent'>
                    {rendermovies()}

            </div>
            
            <button className='payButton' hidden={count === 0} onClick={ handlePay }>Pay</button>
        </div>
    );
}
