let defaultState = {
    isSort:  { isSortName:"DESC",isSortAge:"ASC"}
}
let isSort = (state = defaultState, action) => {
    let isSort = state.isSort;
    switch (action.type) {
        case "SORT_NAME":
            return {...state,isSort:{...isSort,isSortName:action.sortName,isSortAge:action.sortAge}}
        default:
            return state;
    }
}
export default isSort;