import { GET_TOKEN, DEL_TOKEN } from "../actions/authAction";


const initState = {
    username: " ",
    success: false
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_TOKEN:
            return {
                username: action.username,
                success: true
            }
        case DEL_TOKEN:
            return initState;
        default:
            return state;
    }
}

export default authReducer;
