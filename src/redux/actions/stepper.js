import { 
    FLIGHT_STEPPER_INDEX,
    INSURANCE_STEPPER_INDEX,
    NAVIGATE_TO_FLIGHT_PREVIOUS,
    NAVIGATE_TO_INSURANCE_PREVIOUS
} from "./types";

export const STEP_FLIGHT_SELECT = 0
export const STEP_FLIGHT_PASSENGER_DETAIL = 1
export const STEP_FLIGHT_CONFIRMATION = 2
export const STEP_INSURANCE_SELECT = 0
export const STEP_INSURER_DETAIL = 1

//Action Creator
export const actionFlightStep = (index) => ({
    type: FLIGHT_STEPPER_INDEX,
    payload: index
})

export const actionInsuranceStep = (index) => ({
    type: INSURANCE_STEPPER_INDEX,
    payload: index
})

export const actionFlightNavigateToPreviousStep = (activeStep) => ({
    type: NAVIGATE_TO_FLIGHT_PREVIOUS,
    payload: activeStep
})

export const actionInsuranceNavigateToPreviousStep = (activeStep) => ({
    type: NAVIGATE_TO_INSURANCE_PREVIOUS,
    payload: activeStep
})

//Actions
export const setActiveFlightStep = (index) => dispatch => {
    dispatch(actionFlightStep(index));
}

export const setActiveInsuranceStep = index => dispatch => {
    dispatch(actionInsuranceStep(index))
}

export const navigateToFlightPreviousStep = index => dispatch => {
    dispatch(actionFlightNavigateToPreviousStep(index))
}

export const navigateToInsurancePreviousStep = index => dispatch => {
    dispatch(actionInsuranceNavigateToPreviousStep(index))
}