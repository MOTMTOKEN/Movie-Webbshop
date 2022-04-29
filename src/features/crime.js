import { createAction, createReducer } from "@reduxjs/toolkit"


const isFetching = createAction('is fetching crime movie');
const success = createAction('success fetching crime movie');
const failure = createAction('failure fetching crime movie');
const crimeActions = {
    isFetching, success , failure
}

const CRIMESTATUS = {
    NORMAL: 'normal',
    FETCHING :'is fetching',
    SUCCESS : 'success',
    FAILURE :'failure'
}

const InitialState ={
    status: CRIMESTATUS.NORMAL,
    data : null
}
const crimeReducer = createReducer(InitialState, {
    [isFetching] : (state, action)=> ({
        ...state, 
        status: CRIMESTATUS.FETCHING
    }),
    [success] : (state, action) => ({
        status : CRIMESTATUS.SUCCESS,
        data : action.payload
    }),
    [failure] : (state, action) => ({
        status : CRIMESTATUS.FAILURE,
        data : null

    })
})


export {crimeActions, CRIMESTATUS, crimeReducer}
