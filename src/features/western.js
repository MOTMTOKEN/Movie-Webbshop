import { createAction, createReducer } from "@reduxjs/toolkit"


const isFetching = createAction('is fetching western movie');
const success = createAction('success fetching western movie');
const failure = createAction('failure fetching western movie');
const westernActions = {
    isFetching, success , failure
}

const WESTERNSTATUS = {
    NORMAL: 'normal',
    FETCHING :'is fetching',
    SUCCESS : 'success',
    FAILURE :'failure'
}

const InitialState ={
    status: WESTERNSTATUS.NORMAL,
    data : null
}
const westernReducer = createReducer(InitialState, {
    [isFetching] : (state, action)=> ({
        ...state, 
        status: WESTERNSTATUS.FETCHING
    }),
    [success] : (state, action) => ({
        status : WESTERNSTATUS.SUCCESS,
        data : action.payload
    }),
    [failure] : (state, action) => ({
        status : WESTERNSTATUS.FAILURE,
        data : null

    })
})


export {westernActions, WESTERNSTATUS, westernReducer}
