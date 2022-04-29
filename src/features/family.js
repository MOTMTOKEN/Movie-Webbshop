import { createAction, createReducer } from "@reduxjs/toolkit"


const isFetching = createAction('is fetching family movie');
const success = createAction('success fetching family movie');
const failure = createAction('failure fetching family movie');
const familyActions = {
    isFetching, success , failure
}

const FAMILYSTATUS = {
    NORMAL: 'normal',
    FETCHING :'is fetching',
    SUCCESS : 'success',
    FAILURE :'failure'
}

const InitialState ={
    status: FAMILYSTATUS.NORMAL,
    data : null
}
const familyReducer = createReducer(InitialState, {
    [isFetching] : (state, action)=> ({
        ...state, 
        status: FAMILYSTATUS.FETCHING
    }),
    [success] : (state, action) => ({
        status : FAMILYSTATUS.SUCCESS,
        data : action.payload
    }),
    [failure] : (state, action) => ({
        status : FAMILYSTATUS.FAILURE,
        data : null

    })
})


export {familyActions, FAMILYSTATUS, familyReducer}
