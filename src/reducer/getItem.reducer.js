let defaultState = [];
let obj = [ {
    name: "vu",
    age: 12
},
{
    name: "huy",
    age: 122
},
{
    name: "thuc",
    age: 31
},]
let getItem = (state = defaultState, action) => {
   
    switch (action.type) {
        case "GET_ITEM":
            state = obj;
            return state;
        default:
            return state;
    }
}
export default getItem;