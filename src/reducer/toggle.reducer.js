let defaultState = false;
let isToggle = (state = defaultState, action) => {
    switch (action.type) {
        case "IS_TOGGLE":
            state = true
            return state;
        default:
            return state;
    }
}

export default isToggle;