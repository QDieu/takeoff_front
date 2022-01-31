import React from 'react';
import { ActionTypesCreator } from '../store';

let initialState = {
    isAuth : false,
    login : 'test@test.com',
    password : '123qwe'
};

type InitialStateType = typeof initialState;

export const authReducer = (state = initialState, action: TActionAuthReducer): InitialStateType => {
    switch (action.type) {
        case 'CHECK_AUTH' : {
            if (action.payload.login === state.login && action.payload.password === state.password) return {...state, isAuth : true};
            return state;
        }
        default : return state;
    }
};

type TActionAuthReducer = ActionTypesCreator<typeof ActionAuthReducer>;

export const ActionAuthReducer = {
    checkAuth : (login : string, password : string) => ({type : 'CHECK_AUTH', payload : {login, password}} as const)
};

