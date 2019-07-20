import {combineReducers} from "redux";
import isSort from "./isSort.reducer";
import toggle from "./toggle.reducer";
import getItem from "./getItem.reducer";
const appreducer = combineReducers({
    isSort,
    toggle,
    getItem
})
export default appreducer;