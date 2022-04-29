import { combineReducers } from "redux";
import { reducer as actionReducer } from "./action";
import { comedyReducer as coReducer } from "./comedy";

const rootReducer = combineReducers({
    action: actionReducer,
    comedy: coReducer

});

export {rootReducer} ;