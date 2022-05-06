import { createAction, createReducer } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils";


const isFetching = createAction('is fetching movieGenre movie');
const success = createAction('success fetching movieGenre movie');
const failure = createAction('failure fetching movieGenre movie');
const movieGenreActions = {
    isFetching, success , failure
}

const GENRESTATUS = {
    NORMAL: 'normal',
    FETCHING :'is fetching',
    SUCCESS : 'success',
    FAILURE :'failure'
}

const InitialState = []

   // status: ADVENTURESTATUS.NORMAL,
   // data : null
//}
const movieGenreReducer = createReducer(InitialState, {
    [isFetching] : (state, action)=> ({
        ...state, 
        status: GENRESTATUS.FETCHING
    }),
    [success] : (state, action) => (
        [...state, {
            genre:  action.payload.genre,
            status: GENRESTATUS.SUCCESS,
            data : action.payload.data

        }]
    ),
    [failure] : (state, action) => ({
        status : GENRESTATUS.FAILURE,
        data : null

    })
})


export {movieGenreActions, GENRESTATUS, movieGenreReducer}
