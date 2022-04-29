import { createAction, createReducer } from "@reduxjs/toolkit"


const isFetching = createAction('is fetching war movie');
const success = createAction('success fetching war movie');
const failure = createAction('failure fetching war movie');
const warActions = {
    isFetching, success , failure
}

const WARSTATUS = {
    NORMAL: 'normal',
    FETCHING :'is fetching',
    SUCCESS : 'success',
    FAILURE :'failure'
}

const InitialState ={
    status: WARSTATUS.NORMAL,
    data : null
}
const warReducer = createReducer(InitialState, {
    [isFetching] : (state, action)=> ({
        ...state, 
        status: WARSTATUS.FETCHING
    }),
    [success] : (state, action) => ({
        status : WARSTATUS.SUCCESS,
        data : action.payload
    }),
    [failure] : (state, action) => ({
        status : WARSTATUS.FAILURE,
        data : null

    })
})


export {warActions, WARSTATUS, warReducer}
