const defaultState = {
    customers: [],
};
export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CUSTOMERR":
            return { ...state, cash: state.cash + action.payload };
        case "GET_CUSTOMERR":
            return { ...state, cash: state.cash - action.payload };

        default:
            return state;
    }
};
