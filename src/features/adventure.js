import { createAction, createReducer } from "@reduxjs/toolkit"


const isFetching = createAction('is fetching adventure movie');
const success = createAction('success fetching adventure movie');
const failure = createAction('failure fetching adventure movie');
const adventureActions = {
    isFetching, success , failure
}

const ADVENTURESTATUS = {
    NORMAL: 'normal',
    FETCHING :'is fetching',
    SUCCESS : 'success',
    FAILURE :'failure'
}

const InitialState ={
    status: ADVENTURESTATUS.NORMAL,
    data : null
}
const adventureReducer = createReducer(InitialState, {
    [isFetching] : (state, adventure)=> ({
        ...state, 
        status: ADVENTURESTATUS.FETCHING
    }),
    [success] : (state, adventure) => ({
        status : ADVENTURESTATUS.SUCCESS,
        data : adventure.payload
    }),
    [failure] : (state, adventure) => ({
        status : ADVENTURESTATUS.FAILURE,
        data : null

    })
})


export {adventureActions, ADVENTURESTATUS, adventureReducer}
