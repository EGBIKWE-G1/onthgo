import { 
    FLIGHT_STEPPER_INDEX, 
    INSURANCE_STEPPER_INDEX,
    NAVIGATE_TO_FLIGHT_PREVIOUS,
    NAVIGATE_TO_INSURANCE_PREVIOUS
} from "../actions/types";

const initialState = {
    flightStepperIndex: 0,
    insuranceStepperIndex: 0
}

export default function(state = initialState, action){
    switch(action.type){
        case FLIGHT_STEPPER_INDEX:
            return {
                ...state, 
                flightStepperIndex: action.payload
            }
        case INSURANCE_STEPPER_INDEX:
            return {
                ...state, 
                insuranceStepperIndex: action.payload 
            }
        case NAVIGATE_TO_FLIGHT_PREVIOUS: 
            let newFlightIndex = state.flightStepperIndex > 0 ? state.flightStepperIndex - 1 : 0;
            return {
                ...state,
                flightStepperIndex: newFlightIndex
            }
        case NAVIGATE_TO_INSURANCE_PREVIOUS:
            let newInsuranceIndex = state.insuranceStepperIndex > 0 ? state.insuranceStepperIndex - 1 : 0;
            return {
                ...state,
                insuranceStepperIndex: newInsuranceIndex
            }
        default: 
            return state;
    }
}