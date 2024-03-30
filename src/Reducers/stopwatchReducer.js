import { START_TIMER, PAUSE_TIMER, RESET_TIMER } from "../Actions/stopwatchActions";

const stopwatchReducer = (state, action) => {
    switch (action.type) {
        case START_TIMER:
            return {...state, running: true};
        case PAUSE_TIMER:
            return {...state, running: false};
        case RESET_TIMER:
            return {...state, time: 0};
        default:
            return state;
    }
};


export default stopwatchReducer;