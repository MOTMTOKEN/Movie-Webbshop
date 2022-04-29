import { createAction, createReducer } from "@reduxjs/toolkit"


const isFetching = createAction('is fetching tv_movie movie');
const success = createAction('success fetching tv_movie movie');
const failure = createAction('failure fetching tv_movie movie');
const tv_movieActions = {
    isFetching, success , failure
}

const TV_MOVIESTATUS = {
    NORMAL: 'normal',
    FETCHING :'is fetching',
    SUCCESS : 'success',
    FAILURE :'failure'
}

const InitialState ={
    status: TV_MOVIESTATUS.NORMAL,
    data : null
}
const tv_movieReducer = createReducer(InitialState, {
    [isFetching] : (state, action)=> ({
        ...state, 
        status: TV_MOVIESTATUS.FETCHING
    }),
    [success] : (state, action) => ({
        status : TV_MOVIESTATUS.SUCCESS,
        data : action.payload
    }),
    [failure] : (state, action) => ({
        status : TV_MOVIESTATUS.FAILURE,
        data : null

    })
})


export {tv_movieActions, TV_MOVIESTATUS, tv_movieReducer}
