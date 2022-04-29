import { createAction, createReducer } from "@reduxjs/toolkit"


const isFetching = createAction('is fetching thriller movie');
const success = createAction('success fetching thriller movie');
const failure = createAction('failure fetching thriller movie');
const thrillerActions = {
    isFetching, success , failure
}

const THRILLERSTATUS = {
    NORMAL: 'normal',
    FETCHING :'is fetching',
    SUCCESS : 'success',
    FAILURE :'failure'
}

const InitialState ={
    status: THRILLERSTATUS.NORMAL,
    data : null
}
const thrillerReducer = createReducer(InitialState, {
    [isFetching] : (state, action)=> ({
        ...state, 
        status: THRILLERSTATUS.FETCHING
    }),
    [success] : (state, action) => ({
        status : THRILLERSTATUS.SUCCESS,
        data : action.payload
    }),
    [failure] : (state, action) => ({
        status : THRILLERSTATUS.FAILURE,
        data : null

    })
})


export {thrillerActions, THRILLERSTATUS, thrillerReducer}
