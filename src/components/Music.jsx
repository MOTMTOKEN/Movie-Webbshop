import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {musicActions, MUSICSTATUS} from '../features/music';




const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
const imageBaseUrlOriginal = 'https://image.tmdb.org/t/p/original';



const Music = () => {
    const status = useSelector(state => state.music.status);
    const data = useSelector(state => state.music.data);
    const baseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page='

    const [currentGenre, setCurrentGenre] = useState("10402");
    const [currentPage, setCurrentPage] = useState("1");
    const Url = baseUrl + currentPage +'&with_genres='+ currentGenre;
    
    
    

    const musicdispatch = useDispatch();
    let content = null ;
    if (status === MUSICSTATUS.NORMAL){
        content = 'Redo för lite Fakta?';
    } else if (status === MUSICSTATUS.FETCHING){
        content = 'Is fetching';
    } else if (status === MUSICSTATUS.SUCCESS){
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
         
        fetchData(musicdispatch,Url);
    },[])
    
return(
    <div>
      
        <div className="container">
        {content}

        </div>
        
      
    </div>
)
}

async function fetchData(musicdispatch,url) {

    musicdispatch(musicActions.isFetching());
    console.log('url är comedy ',url);

 
    try {
        let response = await fetch(url);
        let json = await response.json();
        //console.log('Got data',Url, json);
        let actionen= json; 

        musicdispatch(musicActions.success(actionen));

    }catch {

        musicdispatch(musicActions.failure());

    }
    

}
export default Music; 