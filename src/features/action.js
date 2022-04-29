
import { createAction, createReducer } from "@reduxjs/toolkit"


const isFetching = createAction('is fetching action movie');
const success = createAction('success fetching action movie');
const failure = createAction('failure fetching action movie');
const actions = {
    isFetching, success , failure
}

const STATUS = {
    NORMAL: 'normal',
    FETCHING :'is fetching',
    SUCCESS : 'success',
    FAILURE :'failure'
}

const initialState ={
    status: STATUS.NORMAL,
    data : null
}
const reducer = createReducer(initialState, {
    [isFetching] : (state, action)=> ({
        ...state, 
        status: STATUS.FETCHING
    }),
    [success] : (state, action) => ({
        status : STATUS.SUCCESS,
        data : action.payload
    }),
    [failure] : (state,action) => ({
        status : STATUS.FAILURE,
        data : null

    })
})


export {actions, STATUS, reducer}
