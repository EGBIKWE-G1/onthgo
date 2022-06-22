//Imported fro the action type files;
import { NOTIFICATION, PROCESSED, PROCESSING, EMAIL_VERIFIED, WARNING_DISPLAYED, ERROR_DISPLAYED, INFO_DISPLAYED, OFFLINE_ERROR_DISPLAYED, MESSAGE_CLEARED, TIME_OUT, SUCCESS_DISPLAYED } from '../actions/types'

//initial values
const notification = {
    error: "",
    success: "",
    warning: "",
    info: "",
    offline: false,
    processing: false,
    processed: true
};

//Reducers
export default function (state = notification, action) {
    switch (action.type) {
        case WARNING_DISPLAYED:
        case ERROR_DISPLAYED:
        case INFO_DISPLAYED:
        case SUCCESS_DISPLAYED:
            return {
                ...state,
                [action.notificationType]: action.payload,
                fetching: false,
            };

        case MESSAGE_CLEARED:
            return {
                ...state,
                error: null,
                success: null,
                warning: null,
                info: null,
                fetching: false,
                // offline: false,
                // emailVerified: false,
            };
        default:
            return state;
    }
}