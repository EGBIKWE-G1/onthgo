
// import axios from "axios";

// import { toast } from 'react-toastify';
// import {
//     ADD_MERCHANT,
//     GET_MERCHANT,
//     GET_MERCHANTS,
//     MERCHANT_LOADING,
//     CLEAR_ERRORS, GET_ERRORS
// } from "./types";

// GET Account
const scalableBaseUrl = 'https://scalable-commerce-backend.herokuapp.com'

// // / Add Merchant
// export const addPost = postData => dispatch => {
//     dispatch(clearErrors());
//     axios
//         .post(`${scalableBaseUrl}/api/v1/merchants
//         `, postData)
//         .then(res =>
//             dispatch({
//                 type: ADD_MERCHANT,
//                 payload: res.data
//             })
//         )
//         .catch(err =>
//             dispatch({
//                 type: GET_ERRORS,
//                 payload: err.response.data
//             })
//         );
// };
  
//   // Get Merchants
// export const getMerchants = () => dispatch => {
//     dispatch(setPostLoading());
//     axios
//         .get(`${scalableBaseUrl}/api/v1/merchants`)
//         .then(res =>
//             dispatch({
//                 type: GET_MERCHANTS,
//                 payload: res.data
//             })
//         )
//         .catch(err =>
//             dispatch({
//                 type: GET_MERCHANTS,
//                 payload: null
//             })
//         );
// };
  
// // Get Merchant // single Merchant
// export const getMerchant = id => dispatch => {
//     dispatch(setPostLoading());
//     axios
//         .get(`${scalableBaseUrl}/api/v1/merchants/${id}`)
//         .then(res =>
//             dispatch({
//                 type: GET_MERCHANT,
//                 payload: res.data
//             })
//         )
//         .catch(err =>
//             dispatch({
//                 type: GET_MERCHANTS,
//                 payload: null
//             })
//     );
// };

//   // Set loading state
// export const setPostLoading = () => {
//     return {
//         type: MERCHANT_LOADING
//     };
// };
  
// // Clear errors
// export const clearErrors = () => {
//     return {
//         type: CLEAR_ERRORS
//     };
// };