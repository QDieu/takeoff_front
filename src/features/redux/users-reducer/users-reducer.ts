import React from 'react';
import { UserAPI } from '../../../shared/api';
import { TUser } from '../../../shared/types/User';
import { ActionTypesCreator, ThunkTypeCreator } from '../store';

const usersSort = (first : TUser, second : TUser , sortBy : string) =>{
    switch (sortBy) {
        case 'city' : {
            if (first.address.city < second.address.city) return -1;
            if (first.address.city > second.address.city) return 1;
            return 0
        }
        case 'company' : {
            if (first.company.name < second.company.name) return -1;
            if (first.company.name > second.company.name) return 1;
            return 0
        }
    }
    return 0;
}

let initialState = {
    users: [] as Array<TUser>,
    sortBy : '',
    isFetching : true,
};

type InitialStateType = typeof initialState;

export const userReducer = (state = initialState, action: TActionUserReducer): InitialStateType => {
    switch (action.type) {
        case 'SET_USERS':
            return { ...state, users: [...action.payload] };
        case 'SET_SORT':
            return {...state, users : [...state.users.sort((a,b) => usersSort(a,b, action.payload))]};
        case 'TOGGLE_IS_FETCHING':
            return {...state, isFetching : action.payload};
        case 'ADD_USER' :
            return {...state, users : [...state.users, action.payload]}
        default:
            return state;
    }
};

type TActionUserReducer = ActionTypesCreator<typeof ActionUserReducer>;

export const ActionUserReducer = {
    setUsers: (users: Array<TUser>) => ({ type: 'SET_USERS', payload: users } as const),
    setSortBy : (sortBy : string) => ({type: 'SET_SORT', payload : sortBy} as const),
    toggleIsFetching : (isFetching : boolean) => ({type : 'TOGGLE_IS_FETCHING', payload : isFetching} as const),
    addUser : (user : TUser) => ({type : 'ADD_USER', payload : user} as const)
};

type TThunkUserReducer = ThunkTypeCreator<TActionUserReducer>;

export const fetchUser = (): TThunkUserReducer => {
    return async (dispatch) => {
        dispatch(ActionUserReducer.toggleIsFetching(true));
        let data = await UserAPI.getUsers();
        dispatch(ActionUserReducer.setUsers(data));
        dispatch(ActionUserReducer.toggleIsFetching(false));
    };
};
