import { createAction, createReducer } from "@reduxjs/toolkit"


const isFetching = createAction('is fetching drama movie');
const success = createAction('success fetching drama movie');
const failure = createAction('failure fetching drama movie');
const dramaActions = {
    isFetching, success , failure
}

const DRAMASTATUS = {
    NORMAL: 'normal',
    FETCHING :'is fetching',
    SUCCESS : 'success',
    FAILURE :'failure'
}

const InitialState ={
    status: DRAMASTATUS.NORMAL,
    data : null
}
const dramaReducer = createReducer(InitialState, {
    [isFetching] : (state, action)=> ({
        ...state, 
        status: DRAMASTATUS.FETCHING
    }),
    [success] : (state, action) => ({
        status : DRAMASTATUS.SUCCESS,
        data : action.payload
    }),
    [failure] : (state, action) => ({
        status : DRAMASTATUS.FAILURE,
        data : null

    })
})


export {dramaActions, DRAMASTATUS, dramaReducer}
