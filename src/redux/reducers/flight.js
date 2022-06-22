import {
    FLIGHT_SEARCH_FAILURE,
    FLIGHT_SEARCH_REQUEST,
    FLIGHT_SEARCH_SUCCESS,
    PASSENGER_DETAIL,
    SELECTED_FLIGHT_MERCHANT,
    SELECTED_FLIGHT_OFFER,
    SELECTED_TICKET_OPTION,
    SELECTED_FLIGHT_INSURANCE,
    INSURER_DETAIL,
    UPDATE_PASSENGER_COUNTER,
    RESET_FLIGHT_DETAIL, LOADING,
    FLIGHT_PAYMENT_REQUEST,

    CONFIRM_FLIGHT_PAYMENT_REQUEST,
    CONFIRM_FLIGHT_PAYMENT_SUCCESS,
    CONFIRM_FLIGHT_PAYMENT_FAILURE
} from "../actions/types";

const initialState = {
    loading: false,
    searching: false,
    requestingPayment: false,
    error: undefined,
    data: {
        flightOffers: null,
        selectedFlightOffer: null,
        flightPaymentData: null,
        flightPayamentStatus: null,

        selectedFlightDetail: null,
        selectedMerchant: null,
        ticketOption: null,
        passenger: null,
        insurance: null,
        insurerDetail: null,
    },

    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FLIGHT_SEARCH_REQUEST:
            return {
                ...state,
                searching: true,
                data: {
                    ...state.data,
                    selectedFlightDetail: {
                        ...state.data?.selectedFlightDetail,
                        ...action.payload
                    }
                }
            }
        case FLIGHT_SEARCH_SUCCESS:
            console.log('flight search success ', action.payload)
            return {
                ...state,
                searching: false,
                data: {
                    ...state.data,
                    flightOffers: action.payload,
                }
            }
        case FLIGHT_PAYMENT_REQUEST:
            return {
                ...state,
                data: {
                    ...state.data,
                    flightPaymentData: action.payload,
                }
            }
        case CONFIRM_FLIGHT_PAYMENT_REQUEST:
            return {
                ...state,
                requestingPayment: true
            }
        case CONFIRM_FLIGHT_PAYMENT_SUCCESS:
            return {
                ...state,
                requestingPayment: false,
                data: {
                    ...state.data,
                    flightPayamentStatus: action.payload
                }
            }
        case CONFIRM_FLIGHT_PAYMENT_FAILURE:
            return {
                ...state,
                requestingPayment: false,
                error: action.payload
            }
        // case UPDATE_PASSENGER_COUNTER:
        //     const total = action.payload?.adult + action.payload?.children + action.payload?.infants;
        //     return {
        //         ...state,
        //         data: {
        //             ...state.data,
        //             selectedFlightDetail: {
        //                 ...state.data.selectedFlightDetail,
        //                 ...action.payload,
        //                 num_passengers: total
        //             }

        //         }
        //     }
        case FLIGHT_SEARCH_FAILURE:
            return {
                ...state,
                data: null,
                searching: false,
                error: action.payload
            }
        case SELECTED_FLIGHT_MERCHANT:
            return {
                ...state,
                searching: false,
                data: {
                    ...state.data,
                    selectedMerchant: action.payload
                }
            }
        case SELECTED_FLIGHT_OFFER:
            return {
                ...state,
                searching: false,
                data: {
                    ...state.data,
                    selectedFlightOffer: action.payload
                }
            }
        case SELECTED_TICKET_OPTION:
            return {
                ...state,
                searching: false,
                data: {
                    ...state.data,
                    ticketOption: action.payload
                }
            }
        case PASSENGER_DETAIL:
            return {
                ...state,
                searching: false,
                data: {
                    ...state.data,
                    passenger: action.payload
                }
            }

        case SELECTED_FLIGHT_INSURANCE:
            return {
                ...state,
                searching: false,
                data: {
                    ...state.data,
                    insurance: action.payload
                }
            }
        case INSURER_DETAIL:
            return {
                ...state,
                searching: false,
                data: {
                    ...state.data,
                    insurerDetail: action.payload
                }
            }
        case RESET_FLIGHT_DETAIL:
            return {
                ...state,
                searching: false,
                data: {
                    selectedFlightDetail: null,
                    selectedFlightOffer: null,
                    selectedMerchant: null,
                    ticketOption: null,
                    passenger: null,
                    insurance: null,
                    insurerDetail: null
                },
            }
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}