import { loadingBar } from 'aws-amplify';
import axios from '../../axios';
import { push } from 'connected-react-router';
import {
    FLIGHT_SEARCH_FAILURE,
    FLIGHT_SEARCH_REQUEST,
    FLIGHT_SEARCH_SUCCESS,
    SELECTED_FLIGHT_MERCHANT,
    SELECTED_TICKET_OPTION,
    PASSENGER_DETAIL,
    SELECTED_FLIGHT_INSURANCE,
    INSURER_DETAIL,
    UPDATE_PASSENGER_COUNTER,
    RESET_FLIGHT_DETAIL,
    LOADING,
    SELECTED_FLIGHT_OFFER,
    FLIGHT_PAYMENT_REQUEST,
    CONFIRM_FLIGHT_PAYMENT_REQUEST,
    CONFIRM_FLIGHT_PAYMENT_SUCCESS,
    CONFIRM_FLIGHT_PAYMENT_FAILURE
} from './types';
import { showErrorMessage } from './notification';

//Action Creators
export const actionFlightSearchRequest = (data) => ({
    type: FLIGHT_SEARCH_REQUEST,
    payload: data
})
export const actionFlightSearchSuccess = (data) => ({
    type: FLIGHT_SEARCH_SUCCESS,
    payload: data
})
export const actionFlightSearchError = (error) => ({
    type: FLIGHT_SEARCH_FAILURE,
    payload: error
})

export const actionSelectedFlightMerchant = (data) => ({
    type: SELECTED_FLIGHT_MERCHANT,
    payload: data
})

export const actionSelectedFlightOffer = data => ({
    type: SELECTED_FLIGHT_OFFER,
    payload: data
})

export const actionSelectedTicketOption = data => ({
    type: SELECTED_TICKET_OPTION,
    payload: data
})

export const actionSetPassengerDetail = data => ({
    type: PASSENGER_DETAIL,
    payload: data
})

export const actionSetSelectedFlightInsuranceType = data => ({
    type: SELECTED_FLIGHT_INSURANCE,
    payload: data
})

export const actionSetInsurerDetail = data => ({
    type: INSURER_DETAIL,
    payload: data
})

export const actionUpdatePassengerCounter = data => ({
    type: UPDATE_PASSENGER_COUNTER,
    payload: data
})

export const actionResetFlightDetail = () => ({
    type: RESET_FLIGHT_DETAIL
})

export const actionFlightPaymentRequest = (data) => ({
    type: FLIGHT_PAYMENT_REQUEST,
    payload: data
})

export const actionConfirmFlightPaymentRequest = () => ({
    type: CONFIRM_FLIGHT_PAYMENT_REQUEST,

})
export const actionConfirmFlightPaymentSuccess = data => ({
    type: CONFIRM_FLIGHT_PAYMENT_SUCCESS,
    payload: data
})

export const actionConfirmFlightPaymentFailure = error => ({
    type: CONFIRM_FLIGHT_PAYMENT_FAILURE,
    payload: error
})


export const onLoading = (data) => ({
    type: LOADING,
    payload: data
})

//Actions
export const flightSearch = (data) => dispatch => {
    // dispatch(actionFlightSearchRequest())
    setTimeout(() => {
        console.log('data flight from & to', data)
        dispatch(actionFlightSearchSuccess(data))

        dispatch(push('/flightsearch'))  //navigate to the next page from here
    }, 2000)
};

export function createFlightSearchRequest(data) {
    return dispatch => {
        dispatch(actionFlightSearchRequest(data))
        return axios.FlightOffer.save(data).then(
            (response) => {
                let res = response.data;

                dispatch(actionFlightSearchSuccess(res.data));
                dispatch(push("/flightsearch"));
                window.location.href = '/flightsearch'
            },
            error => {
                dispatch(actionFlightSearchError(error));
                // dispatch(showErrorMessage(error.message));
            }
        )
    }
}

export function handleFlightPayment(formData) {
    return dispatch => {
        dispatch(actionFlightPaymentRequest(formData))
        // dispatch(push('/flightpayment'))
        window.location.href = '/flightpayment';
    }
}

export function handleConfirmFlightBooking(flightPaymentData) {
    return async dispatch => {
        dispatch(actionConfirmFlightPaymentRequest())
        return axios.FlightOffer.booking(flightPaymentData).then(
            (response) => {
                dispatch(actionConfirmFlightPaymentSuccess(response))
                dispatch(push("/success"));

            },
            error => {
                dispatch(showErrorMessage(error.messgae))
            }
        )
        //make a call to the server to post flightPaymentData
        // const response =await apiCallForBooking()
    }
}


export const selectedFlightMerchant = (data) => dispatch => {
    dispatch(actionSelectedFlightMerchant(data))
}
export const selectedFlightOffer = (data) => dispatch => {
    dispatch(actionSelectedFlightOffer(data))
}

export const selectedTicketOption = (data) => dispatch => {
    dispatch(actionSelectedTicketOption(data))
}

export const setFlightPassengerDetail = data => dispatch => {
    dispatch(actionSetPassengerDetail(data))
}


export const navigateToFlightInsurance = () => dispatch => {
    dispatch(push("/flightinsurance"))
}

export const setSelectedFlightInsuranceType = data => dispatch => {
    dispatch(actionSetSelectedFlightInsuranceType(data))
}

export const setFlightInsurerDetail = data => dispatch => {
    dispatch(actionSetInsurerDetail(data))
}
export const navigateToFlightBooking = () => dispatch => {
    dispatch(push("/flightsearch"))
}

export const navigateToFlightPayment = () => dispatch => {
    dispatch(push("/flightpayment"))
}

export const updatePassengerCounter = data => dispatch => {
    dispatch(actionUpdatePassengerCounter(data))
}

export const resetFlightDetail = () => dispatch => dispatch(actionResetFlightDetail())