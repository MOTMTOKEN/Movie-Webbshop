import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {actions, STATUS} from '../features/action';


const action='https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=28';
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
        
        fetchData(dispatch,Url);
  
    },[])
    


return(
    <div>
      
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
        let fact= json; 

        dispatch(actions.success(fact));

    }catch {

        dispatch(actions.failure());

    }
    

}
export default Action; 