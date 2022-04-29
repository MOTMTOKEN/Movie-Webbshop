import { createAction, createReducer } from "@reduxjs/toolkit"


const isFetching = createAction('is fetching documentry movie');
const success = createAction('success fetching documentry movie');
const failure = createAction('failure fetching documentry movie');
const documentryActions = {
    isFetching, success , failure
}

const DOCUMENTRYSTATUS = {
    NORMAL: 'normal',
    FETCHING :'is fetching',
    SUCCESS : 'success',
    FAILURE :'failure'
}

const InitialState ={
    status: DOCUMENTRYSTATUS.NORMAL,
    data : null
}
const documentryReducer = createReducer(InitialState, {
    [isFetching] : (state, action)=> ({
        ...state, 
        status: DOCUMENTRYSTATUS.FETCHING
    }),
    [success] : (state, action) => ({
        status : DOCUMENTRYSTATUS.SUCCESS,
        data : action.payload
    }),
    [failure] : (state, action) => ({
        status : DOCUMENTRYSTATUS.FAILURE,
        data : null

    })
})


export {documentryActions, DOCUMENTRYSTATUS, documentryReducer}
