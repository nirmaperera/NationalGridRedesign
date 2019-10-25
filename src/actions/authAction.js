export const GET_TOKEN = 'get_token';
export const DEL_TOKEN = 'del_token';


export const getToken = () => {
    return {
        type: GET_TOKEN
    };
};
export const delToken = () => {
    return {
        type: DEL_TOKEN
    };
};
