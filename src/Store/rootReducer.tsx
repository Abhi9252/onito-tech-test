import { combineReducers } from '@reduxjs/toolkit';
import registrationSlice from "./basicRegistration/registrationSlice";

const rootReducer = combineReducers({
    registration: registrationSlice,
});

export default rootReducer;