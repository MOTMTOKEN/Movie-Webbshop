import { createAction, createReducer } from "@reduxjs/toolkit"


const isFetching = createAction('is fetching mystery movie');
const success = createAction('success fetching mystery movie');
const failure = createAction('failure fetching mystery movie');
const mysteryActions = {
    isFetching, success , failure
}

const MEYSTERYSTATUS = {
    NORMAL: 'normal',
    FETCHING :'is fetching',
    SUCCESS : 'success',
    FAILURE :'failure'
}

const InitialState ={
    status: MEYSTERYSTATUS.NORMAL,
    data : null
}
const mysteryReducer = createReducer(InitialState, {
    [isFetching] : (state, action)=> ({
        ...state, 
        status: MEYSTERYSTATUS.FETCHING
    }),
    [success] : (state, action) => ({
        status : MEYSTERYSTATUS.SUCCESS,
        data : action.payload
    }),
    [failure] : (state, action) => ({
        status : MEYSTERYSTATUS.FAILURE,
        data : null

    })
})


export {mysteryActions, MEYSTERYSTATUS, mysteryReducer}
