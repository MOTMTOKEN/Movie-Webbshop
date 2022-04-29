import { combineReducers } from "redux";
import { reducer as actionReducer } from "./action";
import { adventureReducer as advenReducer } from "./adventure";
import { comedyReducer as coReducer } from "./comedy";
import { animationReducer  } from "./animation";
import { documentryReducer  } from "./documentry";
import { dramaReducer  } from "./drama";
import { familyReducer  } from "./family";
import { crimeReducer  } from "./crime";
import { fantasyReducer  } from "./fantasy";

import { historyReducer  } from "./history";

import { horrorReducer  } from "./horror";

import { musicReducer  } from "./music";

import { mysteryReducer  } from "./mystery";

import { romanceReducer  } from "./romance";

import { si_fiReducer  } from "./si_fi";

import { tv_movieReducer  } from "./tv_movie";

import { thrillerReducer  } from "./thriller";

import { warReducer  } from "./war";

import { westernReducer  } from "./western";



const rootReducer = combineReducers({
    action: actionReducer,
    comedy: coReducer,
    adventure : advenReducer,
    animation : animationReducer,
    documentry : documentryReducer,
    drama : dramaReducer,
    
    family : familyReducer,
    crime : crimeReducer,
    
    fantasy : fantasyReducer,
    
    history : historyReducer,
    
    horror : horrorReducer,
    
    music : musicReducer,
    
    mystery : mysteryReducer,
    
    romace : romanceReducer,
    
    si_fi : si_fiReducer,
    
    tv_movie : tv_movieReducer,
    
    thriller : thrillerReducer,
    
    war : warReducer,
    
    western : westernReducer
   


});

export {rootReducer} ;