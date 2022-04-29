import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {tv_movieActions, TV_MOVIESTATUS} from '../features/tv_movie';




const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
const imageBaseUrlOriginal = 'https://image.tmdb.org/t/p/original';



const Tv_movie = () => {
    const status = useSelector(state => state.tv_movie.status);
    const data = useSelector(state => state.tv_movie.data);
    const baseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page='

    const [currentGenre, setCurrentGenre] = useState("10770");
    const [currentPage, setCurrentPage] = useState("1");
    const Url = baseUrl + currentPage +'&with_genres='+ currentGenre;
    
    
    

    const tv_moviedispatch = useDispatch();
    let content = null ;
    if (status === TV_MOVIESTATUS.NORMAL){
        content = 'Redo för lite Fakta?';
    } else if (status === TV_MOVIESTATUS.FETCHING){
        content = 'Is fetching';
    } else if (status === TV_MOVIESTATUS.SUCCESS){
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
         
        fetchData(tv_moviedispatch,Url);
    },[])
    
return(
    <div>
        <p>
            
        </p>
        <div className="container">
        {content}

        </div>
        
      
    </div>
)
}

async function fetchData(tv_moviedispatch,url) {

    tv_moviedispatch(tv_movieActions.isFetching());
    console.log('url är comedy ',url);

 
    try {
        let response = await fetch(url);
        let json = await response.json();
        //console.log('Got data',Url, json);
        let actionen= json; 

        tv_moviedispatch(tv_movieActions.success(actionen));

    }catch {

        tv_moviedispatch(tv_movieActions.failure());

    }
    

}
export default Tv_movie; 