import { createStore, combineReducers, applyMiddleware, Action } from 'redux';
import { userReducer } from './users-reducer';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { authReducer } from './auth-reducer';
import { loadState, saveState } from './session-storage';

const RootReducer = combineReducers({
    usersPage: userReducer,
    authPage : authReducer,
});

type TRootReducer = typeof RootReducer;
export type TAppState = ReturnType<TRootReducer>;

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionTypesCreator<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
    PropertiesTypes<T>
>;

export type ThunkTypeCreator<A extends Action, R = Promise<void>> = ThunkAction<
    R,
    TAppState,
    unknown,
    A
>;

const persistedState = loadState();

const store = createStore(RootReducer, persistedState, applyMiddleware(thunkMiddleware) );

store.subscribe(() => {
    saveState(store.getState());
})

export default store;
