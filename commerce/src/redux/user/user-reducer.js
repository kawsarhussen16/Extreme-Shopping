const initialState = {
    currentUser: null,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-CURRENT_USER':
            return {
                ...state, currentUser: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;