import axios from 'axios';

import { ACCOUNT } from './types';

// GET Account
const scalableBaseUrl = 'https://scalable-commerce-backend.herokuapp.com';

export const getAccount = () => (dispatch, getState) => {
    //  Get token from state
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // If token, add to headers config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios
        .get(`${scalableBaseUrl}/api/leads/`, config)
        .then((res) => {
            dispatch({
                type: ACCOUNT,
                payload: res.data,
            });
        })
        .catch((err) => dispatch((err.response.data, err.response.status)));
};
