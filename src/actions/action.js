import * as types from '../constants/ActionTypes';
export const actToggle=()=>{
    return {type:types.IS_TOGGLE}
}
export const actSort=(sortNamex,sortAgex)=>{
    return {type:types.SORT_NAME,sortName:sortNamex,sortAge:sortAgex}
}
export const actGetItem=()=>{
    return {type:types.GET_ITEM}
}
