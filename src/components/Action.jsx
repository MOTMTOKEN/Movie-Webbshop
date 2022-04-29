import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {actions, STATUS} from '../features/action';


const action='https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=28';
/*const adventure='https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=12';
const animation='https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=16';
const comedy='https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=35';
const crime='https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=80';
const documentry='https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=99';
const drama='https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=18';
const family='https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=10751';
const fantasy='https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=14';
const history='https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=36';
const horror='https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=27';
const music='https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=10402';
const mystery='https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=9648';
const romance='https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=10749';
const si_fi='https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=878';
const tv_movie='https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=10770';
const thriller='https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=53';
const war='https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=10752';
const western='https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=37';
const genreUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US';
*/
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
const imageBaseUrlOriginal = 'https://image.tmdb.org/t/p/original';



const Action = () => {
    const status = useSelector(state => state.action.status);
    const data = useSelector(state => state.action.data);
    const baseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page='

    const [currentGenre, setCurrentGenre] = useState("28");
    const [currentPage, setCurrentPage] = useState("1");
    const Url = baseUrl + currentPage +'&with_genres='+ currentGenre;
    
    
    

    const dispatch = useDispatch();
    let actionContent = null ;
    if (status === STATUS.NORMAL){
        actionContent = 'Redo för lite Fakta?';
    } else if (status === STATUS.FETCHING){
        actionContent = 'Is fetching';
    } else if (status === STATUS.SUCCESS){
        console.log('Got data action',data);
        
        actionContent = data.results.map(home =>
             <div key={home.id}>
                 <h4>{home.title}</h4>
                <a href={imageBaseUrlOriginal+home.backdrop_path}>
                    <img src={imageBaseUrl+home.backdrop_path} alt="" />

                </a>
                 
             </div>
            )
     
    } else {
        actionContent = 'could not get data';
    }

    useEffect(()=>{
       // setCurrentGenre=80
        
        fetchData(dispatch,Url);
        /*
        fetchData(dispatch,adventure);
        fetchData(dispatch,animation);
        fetchData(dispatch,comedy);
        fetchData(dispatch,crime);
        fetchData(dispatch,documentry);
        fetchData(dispatch,drama);
        fetchData(dispatch,family);
        fetchData(dispatch,fantasy);
        fetchData(dispatch,history);
        fetchData(dispatch,horror);
        fetchData(dispatch,music);
        fetchData(dispatch,mystery);
        fetchData(dispatch,romance);
        fetchData(dispatch,si_fi);
        fetchData(dispatch,tv_movie);
        fetchData(dispatch,thriller);
        fetchData(dispatch,war);
        fetchData(dispatch,western);
        fetchData(dispatch,genreUrl);
        */


    },[])
    


return(
    <div>
        <p>
            <button>Get Data</button>
        </p>
        <div className="container">
        {actionContent}

        </div>
        
      
    </div>
)

}


async function fetchData(dispatch,url) {

    dispatch(actions.isFetching());
    console.log('url är action ',url);

 
    try {
        let response = await fetch(url);
        let json = await response.json();
        //console.log('Got data',Url, json);
        let fact= json; 

        dispatch(actions.success(fact));

    }catch {

        dispatch(actions.failure());

    }
    

}
export default Action; 