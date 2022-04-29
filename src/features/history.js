import { createAction, createReducer } from "@reduxjs/toolkit"


const isFetching = createAction('is fetching history movie');
const success = createAction('success fetching history movie');
const failure = createAction('failure fetching history movie');
const historyActions = {
    isFetching, success , failure
}

const HISTORYSTATUS = {
    NORMAL: 'normal',
    FETCHING :'is fetching',
    SUCCESS : 'success',
    FAILURE :'failure'
}

const InitialState ={
    status: HISTORYSTATUS.NORMAL,
    data : null
}
const historyReducer = createReducer(InitialState, {
    [isFetching] : (state, action)=> ({
        ...state, 
        status: HISTORYSTATUS.FETCHING
    }),
    [success] : (state, action) => ({
        status : HISTORYSTATUS.SUCCESS,
        data : action.payload
    }),
    [failure] : (state, action) => ({
        status : HISTORYSTATUS.FAILURE,
        data : null

    })
})


export {historyActions, HISTORYSTATUS, historyReducer}
