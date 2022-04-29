import { createAction, createReducer } from "@reduxjs/toolkit"


const isFetching = createAction('is fetching romance movie');
const success = createAction('success fetching romance movie');
const failure = createAction('failure fetching romance movie');
const romanceActions = {
    isFetching, success , failure
}

const ROMANCESTATUS = {
    NORMAL: 'normal',
    FETCHING :'is fetching',
    SUCCESS : 'success',
    FAILURE :'failure'
}

const InitialState ={
    status: ROMANCESTATUS.NORMAL,
    data : null
}
const romanceReducer = createReducer(InitialState, {
    [isFetching] : (state, action)=> ({
        ...state, 
        status: ROMANCESTATUS.FETCHING
    }),
    [success] : (state, action) => ({
        status : ROMANCESTATUS.SUCCESS,
        data : action.payload
    }),
    [failure] : (state, action) => ({
        status : ROMANCESTATUS.FAILURE,
        data : null

    })
})


export {romanceActions, ROMANCESTATUS, romanceReducer}
