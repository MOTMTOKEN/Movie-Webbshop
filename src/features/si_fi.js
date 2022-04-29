import { createAction, createReducer } from "@reduxjs/toolkit"


const isFetching = createAction('is fetching si_fi movie');
const success = createAction('success fetching si_fi movie');
const failure = createAction('failure fetching si_fi movie');
const si_fiActions = {
    isFetching, success , failure
}

const SI_FISTATUS = {
    NORMAL: 'normal',
    FETCHING :'is fetching',
    SUCCESS : 'success',
    FAILURE :'failure'
}

const InitialState ={
    status: SI_FISTATUS.NORMAL,
    data : null
}
const si_fiReducer = createReducer(InitialState, {
    [isFetching] : (state, action)=> ({
        ...state, 
        status: SI_FISTATUS.FETCHING
    }),
    [success] : (state, action) => ({
        status : SI_FISTATUS.SUCCESS,
        data : action.payload
    }),
    [failure] : (state, action) => ({
        status : SI_FISTATUS.FAILURE,
        data : null

    })
})


export {si_fiActions, SI_FISTATUS, si_fiReducer}
