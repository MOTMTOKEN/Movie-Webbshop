import { createAction, createReducer } from "@reduxjs/toolkit"


const isFetching = createAction('is fetching horror movie');
const success = createAction('success fetching horror movie');
const failure = createAction('failure fetching horror movie');
const horrorActions = {
    isFetching, success , failure
}

const HORRORSTATUS = {
    NORMAL: 'normal',
    FETCHING :'is fetching',
    SUCCESS : 'success',
    FAILURE :'failure'
}

const InitialState ={
    status: HORRORSTATUS.NORMAL,
    data : null
}
const horrorReducer = createReducer(InitialState, {
    [isFetching] : (state, action)=> ({
        ...state, 
        status: HORRORSTATUS.FETCHING
    }),
    [success] : (state, action) => ({
        status : HORRORSTATUS.SUCCESS,
        data : action.payload
    }),
    [failure] : (state, action) => ({
        status : HORRORSTATUS.FAILURE,
        data : null

    })
})


export {horrorActions, HORRORSTATUS, horrorReducer}
