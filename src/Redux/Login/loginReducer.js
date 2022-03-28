import { LOGIN } from "./action";
const initialState = { user: localStorage.getItem("user")||false };

export const loginReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        // add your login reducer functionalities here

        case LOGIN: return {user:true}
        default: return store
    }
}