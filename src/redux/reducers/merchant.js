import {
    GET_MERCHANTS,
    ADD_MERCHANT,
    MERCHANT_LOADING,
    DELETE_POST,
    GET_MERCHANT
  } from "../actions/types";

  import MERCHANT_DATA from '../../data/merchants.json'
  
  const initialState = {
    merchants: [...MERCHANT_DATA],
    merchant: {},
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case MERCHANT_LOADING:
        return {
          ...state,
          loading: true
        };
      case ADD_MERCHANT:
        return {
          ...state,
          merchants: action.payload,
          loading: false
        };
        case GET_MERCHANTS:
        return {
          ...state,
          post: action.payload,
          loading: false 
        }
      case GET_MERCHANT:
        return {
          ...state,
          merchants: [action.payload, ...state.merchants]
        };
      case DELETE_POST:
        return {
          ...state,
          merchants: state.merchants.filter(post => post._id !== action.payload)
        };
      default:
        return state;
    }
  }
  