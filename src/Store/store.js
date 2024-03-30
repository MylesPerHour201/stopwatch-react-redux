import {configureStore} from 'redux'
import stopwatchReducer from '../Reducers/stopwatchReducer'

const initialState = {
    running: false,
    time: 0
};

const store = createStore(stopwatchReducer, initialState);

export default store;
