import createDataContext from './createDataContext';

const userReducer = (state, action) => {
    switch (action.type) {
        case 'add_user':
            return { user: action.payload };
        default:
            return state;
    }
};

const addUser = (dispatch) => async (user_id) => {
    dispatch({ type: 'add_user', payload: user_id });
};

export const { Provider, Context } = createDataContext(
    userReducer,
    { addUser },
    { user: '' }
);
