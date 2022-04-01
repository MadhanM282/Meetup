//Action Types:
export const LOGIN = "LOGIN";
export const MEET = "MEET"

//Action Creators:
export const userLogin = () => ({ type: LOGIN, payload });
export const Meets = (data)=>({type:MEET, payload:data});