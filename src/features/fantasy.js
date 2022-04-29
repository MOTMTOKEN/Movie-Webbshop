import { createAction, createReducer } from "@reduxjs/toolkit"


const isFetching = createAction('is fetching fantasy movie');
const success = createAction('success fetching fantasy movie');
const failure = createAction('failure fetching fantasy movie');
const fantasyActions = {
    isFetching, success , failure
}

const FANTASYSTATUS = {
    NORMAL: 'normal',
    FETCHING :'is fetching',
    SUCCESS : 'success',
    FAILURE :'failure'
}

const InitialState ={
    status: FANTASYSTATUS.NORMAL,
    data : null
}
const fantasyReducer = createReducer(InitialState, {
    [isFetching] : (state, action)=> ({
        ...state, 
        status: FANTASYSTATUS.FETCHING
    }),
    [success] : (state, action) => ({
        status : FANTASYSTATUS.SUCCESS,
        data : action.payload
    }),
    [failure] : (state, action) => ({
        status : FANTASYSTATUS.FAILURE,
        data : null

    })
})


export {fantasyActions, FANTASYSTATUS, fantasyReducer}
