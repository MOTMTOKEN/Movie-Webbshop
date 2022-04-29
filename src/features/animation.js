import { createAction, createReducer } from "@reduxjs/toolkit"


const isFetching = createAction('is fetching animation movie');
const success = createAction('success fetching animation movie');
const failure = createAction('failure fetching animation movie');
const animationActions = {
    isFetching, success , failure
}

const ANIMATIONSTATUS = {
    NORMAL: 'normal',
    FETCHING :'is fetching',
    SUCCESS : 'success',
    FAILURE :'failure'
}

const InitialState ={
    status: ANIMATIONSTATUS.NORMAL,
    data : null
}
const animationReducer = createReducer(InitialState, {
    [isFetching] : (state, action)=> ({
        ...state, 
        status: ANIMATIONSTATUS.FETCHING
    }),
    [success] : (state, action) => ({
        status : ANIMATIONSTATUS.SUCCESS,
        data : action.payload
    }),
    [failure] : (state, action) => ({
        status : ANIMATIONSTATUS.FAILURE,
        data : null

    })
})


export {animationActions, ANIMATIONSTATUS, animationReducer}
