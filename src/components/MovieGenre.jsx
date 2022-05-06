import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {movieGenreActions, GENRESTATUS} from '../features/movieGenre';

const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
const imageBaseUrlOriginal = 'https://image.tmdb.org/t/p/original';
const MovieGenre = ({genreNumber}) => {
    const status = useSelector(state => state.movieGenre.status);
    const data = useSelector(state => state.movieGenre.data);
    const baseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page='
    const [currentGenre, setCurrentGenre] = useState(genreNumber);
    const [currentPage, setCurrentPage] = useState("1");
    const Url = baseUrl + currentPage +'&with_genres='+ currentGenre;
    const dispatch = useDispatch();
    let content = null ;
    if (status === GENRESTATUS.NORMAL){
        content = 'Redo för lite Fakta?';
    } else if (status === GENRESTATUS.FETCHING){
        content = 'Is fetching';
    } else if (status === GENRESTATUS.SUCCESS){
        console.log('Got data comedy',data);
        
        content = data.results.map(home =>
             <div key={home.id}>
                 <h4>{home.title}</h4>
                <a href={imageBaseUrlOriginal+home.backdrop_path}>
                    <img src={imageBaseUrl+home.backdrop_path} alt="" />

                </a>
                 
             </div>
            )
     
    } else {
        content = 'could not get data';
    }
    useEffect(()=>{
         
        fetchData(dispatch,Url,genreNumber);
    },[])

return(
    <div>
        <div className="container">
        {content}
        </div>
    </div>
)}
async function fetchData(dispatch,url,genreNumber) {

    dispatch(movieGenreActions.isFetching());
    console.log('url är comedy ',url);
    try {
        let response = await fetch(url);
        let json = await response.json();
        let actionen= json; 
        dispatch(movieGenreActions.success({genre : genreNumber, data: actionen}));
    }catch {

        dispatch(movieGenreActions.failure());
    }
}
export default MovieGenre; 