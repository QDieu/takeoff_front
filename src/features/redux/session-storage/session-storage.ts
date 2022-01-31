import { TAppState } from "../store";

export const loadState = () => {
    try {
        const serializedState = sessionStorage.getItem('state');

        if (serializedState === null){
            return undefined
        }

        return JSON.parse(serializedState);
    }catch(error){
        return undefined
    }
};

export const saveState = (state : TAppState) => {
     try {
         const serializedState = JSON.stringify(state);
         sessionStorage.setItem('state', serializedState);
     }catch(error){
         console.error('Ошибка записи')
     }
}