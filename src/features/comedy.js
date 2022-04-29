import { createAction, createReducer } from "@reduxjs/toolkit"


const isFetching = createAction('is fetching comedy movie');
const success = createAction('success fetching comedy movie');
const failure = createAction('failure fetching comedy movie');
const comedyActions = {
    isFetching, success , failure
}

const COMEDYSTATUS = {
    NORMAL: 'normal',
    FETCHING :'is fetching',
    SUCCESS : 'success',
    FAILURE :'failure'
}

const InitialState ={
    status: COMEDYSTATUS.NORMAL,
    data : null
}
const comedyReducer = createReducer(InitialState, {
    [isFetching] : (state, action)=> ({
        ...state, 
        status: COMEDYSTATUS.FETCHING
    }),
    [success] : (state, action) => ({
        status : COMEDYSTATUS.SUCCESS,
        data : action.payload
    }),
    [failure] : (state, action) => ({
        status : COMEDYSTATUS.FAILURE,
        data : null

    })
})


export {comedyActions, COMEDYSTATUS, comedyReducer}
