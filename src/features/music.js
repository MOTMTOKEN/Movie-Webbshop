import { createAction, createReducer } from "@reduxjs/toolkit"


const isFetching = createAction('is fetching music movie');
const success = createAction('success fetching music movie');
const failure = createAction('failure fetching music movie');
const musicActions = {
    isFetching, success , failure
}

const MUSICSTATUS = {
    NORMAL: 'normal',
    FETCHING :'is fetching',
    SUCCESS : 'success',
    FAILURE :'failure'
}

const InitialState ={
    status: MUSICSTATUS.NORMAL,
    data : null
}
const musicReducer = createReducer(InitialState, {
    [isFetching] : (state, action)=> ({
        ...state, 
        status: MUSICSTATUS.FETCHING
    }),
    [success] : (state, action) => ({
        status : MUSICSTATUS.SUCCESS,
        data : action.payload
    }),
    [failure] : (state, action) => ({
        status : MUSICSTATUS.FAILURE,
        data : null

    })
})


export {musicActions, MUSICSTATUS, musicReducer}
