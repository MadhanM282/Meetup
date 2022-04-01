import { LOGIN, MEET } from "./action";
const initialState = { 
    user: JSON.parse(localStorage.getItem("Auth"))||false ,
    meets:[]
};

export const loginReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        // add your login reducer functionalities here
        case LOGIN: return {user:true}
        case MEET: return {...store,meets:[...store.meets,payload]}
        default: return store
    }
}