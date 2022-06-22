import {
    NOTIFICATION,
    PROCESSED,
    PROCESSING,
    EMAIL_VERIFIED,
    WARNING_DISPLAYED,
    ERROR_DISPLAYED,
    INFO_DISPLAYED,
    OFFLINE_ERROR_DISPLAYED,
    MESSAGE_CLEARED,
    TIME_OUT,
    SUCCESS_DISPLAYED
} from '../actions/types'

//Action Creators

export const actionErrorMessageDisplayed = (data) => ({
    type: ERROR_DISPLAYED,
    payload: data,
    notificationType: "error"
})

export const successMessageDisplayed = (data) => ({
    type: SUCCESS_DISPLAYED,
    payload: data,
    notificationType: "success"
})

export const messageCleared = () => ({
    type: MESSAGE_CLEARED
})

//Action
export function showSuccessMessage(message) {
    return (dispatch) => {
        dispatch(successMessageDisplayed(message));
        setTimeout(() => {
            dispatch(messageCleared());
        }, TIME_OUT);
    };
}


export function showErrorMessage(message) {
    return (dispatch) => {
        dispatch(actionErrorMessageDisplayed(serializeError(message)));
        setTimeout(() => {
            dispatch(messageCleared());
        }, TIME_OUT);
    };
}

// export function showWarningMessage(message) {
//     return (dispatch) => {
//         dispatch(warningMessageDisplayed(message));
//         setTimeout(() => {
//             dispatch(messageCleared());
//         }, TIME_OUT);
//     };
// }

// export function showInfoMessage(message) {
//     return (dispatch) => {
//         dispatch(infoMessageDisplayed(message));
//         setTimeout(() => {
//             dispatch(messageCleared());
//         }, TIME_OUT);
//     };
// }

// export function setEmailVerified() {
//     console.log('EMAIL_VERIFIED');
//     return (dispatch) => {
//         dispatch(emailVerifiedDispatched(true));
//         setTimeout(() => {
//             // dispatch(emailVerifiedDispatched(false));
//             dispatch(messageCleared());
//         }, 20000);
//     };
// }


// export function showOfflineError() {
//     return (dispatch) => {
//         dispatch(offlineMessageDisplayed());
//     };
// }

export function clearMessage() {
    return (dispatch) => {
        dispatch(messageCleared());
    };
}

export function scrollToTop() {
    window.scroll({ top: 0, behavior: 'smooth' });
}
export function serializeError(error) {
    scrollToTop();

    if (typeof error === "string") {
        return error;
    }

    if (Array.isArray(error) && error.length > 0) {
        return error.join(", ");
    }

    if (
        error?.response &&
        typeof error.response === "object" &&
        error.response !== null
    ) {
        const { body } = error.response;
        if (typeof body === "object" && body !== null) {
            const { message, error: bodyError } = body;
            if (typeof message === "string" && message !== null) {
                return message;
            }

            if (Array.isArray(message) && message.length > 0) {
                return message.join(", ");
            }

            if (typeof bodyError === "string" && bodyError !== null) {
                return bodyError;
            }

            if (Array.isArray(bodyError) && bodyError.length > 0) {
                return bodyError.join(", ");
            }
        }
    }

    if (error?.message && typeof error.message === "string" && error.message !== null) {
        // if (error.message.includes('the network is offline')) {
        //   return "";
        // }
        return error.message;
    }

    return "An error occurred, please try again later";
}



