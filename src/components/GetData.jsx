import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {actions, STATUS} from '../features/getdata';


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
const ImageBaseUrl = 'https://image.tmdb.org/t/p/w500';



const GetData = () => {
    const status = useSelector(state => state.getdata.status);
    const data = useSelector(state => state.getdata);
    const [currentGenre, setCurrentGenre] = useState(0);
    const [currentPage, setCurrentPage] = useState("2");
    const baseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page='
    const Url = baseUrl + {currentPage} +'&with_genres='+{currentGenre}
    

    const dispatch = useDispatch();
    let content = null ;
    if (status === STATUS.NORMAL){
        content = 'Redo för lite Fakta?';
    } else if (status === STATUS.FETCHING){
        content = 'Is fetching';
    } else if (status === STATUS.SUCCESS){
       // console.log('Got data',data);
        content = data.results[0].title
       // console.log('Data is', data);
        // det är en array. hur man kan skriva ut de som en array?
    } else {
        content = 'could not get data';
    }

    useEffect(()=>{
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
        {}
      
    </div>
)

}


async function fetchData(dispatch,Url) {

    dispatch(actions.isFetching());

 
    try {
        let response = await fetch(Url);
        let json = await response.json();
        //console.log('Got data',Url, json);
        let fact= json; 

        dispatch(actions.success(fact));

    }catch {

        dispatch(actions.failure());

    }
    

}
export default GetData; 